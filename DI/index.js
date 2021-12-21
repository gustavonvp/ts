const axios = require('axios');
const WikipediaSearch = require('./test/wikipedia-search');

const run = async () => {
    const wikiSearch = new WikipediaSearch();

    const results = await wikiSearch.search('space');

    console.log(results);
};

run();