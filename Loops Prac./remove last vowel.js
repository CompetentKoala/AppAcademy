// your code here
let removeLastVowel =function(str){
    let vowels = "aeiou"
    for (let i = str.length -1; i >= 0; i--){
        if (vowels.includes(str[i])){
            let First = str.slice(0,i)
            let Second = str.slice(i+1)
            return First + Second
        }
    } return str
}

// return a string with last vowel removed
// assing a blank string
// assign vowels
// loop backwards until vowel index  found
//return new string with word sliced at that index
console.log(removeLastVowel('bootcamp')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'
