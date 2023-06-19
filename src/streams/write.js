import fs from 'node:fs';
import path from 'node:path';
import * as url from 'url';

const write = async () => {
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
    const filePath = path.join(__dirname, './files/fileToWrite.txt');

    const writableStream = fs.createWriteStream(filePath);

    process.stdin.on('data', (chuck) => {
        const chuckStringified = chuck.toString();

        writableStream.write(chuckStringified);
    });

    process.stdin.on('end', () => {
        writableStream.end();
    });
};

await write();