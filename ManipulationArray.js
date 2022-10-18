// menambah isi array
// var arr = [];
// arr[0] = "sapi";
// arr[1] = "kerbau";
// arr[2] = "kuda";
// console.log(arr);

// menghapus isiarray
// var arr = ["ayam", "kelinci", "sapi"];
// arr[2] = undefined;
// console.log(arr);

// menampilkan isi array
// var arr = ["ayam", "kelinci", "sapi"];
// for (let index = 0; index < arr.length; index++) {
//   console.log("Nama hewan ke-" + (index + 1) + " : " + arr[index]);
// }

// Method pada Array
// 1. join
// var arr = ["ayam", "kelinci", "sapi"];
// console.log(arr.join());

// 2. pop & push
//   1.pop menambah isi array diakhir
// arr.push("kerbau", "babi");
//   2. push menghapus isi array diakhir
// arr.pop();
// console.log(arr.join(" "));

// 3. unshift & shift
//   1.unshift menambah isi array diawal
// arr.unshift("kerbau", "babi");
//   2.shift menghapus isi array diawal
// arr.shift();
// console.log(arr.join(" "));

// 4. Splice & slice
//    1. splice menyisipkan isi/element array ditengah
//     splice(indexAwal, optionalmauDiHapusBerapa, elemenBaruBolehLebihDariSatu)
// arr.splice(2, 0, "kerbau");
// console.log(arr.join(" "));
//    2. slice mengiris sebuah isi/element array menjadi array yang baru
//  slice(awal, akhir)
var arr = ["ayam", "kelinci", "sapi", "kerbau", "bebek"];
var arr2 = arr.slice(2, 4);
console.log(arr2.join(" "));
