const {TsWorker} = require('../index.js');
const {equal} = require('node:assert');

const worker = new TsWorker('./tests/worker.ts');
worker.postMessage('work');
worker.on('message', data => {
    equal(data, 'I am working');
    console.log(`Worker responded: ${data}`);
    worker.terminate().then(code => {
        console.log(`Worker exited with code ${code}`);
    });
})