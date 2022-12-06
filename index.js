import {Worker} from 'node:worker_threads';
import {readFileSync} from 'node:fs';
import {resolve} from 'node:path';
import ts from 'typescript';

export class TsWorker extends Worker {
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