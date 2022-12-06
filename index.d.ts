import {Worker, WorkerOptions} from 'node:worker_threads'
import {CompilerOptions} from 'typescript'

interface TsWorkerOptions extends Omit<WorkerOptions, 'workerData' | 'eval'> {
    workerData: {[k: string]: any; path?: never}
    compilerOptions?: CompilerOptions
}

export declare class TsWorker extends Worker {
    constructor(path: string, options?: TsWorkerOptions)
}