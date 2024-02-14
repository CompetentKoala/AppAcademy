// Your code here
function hasThreeVowels(str){
    let vowelCount = 0
    let vowels = 'aeiou'
    for(let i = 0; i < str.length; i++){
        if (vowels.includes(str[i])){
            vowelCount++
            vowels = vowels.replace(str[i],'')
        }
    } if (vowelCount >= 3){
        return true
    } else{
        return false
    }
}

//assign vowel count
//loop through word add if vowel
// comapre counter to 3
//return true or false
console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false
