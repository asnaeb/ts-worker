import {TsWorker} from '../index.js'
import {equal} from 'node:assert'

const worker = new TsWorker('./tests/worker.ts')
worker.postMessage('hello')
worker.on('message', data => {
    equal(data, 'hello world')
    console.log(`Data received from Worker: ${data}`)
    worker.terminate().then(code => {
        console.log(`Worker exited with code ${code}`)
    })
})