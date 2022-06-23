// const angka = parseInt(prompt("Masukan angka anda: "))

// switch(angka) {
//     case 1:
//         alert("Anda memasukan angka 1")
//     break
//     case 2:
//         alert("Anda memasukan angka 2")
//     break
//     case 3:
//         alert("Anda memasukan angka 3")
//     break
//     default:
//         alert("Anda memasukan angka yang salah")
//     break
// }

const item = prompt("Masukan nama makanan atau minuman : \n (cth: Gerejeg, Bala-bala, Gehu, Teajus, Milo, Marimas)")

switch (item) {
    case "Gerejeg":
        alert("Makanan gerejeg adalah makanan khas sunda")
        break;
    case "Bala-bala":
        alert("Makanan bala-bala adalah makanan khas Indonesia")
        break;
    case "Gehu":
        alert("Makanan gehu adalah makanan khas Indonesia")
        break;
    case "Teajus":
        alert("Minuman kurang sehat")
        break;
    case "Milo":
        alert("Minuman sehat untuk anak")
        break;
    case "Marimas":
        alert("Minuman kurang sehat")
        break;
    default:
        alert("Makanan atau minuman yang anda masukkan tidak terdaftar!")
        break;
}