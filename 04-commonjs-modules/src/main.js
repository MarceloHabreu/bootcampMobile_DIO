const { getProductLabel } = require('./services/products');
const config = require('./services/config');
const database = require('./services/database');

async function main() {
   getProductLabel('Product 1');
   console.log(config.version);
   database.connectDatabase();
}
main();
