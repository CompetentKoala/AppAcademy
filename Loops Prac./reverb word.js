// Your code here

let reverb = function(str){
    if (typeof str !== "string"){
        return null
    }
    let reverbIndex = 0
    let vowels = 'aeiouAEIOU'
    for ( let i = 0; i<str.length;i++){
        if (vowels.includes(str[i])){
            reverbIndex = i
        }
    }
    let reverbed = str.slice(reverbIndex)
    return str + reverbed
}

//add last letters after vowel to end of string, inclusive of vowel itsefl
//if str is not a string, return null
//set reverbIndex to 0
//loop through word
//find last vowel
//slice word at vowel index
//set reverbWord to itself plus slice


console.log(reverb('running')); // runninging
console.log(reverb('FAMILY'));  // FAMILYILY
console.log(reverb('trash'));   // trashash
console.log(reverb('DISH'));    // DISHISH
console.log(reverb(197393));    // null
