const https = require('https');
const scrape = require('website-scraper');

const options = {
  urls: [
    'https://mitpress.mit.edu/sites/default/files/sicp/full-text/book/book-Z-H-4.html'
  ],
  directory: './output/',
  recursive: true,
  maxRecursiveDepth: 2,
};

(async () => {
  await scrape(options);
})();
