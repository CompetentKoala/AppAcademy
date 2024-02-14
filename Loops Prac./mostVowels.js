function mostVowels(sentence) {
    let vowelCounter = 0
    let wordindex = 0
    let wordArray = sentence.split(" ")

    for (let i = 0; i <wordArray.length; i++){
        if (vowelCount(wordArray[i]) > vowelCounter){
            vowelCounter = vowelCount(wordArray[i])
            wordindex = i
        }
    } return wordArray[wordindex]

}


let vowelCount = function(word){
    let vowels = 'aeiou'
    let vowelCounter = 0

    for (i = 0; i < word.length; i++){
        if (vowels.includes(word[i])){
            vowelCounter++
        }
    } return vowelCounter
}




console.log(mostVowels("what a wonderful life"))
//count each word for vowels and return word with most vowels


//seperate string into array
//create a function that loops through array
//set counters
//create another function that loops through each index of array peices
//add to counters when vowels are inlcuded
//comapre two counter (highest and current)
//retrun word of index with highest count
//console.log(mostVowels("what a wonderful life")); // "wonderful"
