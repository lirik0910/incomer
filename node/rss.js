const Parser = require('rss-parser');
const Database = require('./postgre');
const db = new Database();
const parser = new Parser();

const sources = [
    {
        title: 'yahoo.finance',
        url: 'http://finance.yahoo.com/rss/headline?s={{company}}'
    }
];

async function getFeed() {
    const requests = [];
    const companies = await db.getCompanies();

    companies.forEach(({id, symbol}) => {
        sources.forEach((source) => {
            const url = source.url.replace('{{company}}', symbol);
            requests.push({url, symbol, person_id: id});
        })
    });

    return await Promise.all(requests.map(async ({url, symbol, person_id}) => {
        const {items} = await parser.parseURL(url);
        return {items, symbol, person_id};
    }));
}

module.exports = async function updateRss() {

    try {
        const feed = await getFeed();
        const result = await db.addNews(feed);
        console.log('RSS feed updated');
    } catch (e) {
        console.log(e);
    }
};


