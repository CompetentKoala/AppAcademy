function consonantCancel(sentence) {
    let words = sentence.split(" ");
    let newArr = [];
    for (let i = 0; i < words.length; i ++){
        let word = words[i]
        //console.log(word)
        let index = findVowel(word)
        //console.log(index)
        newArr.push(word.slice(index))
        //console.log(newWord)
    } return newArr.join(" ")
}

function findVowel(word){
    let vowels = "aeiouAEIOU"
    for (let i = 0; i<word.length;i++){
        if (vowels.includes(word[i])){
            return i
        }
    }
}
console.log(consonantCancel("down the rabbit hole")); // "own e abbit ole"
console.log(consonantCancel("writing code is challenging")); // "iting ode is allenging"
