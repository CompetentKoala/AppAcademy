// your code here
let removeEWords = function(sentence){
    let removedArr = []
    let splitArr = sentence.split(" ")
    let eWord = "Ee"
    for (let i = 0; i < splitArr.length;i++){
        let word = splitArr[i]
        //console.log(word)
        if (!word.toLowerCase().includes("e")){
            //console.log(splitArr[i])
            removedArr.push(word)
        }
    }
    let newWord = removedArr.join(" ")
     return newWord
}

//remove words that contain the letter E,e
//split string into array,
//create an empty array for new string
//assign var e = "eE"
//loop through array and find all e words
//if it doesnt contain e, push to empty array,
//join the array together by spaces



console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'
