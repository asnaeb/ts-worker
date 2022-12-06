import {parentPort, isMainThread} from 'node:worker_threads'

if (!isMainThread) {
    parentPort?.on('message', data => {
        let response: 'world'

        if (data === 'hello') {
            response = 'world'
            parentPort?.postMessage(`${data} ${response}`)
        }
    })
}
else
    console.log(`Won't run worker code in the main thread`)