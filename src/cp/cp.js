import cp from 'node:child_process';
import path from 'node:path';
import * as url from 'url';

const spawnChildProcess = async (args) => {
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
    const filePath = path.join(__dirname, './files/script.js');

    cp.fork(filePath, [...args.split(' ')]);
};

spawnChildProcess('--select --all --options');
