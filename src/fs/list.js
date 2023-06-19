import fs from 'node:fs';
import path from 'node:path';
import * as url from 'url';

const list = async () => {
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
    const filePath = path.join(__dirname, 'files');

    fs.access(filePath, err => {
        if (err) {
            throw new Error('FS operation failed');
        } else {
            fs.readdir(filePath, (err, files) => {
                if (err) {
                    throw new Error('FS operation failed');
                } else {
                    console.log(files);
                }
            })
        }
    })
};

await list();