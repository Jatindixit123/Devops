const {readFile} = require("fs/promises");
const {appendFile} = require("fs/promises");

async function readCurrentFile(fileName) {
    try {
        const data = await readFile(fileName);
        console.log(data.toString());
    } catch(err) {
        console.error("Error while trying to read the file : ",err.message);
    }
}

async function appendToFile(fileName, data) {
    try {
        await appendFile(fileName, data, {flag: 'w'});
    } catch (err) {
        console.error("Error while trying to read the file : ",err.message);
    }
}

// 1. we import node promises module
// 2. we use readFile method to process our file
// 3. using promises we can read/write files in an asynchronous manner
// 4. Inside readFile methods we have an argument that is file that we want to read
// 5. Wrap the code inside try/catch block for error handling to ensure that we can properly control the error message
