const jmlhAngkot = 10
const angkotBeroperasi = 6
// let nomorAngkot = 1
// ! Logik pertama
// for (let nomorAngkot = 1; nomorAngkot <= jmlhAngkot; nomorAngkot++){
//     if (nomorAngkot === 5 || nomorAngkot === 8 || nomorAngkot === 10  ) {
//         console.log(`Angkot No. ${nomorAngkot} sedang lembur.`)
//     } else if(nomorAngkot <= 6 ) {
//         console.log(`Angkot No. ${nomorAngkot} beroperasi dengan baik.`)
//     } else {
//         console.log(`Angkot No. ${nomorAngkot} tidak beroperasi dengan baik.`)
//     }
    
// }

// ! Logik kedua
for (let nomorAngkot = 1; nomorAngkot <= jmlhAngkot; nomorAngkot++){
    if (nomorAngkot <= 6  && nomorAngkot !== 5 ) {
        console.log(`Angkot No. ${nomorAngkot} beroperasi dengan baik.`)
    } else if(nomorAngkot === 5 || nomorAngkot === 8 || nomorAngkot === 10) {
        console.log(`Angkot No. ${nomorAngkot} sedang lembur.`)
    } else {
        console.log(`Angkot No. ${nomorAngkot} tidak beroperasi dengan baik.`)
    }
}