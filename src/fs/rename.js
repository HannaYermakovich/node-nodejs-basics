import fs from 'node:fs';
import path from 'node:path';
import * as url from 'url';

const rename = async () => {
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
    const filePath = path.join(__dirname, 'files', 'wrongFilename.txt');
    const newPath = path.join(__dirname, 'files', 'properFilename.md');

    fs.access(filePath, err => {
        if (err) {
            throw Error('FS operation failed');
        } else {
            fs.rename(filePath, newPath, err => {
                if (err) throw Error('FS operation failed');
            });
        }
    })
};

await rename();