import zlib from 'node:zlib';
import fs from 'node:fs';
import path from 'node:path';
import * as url from 'url';

const decompress = async () => {    
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
    const pathReadStream = path.join(__dirname, './archive.gz');
    const pathWriteStream = path.join(__dirname, 'unzip.txt');

    const rs = fs.createReadStream(pathReadStream);
    const ws = fs.createWriteStream(pathWriteStream);
    const unzip = zlib.createGunzip();

    rs.pipe(unzip).pipe(ws);
};

await decompress();