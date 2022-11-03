const {Worker} = require('node:worker_threads');
const {join} = require('path')

module.exports.TsWorker = class extends Worker {
    constructor(path, options = {}) {
        super(join(__dirname, 'worker.js'), {
            ...options,
            workerData: {
                ...options?.workerData,
                path
            }
        });
    }
}