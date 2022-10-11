// function cetakAngka(n) {
//   // start base case
//   if (n === 0) {
//     return;
//   }
//   // End base case
//   console.log(n);
//   cetakAngka(n - 1);
// }
// cetakAngka(10);

function faktorial(n) {
  if (n === 0) {
    return 1;
  }
  console.log(n);
  return n * faktorial(n - 1);
}
faktorial(5);
