const axios = require('axios');

module.exports = class WikipediaSearch{
    constructor() {
        this.axios = axios.create({});
    }


    async search(term) {
        const res = await this.axios.get(
            `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=space`
        );
            
        return res.data.query.search;
    };
}