const transform = async () => {

    process.stdin.on('data', (chuck) => {
        const chuckStringified = chuck.reverse().toString();

        process.stdout.write(chuckStringified + '\n');
    })
};

await transform();