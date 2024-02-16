function sameCharCollapse(str) {
    let cStr = str
    let reduceable = true


    while (reduceable){
        reduceable = false

        for( let i = 0; i < cStr.length;i++){

            if(cStr[i] === cStr[i+1]) {
                console.log(cStr[i])
                let index = i
                console.log(index)
                cStr = cStr.slice(0, index) + cStr.slice(index + 2)
                reduceable = true
                break;
            }
            else if(cStr[i] !== cStr[i+1] ){
                reduceable = false
            }
        }

    } return cStr
}

console.log(sameCharCollapse("zzzxaaxy"));  // "zy"
// because zzzxaaxy -> zxaaxy -> zxxy -> zy
console.log(sameCharCollapse("uqrssrqvtt")); // "uv"
// because uqrssrqvtt -> uqrrqvtt -> uqqvtt -> uvtt -> uv
