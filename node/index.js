require('dotenv').config();
const rss = require('./rss');
const chart = require('./chart');
const cron = require('node-cron');
//
// cron.schedule('*/10 * * * *', rss);
// cron.schedule('*/15 * * * *',() => chart());
// cron.schedule('0 0 * * *',() => chart('year'));
rss();