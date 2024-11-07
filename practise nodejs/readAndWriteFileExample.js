// read the contents of text1.txt and write into text3.txt

var fs = require("fs");
fs.readFile("text1.txt", (err, data) => {
    if (err) {
        console.log(`Error reading the file:${err}`);
    }
    else {
        console.log(`Data read from the file :` + data.toString());
        fs.writeFile("text3.txt", data.toString(), (err) => {
            if (err) {
                console.log(`Error during the write operation :${err}`);
            }
            else {
                console.log("Write into the file is successful")
            }
        })
    }

})



