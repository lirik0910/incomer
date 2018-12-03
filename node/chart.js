const Database = require('./postgre');
const fetch = require('node-fetch');

const sources = [
    {
        title: 'iextrading.1year',
        url: 'https://api.iextrading.com/1.0/stock/{{company}}/chart/5y'
    },
    {
        title: 'iextrading.1year',
        url: 'https://api.iextrading.com/1.0/stock/{{company}}/chart/1d'
    },
];
const db = new Database();


module.exports = async function updateCharts(type = 'day') {

    try {
        const data = await getCharts(type);
        const result = await db.addChart(data);
        console.log('Charts updated');
    } catch (e) {
        console.log(e);
    }
};

async function getCharts(type) {
    const requests = [];
    const companies = await db.getCompanies();
    companies.forEach(({id, symbol}) => {
        const source = type === 'day' ? sources[1] : sources[0];
        const url = source.url.replace('{{company}}', symbol);
        requests.push({url, symbol, person_id: id});
    });

    return await Promise.all(requests.map(async ({url, symbol, person_id}) => {
        try {
            const request = await fetch(url);
            const items = await request.json();
            return {person_id, items, symbol};
        } catch (e) {
            console.log(e);
            return false;
        }
    }).filter((i) => i !== false));
}
