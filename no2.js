let sparray
function hasil(keluaran){
let tambah = keluaran.reduce((i, x) => i + x)

let lanjut = tambah.toString().split('')
for(y = 0; y < lanjut.length; y++){
    lanjut[y]=Number(lanjut[y])
}
    if(lanjut.length>1){
        hasil(lanjut)
    } else {
        sparray = lanjut.map(y=>y)
    }
}
hasil([123, 9, 27])
console.log(sparray)
