const parseArgs = () => {
    const consoleArguments = process.argv.slice(2);

    consoleArguments.forEach((value, index) => {
        if (index % 2 === 0) {
            process.stdout.write(`${value.replace(/-/gi, '')} is ${consoleArguments[index + 1]}${index === consoleArguments.length - 2 ? "" : ','} `);
        }
    })
};

parseArgs();