var { addNums, getRemainder } = require("./calculator");
var a = 10, b = 20, c = 30;

var result = addNums(a, b, c);
console.log(`Sum of ${a}, ${b} and ${c} is ${result}`);

var result = getRemainder(b, a);
console.log(`Remainder when ${b}/${a} is ${result}`);//0
/*
var emp = { empId: 101, empName: "sara", salary: 789, location: "India" };
var { empId, empName } = emp;//destructure of an object
var obj = {
    addNums: addNums,
    subNums: subNums,
    mulNums: mulNums,
    divNums: divNums,
    getRemainder
};
var { addNums, getRemainder } = obj;*/
