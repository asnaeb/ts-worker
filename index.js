const {Worker} = require('node:worker_threads');

module.exports.TsWorker = class extends Worker {
    constructor(path, options = {}) {
        super('./worker.js', {
            ...options,
            workerData: {
                ...options?.workerData,
                path
            }
        });
    }
}