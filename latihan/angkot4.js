const jmlhAngkot = 10
const angkotBeroperasi = 6
// let nomorAngkot = 1
for (let nomorAngkot = 1; nomorAngkot <= jmlhAngkot; nomorAngkot++){
    if (nomorAngkot <= 6) {
        console.log(`Angkot No. ${nomorAngkot} beroperasi dengan baik.`)
    } else if(nomorAngkot === 8) {
        console.log(`Angkot No. ${nomorAngkot} sedang lembur.`)
    } else {
        console.log(`Angkot No. ${nomorAngkot} tidak beroperasi dengan baik.`)
    }
    
}