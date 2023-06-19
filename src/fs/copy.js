import fs from 'node:fs';
import path from 'node:path';
import * as url from 'url';

const copy = async () => {
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
    const filePath = path.join(__dirname, 'files');
    const filesCopyPath = path.join(__dirname, 'files_copy');

    fs.stat(filePath, (err, stats) => {
        if (err) {
            throw Error('FS operation failed');
        } else {
            fs.mkdir(filesCopyPath, err => {
                if (err) throw Error('FS operation failed');
            });
            fs.cp(filePath, filesCopyPath, { recursive: true }, err => {
                if (err) return new Error(err.message);
            })
        }
    })
};

await copy();
