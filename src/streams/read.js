import fs from 'node:fs';
import path from 'node:path';
import * as url from 'url';

const read = async () => {
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
    const filePath = path.join(__dirname, './files/fileToRead.txt');

    const readStream = fs.createReadStream(filePath);

    readStream.pipe(process.stdout);
};

await read();