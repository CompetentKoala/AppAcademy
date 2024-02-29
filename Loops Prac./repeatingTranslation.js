// Write a function `repeatingTranslate` that accepts a sentence as an argument.
// The function should translate the sentence according to the following rules:
//
// - words that are shorter than 3 characters are unchanged
// - words that are 3 characters or longer are translated according to the
function repeatingTranslate(sent){
    vowels = "aeiouAEIOU"
    let translated = []
    let words = sent.split(" ")

    for(let i = 0; i < words.length; i++){
        let word = words[i]

        if (word.length < 3){
            translated.push(word)

        } else if (word.length > 3 && endVowel(word)){
                translated.push(word + word)
                console.log(translated)
            }

            else {
                translated.push(endConst(word))
            }
        } return translated.join(" ")
    }


//   - if the word ends with a vowel, simply repeat the word twice (example:
//     'like'->'likelike')
function endVowel(word){
    vowels = "aeiouAEIOU"
    if (vowels.includes(word[word.length-1)){
        return true
    } return false
}


//   - if the word ends with a non-vowel, repeat all letters that come after the
//     word's last vowel, including the last vowel itself (example:
//     'trash'->'trashash')
function endConst(word){
    vowels = "aeiouAEIOU"
        for (let i = word.length-1; i > 0; i--){
            let vowelIndex = 0
            if (vowels.includes(word[i])){
                vowelIndex = i
                return word.slice(0,i) + word.slice(i) + word.slice(i)
        }
    }
}

console.log(endVowel("like"))
console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
//console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
//console.log(repeatingTranslate("her family flew to France"));
  // "herer familyily flewew to FranceFrance
