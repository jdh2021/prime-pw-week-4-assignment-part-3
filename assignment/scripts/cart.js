console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//Create a global variable named basket and set it to an empty array.

let basket = [];

//Create a function called addItem. It should: 
//  take an input parameter for a string item
//  add the new item to the global array basket.
//  return true indicating the item was added

function addItem (item) {
    basket.push(item);
    return true;
}

//Tests
console.log(addItem('apple'));
console.log(addItem('banana'));
console.log(addItem('cantaloupe'));
console.log(addItem('peach'));
console.log('Basket now includes ' + basket.join(', ') + '.');

//Create a function called listItems. It should:
//  loop over the items in the basket array
//  console.log each individual item on a new line

function listItems() {
    for (let i=0; i<basket.length; i++) {
        console.log(basket[i]);
    }
}

//Test
console.log(listItems());

//Create a function called empty. It should:
//  reset the basket to an empty array

function empty () {
    basket.length = 0;
    return basket;
}

//Tests
console.log(empty());
console.log('There are now ' + basket.length + ' items in the basket.');

//STRETCH GOALS

//1. Add a global const named maxItems and set it to 5.

const maxItems = 5;

//2. Create a function called isFull(). It should:
//  return false if the basket contains less than max number of items
//  return true otherwise (equal or more than maxItems)

function isFull () {
    if (basket.length >= maxItems ) {
        return true;
    } else {
        return false;
    }
}

//Test
console.log(isFull());

//3. Update the required addItem function to:
//  Use the isFull function to prevent more than maxItems from being added to the basket.
//  If an item was added to the array, return true
//  If there was no room and the item could not be added return false

function addItemStretch (item) {
    if (isFull ()) {
        console.log('There is not enough room to add a ' + item + '.');
        return false;
    } else {
    basket.push(item);
    console.log('A ' + item + ' was added.')
    return true;
    }
}

//Tests
(addItem('apple'));
(addItem('banana'));
(addItem('cantaloupe'));
(addItem('peach'));
console.log(listItems());
console.log('Basket now includes ' + basket.length + ' items.');

console.log(addItemStretch('pear'));
console.log('Basket now includes ' + basket.length + ' items.');
console.log(addItemStretch('plum'));

console.log(listItems());
console.log('Basket now includes ' + basket.length + ' items.');

//4. Create a function called removeItem. It should:
//  Take an input parameter for a string item
//  Use Array.indexOf to find the index of the first matching item in the basket.
//  Use Array.splice to remove the first matching item from the basket.
//  Return the item removed or null if the item was not found

function removeItem (item) {
    if (basket.indexOf(item) >= 0 ) {
        console.log('This item ' + item + ' is at index ' + basket.indexOf(item) + '.');
        basket.splice(basket.indexOf(item), 1);
        return console.log('A ' + item + ' was removed.');
    } else {
        console.log('This item ' + item + ' was not found.');
        return null;
    }
}

//Tests
console.log(removeItem('cantaloupe'));
console.log(basket);
console.log(removeItem('pomegranate'));