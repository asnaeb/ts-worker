const {resolve} = require('node:path');
const {workerData, isMainThread, Worker} = require('node:worker_threads');

if (isMainThread) {
    module.exports.TsWorker = class extends Worker {
        constructor(path, options = {}) {
            super(__filename, {
                ...options,
                workerData: {
                    ...options?.workerData,
                    path
                }
            });
        }
    }
} else {
    require('ts-node').register();
    require(resolve(workerData.path));
}