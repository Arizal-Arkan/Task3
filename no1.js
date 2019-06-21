let arrayP = ['apa', 'lol', 'jangan', 'iya', 'wkwk', 'ada'];

function palindrom(word) {
    let x = []
for(i = 0; i < word.length; i++ ){
    let rom = word[i].replace("/\s/", '').split('').reverse().join('')
    if(word[i].replace("/\s/", '') === rom){
         x[i] = true
    }
    else{
         x[i] = false
    }
}
    return x
}
console.log(palindrom(arrayP))

