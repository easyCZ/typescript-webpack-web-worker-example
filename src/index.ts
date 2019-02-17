// Note the import Foo = require(...) syntax here. This is key to get web workers loading as embedded resources.
import ExampleWorker = require('worker-loader!./example.worker');

// Regular application code.
console.log('main', 'application running.');

console.log('main', 'creating a worker.');
// Create a new worker as if you're instantiating one directly.
// No path to compiled script needed.
const worker = new ExampleWorker();

console.log('main', 'sending a message to worker.');

// Posting a message is typed correctly.
worker.postMessage('message from main');

// Similarly, receiver of messages has the correct inferred type.
worker.onmessage = (event) => {
    console.log('main', 'received message from worker: ', event.data)
};

