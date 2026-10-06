// Add an explicit return type to getMessage() stating that it returns
// a Promise resolving to a string. Leave the implementation unchanged.

function getMessage(): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Hello from TS');
    }, 1000);
  });
}

getMessage().then((result) => console.log(result));

export {};
