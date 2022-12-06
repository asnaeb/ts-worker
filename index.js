const {Worker} = require('node:worker_threads');
const {readFileSync} = require('node:fs');
const {resolve} = require('node:path');
const ts = require('typescript');

module.exports.TsWorker = class extends Worker {
    constructor(path, options = {}) {
        const file = readFileSync(resolve(path), {encoding: 'utf-8'});

        /** @type import('typescript').CompilerOptions */
        let compilerOptions;

        if (options.compilerOptions) {
            compilerOptions = options.compilerOptions;
            delete options.compilerOptions;
        }
        else try {
            compilerOptions = require(resolve('./tsconfig.json'));
        }
        catch {
            compilerOptions = {};
        }

        const {outputText} = ts.transpileModule(file, {compilerOptions});

        super(outputText, {...options, eval: true});
    }
}