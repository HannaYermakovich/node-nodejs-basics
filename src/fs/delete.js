import fs from 'node:fs';
import path from 'node:path';
import * as url from 'url';

const remove = async () => {
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
    const filePath = path.join(__dirname, 'files', 'fileToRemove.txt');

    fs.access(filePath, err => {
        if (err) throw Error('FS operation failed');

        fs.rm(filePath, err => {
            if (err) throw Error('FS operation failed');
        });
    })
};

await remove();