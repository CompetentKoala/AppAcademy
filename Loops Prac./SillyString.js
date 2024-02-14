// Your code here
function sillyString(str){
    let vowels = 'aeiou'
    let newStr = ''
    for( let i = 0; i < str.length; i++){
        if(vowels.includes(str[i]) !== true){
            newStr +=str[i]
        } else if(vowels.includes(str[i])){
            newStr += `${str[i]}b${str[i]}`
        }
    } return newStr
}

//assign empty string
//assign vowels
//loop through word, check if letter is not vowel, add it to string
//if letter is vowel, add b + vowel
// conitune till end of word
//



console.log(sillyString('stop'));       // stobop
console.log(sillyString('that'));       // thabat
console.log(sillyString('can'));        // caban
console.log(sillyString('cats'));       // cabats
console.log(sillyString('italy'));      // ibitabaly
console.log(sillyString('scooter'));    // scobooboteber
