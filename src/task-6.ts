// Make this function generic with a type parameter T so it works with
// arrays of any type, and pass the type explicitly at each call site
// (e.g. getFirstElement<number>(...)).

function getFirstElement(arr) {
  return arr[0];
}

getFirstElement([1, 2, 3]); // 1
getFirstElement(['a', 'b', 'c']); // "a"
getFirstElement([true, false, true]); // true

export {};
