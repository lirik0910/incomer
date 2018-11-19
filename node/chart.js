const Database = require('./postgre');
const fetch = require('node-fetch');

const sources = [
    {
        title: 'iextrading.1year',
        url: 'https://api.iextrading.com/1.0/stock/{{company}}/chart/1y'
    },
    {
        title: 'iextrading.1year',
        url: 'https://api.iextrading.com/1.0/stock/{{company}}/chart/1d'
    },
];
const db = new Database();


module.exports = async function updateCharts() {

    try {
        const data = await getCharts();
        const result = await db.addChart(data);
        console.log(result);
        console.log('Charts updated');
    } catch (e) {
        console.log(e);
    }
};

async function getCharts() {
    const requests = [];
    const companies = await db.getCompanies();
    companies.forEach(({id, symbol}) => {
        sources.forEach((source) => {
            const url = source.url.replace('{{company}}', symbol);
            requests.push({url, symbol, person_id: id});
        })
    });

    return await Promise.all(requests.map(async ({url, symbol, person_id}) => {
        const request = await fetch(url);
        const items = await request.json();
        return {person_id, items, symbol};
    }));
}
