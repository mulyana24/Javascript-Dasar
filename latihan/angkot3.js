const jmlhAngkot = 10
const angkotBeroperasi = 6
// let nomorAngkot = 1
for (let nomorAngkot = 1; nomorAngkot <= jmlhAngkot; nomorAngkot++){
    if (nomorAngkot <= angkotBeroperasi) {
        console.log(`Angkot No. ${nomorAngkot} beroperasi dengan baik.`)
    } else {
        
        console.log(`Angkot No. ${nomorAngkot} tidak beroperasi dengan baik.`)
    }
    
}