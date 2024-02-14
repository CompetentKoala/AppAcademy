// Your code here
function tripletTrue(str){
    for(i = 0; i<str.length; i++){
        let checkLetter = str[i]
        if (checkLetter === str[i+1] &&
            checkLetter === str[i+2] ){
                return true
            }
    } return false
}

//loop thorugh word
//check if letter is repeated 3 times
//return true if so, false if not
//



console.log(tripletTrue('caaabb'));        // true
console.log(tripletTrue('terrrrrible'));   // true
console.log(tripletTrue('runninggg'));     // true
console.log(tripletTrue('bootcamp'));      // false
console.log(tripletTrue('e'));             // false
