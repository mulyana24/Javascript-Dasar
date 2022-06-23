// pengulangan menggunakan for
const jmlhAngkot = 10
const angkotBeroperasi = 6
let nomorAngkot = 1
while (nomorAngkot <= angkotBeroperasi) {
    console.log(`Angkot No. ${nomorAngkot} beroperasi dengan baik.`)
    nomorAngkot++;
}
for (nomorAngkot = angkotBeroperasi + 1; nomorAngkot <= jmlhAngkot; nomorAngkot++){
    console.log(`Angkot No. ${nomorAngkot} tidak beroperasi dengan baik.`)
    
}