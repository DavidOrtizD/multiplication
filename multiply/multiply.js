const fs = require('fs');
const colors = require('colors');

let listMultiplyResult = (base, limit) => {
    return new Promise((resolve, reject) => {
        if (base <= 0 || limit <= 0 || !Number(base) || !Number(limit)) {
            reject(`The base ${base} with limit ${limit} are not valid values for this command.`.red);
            return;
        } else {
            let results = "";
            for (let i = 0; i < limit; i++) {
                results += `${base}*${i+1} = ${base* (i+1)}\n`;
            }
            resolve(results);
            return;
        }
    });
};

let generateFile = (base, limit) => {
    return new Promise((resolve, reject) => {
        let data = "";

        if (base <= 0 || limit <= 0 || !Number(base) || !Number(limit)) {
            reject(colors.red(`The base ${base} with limit ${limit} are not valid values for this command.`));
            return;
        } else {
            for (let i = 0; i < limit; i++) {
                data += `${base}*${i+1} = ${base * (i + 1)}\n`;
            }

            fs.writeFile(`./multiplicaciones/tabla${base}.txt`, data, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(`tabla${base}.txt`);
                }
            });
        }
    });
}

module.exports = {
    generateFile,
    listMultiplyResult
};