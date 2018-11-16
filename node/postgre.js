require('dotenv').config();
const {Client} = require('pg');

class Database {

    constructor() {
        this.db = new Client();
        this.db.connect();

        this.newsQuery = `
          INSERT INTO rss_news (guid, title, link, pub_date, source)
          VALUES ($1, $2, $3, $4, 'yahoo.finance') 
          ON CONFLICT (guid)
                      DO UPDATE SET
                        title = $2,
                        link  = $3
          RETURNING id
        `;

        this.companiesQuery = `
            SELECT DISTINCT persons.id as id, person_field_contents.value as symbol FROM persons 
            JOIN person_types ON persons.type_id = person_types.id
            JOIN person_type_fields ON person_types.id = person_type_fields.type_id
            JOIN person_field_contents ON person_field_contents.person_id = persons.id
            WHERE person_types.title = 'company' 
              AND person_field_contents.field_id = person_type_fields.id
              AND person_type_fields.title = 'symbol';
        `;

        this.tagsQuery = `
          INSERT INTO tags (person_id, value)
          VALUES ($1, $2)
        `;

        this.personRssQuery = `
          INSERT INTO person_rss_collections (person_id, rss_id)
          VALUES ($1, $2) 
          ON CONFLICT (person_id, rss_id) DO NOTHING;
        `;

    }

    async addNews(feed) {

        return Promise.all(feed.map(async (feed_item) => {
            const data = feed_item.items.map((i) => [i.guid, i.title, i.link, i.pubDate]);
            const queries = data.map(async (values) => {
                const rss = await this.db.query({text: this.newsQuery, values});
                await this.db.query({text: this.personRssQuery, values:[feed_item.person_id, rss.rows[0].id]});
                return rss;
            });

            return Promise.all(queries);
        }));
    }


    async getCompanies() {
        const companies = await this.db.query(this.companiesQuery);
        return companies.rows;
    }

    async updateTags() {

    }
}


module.exports = Database;