var fs = require("fs");
/*
writeFile --- 4params;
1st- path to the file into which write has to be done
2nd: data to be written
3rd: options
4th : callback function
*/
fs.writeFile("text2.txt", "hello junkhook", { flag: "a" }, (err) => {
    if (err) {
        console.log(`Error during the write operation :${err}`);
    }
    else {
        console.log("Write into the file is successful")
    }
})
