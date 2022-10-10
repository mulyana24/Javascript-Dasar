// global scope / windows scope
var a = 1;

function tes() {
  var b = 2;
  //   console.log(a);
  // name conflict
  var a = 2;
}
tes();
// console.log(b);
console.log(a);
