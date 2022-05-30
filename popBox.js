// alert, prompt, confirm

// example alert
// alert("Hello, ini alert Javascript")

// example prompt, confirm and alert
var inputNama = prompt("Masukan nama:")
var cekNama = confirm(`apa kamu yakin namamu ?`)
 
if (inputNama && cekNama) {
    alert(`Hello, ${inputNama} ini javascript dasar`)
    } else {
        alert("kamu tidak memasukan nama")
    }