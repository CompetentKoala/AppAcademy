// your code here
let abbreviateWords = function(sentence){
    let words = sentence.split(" ");
    let newSent = [];

    for(let i = 0; i < words.length; i++){
        word = words[i]
        if (word.length <= 4){
            newSent.push(word)
        } else if (word.length > 4) {
            newSent.push(removeVowels(word))
        }
    } return newSent.join(" ")
}

let removeVowels = function(word){
    const vowels = "aeiouAEIOU";
    let newWord = ''
    for (let i = 0; i<word.length;i++){
        if (!vowels.includes(word[i])){
            newWord += word[i]
        }
    } return newWord
}
//return sentence with any words over 4 chars without vowles

//create remove vowel fucntion
//set vowels
//loop through word
//return word without vowels

//create function to check if word is longer than 4 chars
//split sentence into array
//asign new array
//loop array
//if word is under 4 chars, push to new array
//if word is over, remove vowels than push to new array
//join and return newarray

console.log(abbreviateWords('what a wonderful place to live')); // what a wndrfl plc to live
console.log(abbreviateWords('she sends an excellent message ')); // she snds an xcllnt mssg
//console.log(removeVowels("wonderful"))
