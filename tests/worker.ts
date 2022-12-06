import {parentPort, isMainThread} from 'node:worker_threads'

if (!isMainThread) {
    parentPort?.on('message', (data: string) => {
        if (data === 'work')
            parentPort?.postMessage('I am working')
    })
}
else
    console.log(`Won't run worker code in the main thread`)