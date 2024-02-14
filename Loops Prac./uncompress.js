// your code here
function uncompress(str){
    let string = ''
    for(i = 0; i<str.length; i ++){
        let letter1 = str[i]
        let numberOfLetter = Number(str[i+1])
        for (let i=0; i< numberOfLetter; i++){
            string += letter1
        } i++
    } return string
}




console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
console.log(uncompress('b1o2t1')); // 'boot'
