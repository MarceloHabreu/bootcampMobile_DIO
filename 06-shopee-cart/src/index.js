import * as cartService from './services/cart.js';
import createItem from './services/item.js';

console.log('Welcome to the Shopee Cart!');
const myCart = [];
const myWhishlist = [];

const item1 = await createItem('hotwheels ferrari', 20.99, 2);
const item2 = await createItem('hotwheels lamborghini', 39.99, 3);
const item3 = await createItem('hotwheels mclaren', 41.99, 5);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item3);
// await cartService.addItem(myWhishlist, item2);

// console.log('My wishlist shopee cart total is: ');
// await cartService.calculateTotal(myWhishlist);

// console.log('My wishlist shopee cart total after the removal is: ');

// await cartService.deleteItem(myWhishlist, item2.name);
// await cartService.calculateTotal(myWhishlist);

await cartService.displayCart(myCart);
await cartService.displayCart(myWhishlist);

console.log('My shopee cart total is: ');
await cartService.calculateTotal(myCart);

console.log('My shopee cart total after the remove one item quantity is: ');
await cartService.removeItem(myCart, item3);
await cartService.removeItem(myCart, item1);
await cartService.displayCart(myCart);
await cartService.calculateTotal(myCart);
