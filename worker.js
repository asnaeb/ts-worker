const {resolve} = require("node:path");
const {workerData} = require("node:worker_threads");

require('ts-node').register();
require(resolve(workerData.path));