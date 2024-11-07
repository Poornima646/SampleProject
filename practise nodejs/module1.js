console.log("welcome DXC");
console.log("poornima");

var i = 10;
function squarefunc(p1) {
    return p1 * p1;
}
//local to that module
//whatever has to be available in other modules,we need to export them
module.exports = squarefunc;
