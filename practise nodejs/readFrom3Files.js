// read from 3 files and put all the content together in the fouth file
var fs = require("fs")

fs.readFile("text1.txt", (err, data1) => {
    if (err) {
        console.log(`Error reading the file:${err}`);
    } else {
        console.log(data1.toString());
        fs.readFile("text2.txt", (err, data2) => {
            if (err) {
                console.log(`Data read from the file:${data}`);
            } else {
                fs.readFile("text3.txt", (err, data3) => {
                    if (err) {
                        console.log(`Data read from the file:${data}`)
                    } else {
                        let result = data1.toString() + data2.toString() + data3.toString()
                        fs.writeFile("text4.txt", result, (err) => {
                            if (err) {
                                console.log("error writing the file" + err)

                            } else {
                                console.log("write successful")
                            }
                        })
                    }
                })
            }
        })
    }
})