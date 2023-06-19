import fs from 'node:fs';
import path from 'node:path';
import * as url from 'url';

const read = async () => {
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
    const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

    fs.access(filePath, err => {
        if (err) {
            throw new Error('FS operation failed');
        } else {
            fs.readFile(filePath, { encoding: 'utf8' }, (err, data) => {
                if (err) {
                    throw new Error('FS operation failed');
                } else {
                    console.log(data);
                }
            })
        }
    })
};

await read();