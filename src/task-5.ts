// Type `status` as a union of exactly "loading" | "success" | "error",
// and type the function's return value (it returns nothing). Leave
// the implementation unchanged.

function logStatus(status) {
  if (status === 'loading') {
    console.log('Loading...');
  } else if (status === 'success') {
    console.log('Success!');
  } else if (status === 'error') {
    console.log('Something went wrong');
  }
}

logStatus('loading');

export {};
