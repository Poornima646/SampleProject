var employee = require("./employeeManage");

const addemp = (data) => {
    employee.push(data)
    return employee;
};

const updateemp = (data) => {
    oldemp = employee.find((e) => e.empId == data.empId);
    oldemp.name = data.name
    newdata = { ...employee, oldemp }
    return employee
}

const deleteemp = (data) => {
    result = employee.filter((e) => e.empId != data.empId);
    return result
}

const getemp = (data) => {
    result = employee.find((e) => e.empId == data.empId);
    return result
}

console.log("add", addemp({ empId: 11, name: "Noah", project: "Project K" }));
console.log("update", updateemp({ empId: 11, name: "rameshnaidu", project: "Project K" }));
console.log("de", deleteemp({ empId: 5 }));
console.log("get", geteemp({ empId: 1 }));
