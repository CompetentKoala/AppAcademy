// your code here
function hipsterfy(sentence){
    let words = sentence.split(" ");
    let newSentence =[]
    for (let i = 0; i < words.length; i++){
        newSentence.push(removeLastVowels(words[i]))
        //console.log(newSentence)
    } return newSentence.join(" ")

}


function removeLastVowels(word){
    let vowels = 'aeiouAEIOU';
    for (let i = word.length; i >= 0; i--){
        if (vowels.includes(word[i])){
            if(word.length <= 2){
                return word.slice(0)
            }
            return word.slice(0,i) + word.slice(i+1);
        }
    }
}

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

//console.log(removeLastVowels("up"))
