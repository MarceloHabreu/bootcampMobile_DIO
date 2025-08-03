// USE CASES

// -> create item with subtotal correct
async function createItem(name, price, qty) {
   return {
      name,
      price,
      qty,
      subtotal: () => price * qty,
   };
}

export default createItem;
