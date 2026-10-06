// Type `usernames` as a string array and `ratings` as a number array
// using the [] syntax. For `products`, create a separate Product
// interface for its elements and type the array with it.

const usernames: string[] = ['alice', 'bob', 'charlie'];

const ratings: number[] = [4.5, 3.8, 5];

interface Product {
  id: number;
  title: string;
}

const products: Product[] = [
  { id: 1, title: 'Phone' },
  { id: 2, title: 'Laptop' },
];

console.log(`Usernames: ${JSON.stringify(usernames)}`);
console.log(`Ratings: ${JSON.stringify(ratings)}`);
console.log(`Products: ${JSON.stringify(products)}`);

export {};
