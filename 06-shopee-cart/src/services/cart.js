// where actions my cart can do?

// USE CASES

// -> add item to cart
async function addItem(userCart, item) {
   userCart.push(item);
}

// -> display items in cart
async function displayCart(userCart) {
   console.log(
      'Shopee cart list: ',
      userCart.forEach((item, index) => {
         console.log(
            `${index + 1}. ${item.name} - R$ ${item.price} | ${
               item.qty
            } units | subtotal: ${item.subtotal()}. \n`
         );
      })
   );
}

// -> delete item from cart
async function deleteItem(userCart, name) {
   const index = userCart.findIndex((item) => item.name === name);
   if (index !== -1) {
      userCart.splice(index, 1);
   }
}

// -> remove item by index
async function removeItemByIndex(userCart, index) {
   const deleteIdx = index - 1;
   if (index >= 0 && index < userCart.length) {
      userCart.splice(deleteIdx, 1);
   }
}

// -> remove one item - decrease one item
async function removeItem(userCart, item) {
   const indexFound = userCart.findIndex((i) => i.name === item.name);
   if (indexFound === -1) {
      console.log('Item not found in your cart');
      return;
   } else if (userCart[indexFound].qty > 1) {
      userCart[indexFound].qty -= 1;
      userCart[indexFound].subtotal();
   } else {
      userCart[indexFound].subtotal();
      userCart.splice(indexFound, 1);
   }
}

// -> calculate total
async function calculateTotal(userCart) {
   const total = userCart.reduce((total, item) => total + item.subtotal(), 0);
   console.log(total);
}

export { addItem, deleteItem, removeItem, removeItemByIndex, displayCart, calculateTotal };
