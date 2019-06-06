/*** App imports ***/
const argv = require('./config/yargs').args;
const { generateFile, listMultiplyResult } = require('./multiply/multiply');
const { colors } = require('colors');
const { sColors } = require('colors/safe');

/*** Appliation Logic ***/
let command = argv._[0];
let base = argv.base;
let limit = argv.limit;


switch (command) {
    case "list":
        listMultiplyResult(base, limit).then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
        break;

    case "generate":
        generateFile(base, limit)
            .then((response) => {
                console.log(`File ${response.green} successful created.`);
            })
            .catch((error) => {
                console.log(error);
            });
        break;

    default:
        console.log("Command not recognized.");
        break;

}

/*** Just to remember the use of process ***/
/*let argv = process.argv;

argv = argv.find((value) => {
    if (value.indexOf("--base") >= 0) {
        return value;
    }
});*/

/*** This console log executes first because the way node stack works ***/
//console.log(argv);