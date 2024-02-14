function vowelCipher(string) {
    // your code here
    const vowels = 'aeiouaeiou';
    let newWord = '';
    for (let i = 0; i < string.length; i++){
        if (vowels.includes(string[i]) === false){
            newWord += string[i]
        } else {
            let index = vowels.indexOf(string[i])
            let newVowel = vowels[index + 1]
            newWord += newVowel
        }
    } return newWord
}
//assign vowels
//assign newword
//loop though word
//if consonant, add to newword
//if vowel, find next insteance in vowel
//return word

console.log(vowelCipher("bootcamp")); // "buutcemp"
console.log(vowelCipher("paper cup")); // "pepir cap"
