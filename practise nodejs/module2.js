var myFunc = require("./module1");// custom module;relative path
console.log("Module2");
var result = myFunc(10);
console.log("square of 10 is " + result);
function cube(p1) {
    return p1 * p1 * p1;

}
module.exports = cube;
