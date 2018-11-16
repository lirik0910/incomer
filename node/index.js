require('dotenv').config();

const cron = require('node-cron');
const Parser = require('rss-parser');
const {Client} = require('pg');

const parser = new Parser();
const db = new Client();

db.connect();


const companies = ["tsla", "msft", "aapl"];
const sources = [
    {
        title: 'yahoo.finance',
        url: 'http://finance.yahoo.com/rss/headline?s={{company}}'
    }
];


cron.schedule('* * * * *', (async () => {
    const requests = [];
    companies.forEach((tag) => {
        sources.forEach((source) => {
            const url = source.url.replace('{{company}}', tag);
            requests.push({url, tag});
        })
    });

    const feed = await Promise.all(requests.map(async ({url, tag}) => {
        const {items} = await parser.parseURL(url);
        return {items, tag};
    }));

    const newsQuery = `
          INSERT INTO rss_news (guid, title, link, pub_date, source)
          VALUES ($1, $2, $3, $4, 'yahoo.finance')
          ON CONFLICT (guid)
           DO UPDATE SET 
             title = $2, 
             link  = $3;
        `;

    const result = await Promise.all(feed.map(async (i) => {
        const data = i.items.map((i) => [i.guid, i.title, i.link, i.pubDate]);
        return Promise.all(data.map(async (values) => await db.query({text: newsQuery, values})));
    }));

}));




