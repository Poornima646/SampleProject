var fs = require("fs");

fs.readFile("text1.txt", (err, data) => {
    if (err) {
        console.log(`Error reading the file:${err}`);
    }
    else {
        console.log(`Data read from the file:${data}`);
    }
})
