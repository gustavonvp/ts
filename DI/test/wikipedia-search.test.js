const WikipediaSearch = require('../wikipedia-search');

const run = async () => {
    const wikiSearch = new WikipediaSearch();


    const results = await wikiSearch.search();

    if(results.length !== 10 ) {
        throw new Error('Falied to fetch the correct number of results');
    }


};

run();