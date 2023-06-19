import fs from 'node:fs';
import path from 'node:path';
import * as url from 'url';

const create = async () => {
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
    const filePath = path.join(__dirname, 'files', 'fresh.txt');
    const text = 'I am fresh and young';

    fs.writeFile(filePath, text, { flag: 'wx' }, (err) => {
        if (err) {
            throw new Error('FS operation failed');
        }
    })
};

await create();