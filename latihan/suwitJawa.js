var tanya = true;
while (tanya) {
  // menangkap pilihan player
  var player = prompt("pilih: gajah, semut, orang");
  // menangkap pilihan computer dengan bilangan random
  var computer = Math.random();
  if (computer < 0.34) {
    computer = "gajah";
  } else if (computer >= 0.34 && computer < 0.67) {
    computer = "orang";
  } else {
    computer = "semut";
  }
  // menentukan rules
  var hasil = "";
  if (player == computer) {
    hasil = "SERI";
  } else if (player == "gajah") {
    // if(computer=='orang'){
    //     hasil='MENANG!'
    // }else{
    //     hasil='KALAH'
    // }
    hasil = computer == "orang" ? "MENANG" : "KALAH";
  } else if (player == "orang") {
    hasil = computer == "gajah" ? "KALAH" : "MENANG";
  } else if (player == "semut") {
    hasil = computer == "orang" ? "KALAH" : "MENANG";
  } else {
    hasil = "anda memasukan pilihan yang salah!!";
  }

  // menampilkan hasil
  alert(
    `Kamu memilih: ${player} dan Komputer memilih ${computer} \nMaka hasilnya : Kamu ${hasil}`
  );
  tanya = confirm("lagi?");
}
alert("Terima kasih sudah bermain.");
