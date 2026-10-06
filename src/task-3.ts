// Type `usernames` as a string array and `ratings` as a number array
// using the [] syntax. For `products`, create a separate Product
// interface for its elements and type the array with it.

const usernames = ['alice', 'bob', 'charlie'];

const ratings = [4.5, 3.8, 5];

const products = [
  { id: 1, title: 'Phone' },
  { id: 2, title: 'Laptop' },
];

console.log(`Usernames: ${JSON.stringify(usernames)}`);
console.log(`Ratings: ${JSON.stringify(ratings)}`);
console.log(`Products: ${JSON.stringify(products)}`);

export {};
