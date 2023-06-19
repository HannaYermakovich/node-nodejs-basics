import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import * as url from 'url';

const calculateHash = async () => {
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
    const filePath = path.join(__dirname, './files/fileToCalculateHashFor.txt');
    
    await fs.readFile(filePath, (err, data) => {
        if (err) {
            throw err
        } else { 
            const hash = crypto.createHash('sha256').update(data).digest('hex');
            console.log(hash);
        }
    });
};

await calculateHash();