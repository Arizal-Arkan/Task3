function kaliMatriks(b1, b2){
    if(b1.length !== b2[0].length){
        return "Error"
    }else{
    let hasil = [];
    for(let x = 0; x < b1.length; b1++){
       hasil[x] = [];
       for(let y = 0; y < b2[0].length; y++){
            let tbh = 0;
            for(let i = 0; i < b1[0].length; i++){
                tbh += b1[x][i]*b2[i][y];
            }
            hasil[x][y] = tbh;
       } 
    }
    return hasil;
  }
}
let b1 = [3,4,1,2]
let b2 = [[7,5,6,4]]

let HailTbh = kaliMatriks(b1, b2)

console.table(HailTbh)
