// Add an explicit return type to getMessage() stating that it returns
// a Promise resolving to a string. Leave the implementation unchanged.

function getMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Hello from TS');
    }, 1000);
  });
}

getMessage().then((result) => console.log(result));

export {};
