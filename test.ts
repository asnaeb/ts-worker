import {isMainThread, parentPort} from 'node:worker_threads'
import {TsWorker} from './worker'
import * as assert from 'assert'

if (isMainThread) {
    const worker = new TsWorker('./test.ts')
    worker.postMessage('hello')
    worker.on('message', data => {
        assert.equal(data, 'hello world')
        worker.terminate().then(code => {
            console.log(`Worker exited with code ${code}`)
        })
    })
} else {
    parentPort?.on('message', data => {
        parentPort?.postMessage(data + ' world')
    })
}
