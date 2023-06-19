import path from 'node:path';
import fs from 'fs/promises';
import os from 'node:os';
import http from 'node:http';
import * as url from 'url';
import('./files/c.js');

const random = Math.random();
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const __filename = url.fileURLToPath(import.meta.url);

let unknownObject;

const readJSON = async (pathFile) => {
    const promise = await fs.readFile(path.join(__dirname, pathFile), (err) => {
        if (err) {
            return new Error('Error occurred!');
        }
    });
    return JSON.parse(promise)
}

if (random > 0.5) {
    unknownObject = await readJSON('./files/a.json');
} else {
    unknownObject = await readJSON('./files/b.json');
}

console.log(`Release ${os.release()}`);
console.log(`Version ${os.version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = http.createServer((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export default {
    unknownObject,
    myServer
}

