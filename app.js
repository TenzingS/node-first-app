// #2 first line of code to be processed
// require was loaded into memory in the first step 
const fs = require('fs').promises;

// #1 this and all other node.js internal functions
// like require() gets loaded into their respective scope
async function helloWorld(){
  // #4 line of code gets processed, log into console
  console.log("started the process")
  // #5 we start the async operation of writing to a file
  // The operation and its result gets queued on the event loop
  // function goes to sleep until the async operation gets solved
  await fs.writeFile('helloworld.txt', 'Hello World!');
  // #7 when the entire script gets processed then the event loop
  // start processing and listening the kernel for the results
  // of pending I/O operations, so when the file finish writing
  // the event loop pool phase, detects it, resolve the promise
  // and continue the execution of the sleeping pending function
  console.log('Yay we succesfully wrote to a file!')
  //#8 Since there are no more pending events in the event loop
  // Node shuts down cleanly!
}

// #3 line of code gets processed, call function
helloWorld();
// #6 we go back to executing the rest of the script
console.log("The hello world function is still awaiting");