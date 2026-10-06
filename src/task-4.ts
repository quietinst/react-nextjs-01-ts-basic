// Add explicit types to the parameters (email is optional) and to the
// function's return value (it returns nothing). Leave the
// implementation unchanged.

function printUserInfo(name, age, email) {
  console.log('Name:', name);
  console.log('Age:', age);
  if (email) {
    console.log('Email:', email);
  }
}

printUserInfo('Alice', 30);
printUserInfo('Bob', 25, 'bob@mail.com');

export {};
