async function getFullName(codeId, productName) {
   return codeId + ' - ' + productName;
}

async function getProductLabel(productName) {
   return 'Product: ' + productName;
}

module.exports = {
   getFullName,
   getProductLabel,
};
