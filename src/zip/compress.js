import zlib from 'node:zlib';
import fs from 'node:fs';
import stream from 'node:stream';
import path from 'node:path';
import * as url from 'url';

const compress = async () => {
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
    const pathReadStream = path.join(__dirname, './files/fileToCompress.txt');
    const pathWriteStream = path.join(__dirname, './archive.gz');

    const gz = zlib.createGzip();
    const rs = fs.createReadStream(pathReadStream);
    const ws = fs.createWriteStream(pathWriteStream);

    stream.pipeline(rs, gz, ws, (err) => {
        if (err) {
            console.log('Error', err.message);
        }
    })
};

await compress();