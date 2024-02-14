// Your code here
function moreDotLessDash(str){
    let dotCount = 0
    let dashCount = 0
    for (i = 0; i<str.length; i++){
        if(str[i] === "."){
            dotCount++
        } else if (str[i] === "-"){
            dashCount++
        }
        } if (dotCount > dashCount){
            return true
        } else {
            return false
        }
    }

//assign counters for dot and dash
//loop through array
//counters + if dot or dash
//once done, compare dot and dash
//return if more dots than dash



console.log(moreDotLessDash('2-D arrays are fun. I think.'));           // true
console.log(moreDotLessDash('Morse code is great.'));                   // true
console.log(moreDotLessDash('.... . -.--'));                            // true
console.log(moreDotLessDash('.--. .-. --- --. .-. .- -- -- . .-.'));    // false
console.log(moreDotLessDash('high-flying acrobat.'));                   // false
