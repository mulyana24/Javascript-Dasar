// function tambah(a, b) {
//   return a + b;
// }

// function kali(a, b) {
//   return a * b;
// }

// // var a = parseInt(prompt("Masukan nilai pertama : "));
// // var b = parseInt(prompt("Masukan nilai kedua : "));
// // var hasil = tambah(a, b);
// var hasl = kali(tambah(2, 1), tambah(1, 2));
// alert(hasl);

function tambah() {
  let hasil = 0;
  for (let index = 0; index < arguments.length; index++) {
    hasil += arguments[index];
  }
  return hasil;
}
var jml = tambah(3, 3, 3, 3);
alert(jml);
