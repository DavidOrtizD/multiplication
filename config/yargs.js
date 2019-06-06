const argsOptions = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: 10
    }
};

const args = require('yargs')
    .command('list', "List a multiplication list of the selected base number", argsOptions)
    .command('generate', "Generates a file with the multiplciations from the base number given to the limit specified", argsOptions)
    .help()
    .argv;

module.exports = {
    args
};