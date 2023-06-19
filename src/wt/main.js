import os from 'node:os';
import wt from 'node:worker_threads';
import path from 'node:path';
import * as url from 'url';

const performCalculations = async () => {
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
    const filePath = path.join(__dirname, './worker.js');

    const cpuLength = os.cpus().map((_, i) => {
        return new Promise((resolve, reject) => {
            const worker = new wt.Worker(filePath, {
                workerData: i + 10
            })
            worker.on('message', message => resolve(message));
            worker.on('error', error => resolve(error));
        })
    });

    return Promise.all(cpuLength).then(res => {
        const up = res.map(data => ({ status: 'resolved', data }));
        console.log(up);
    }).catch(err => console.log('Error', err.message));

};

await performCalculations();