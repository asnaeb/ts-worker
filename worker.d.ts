import {Worker, WorkerOptions} from 'node:worker_threads'

type TsWorkerOptions = Omit<WorkerOptions, 'workerData'> &
    {
        workerData: {
            [k:string]: any
            path?: never
        }
    }

export declare class TsWorker extends Worker {
    constructor(filename: string, options?: TsWorkerOptions)
}