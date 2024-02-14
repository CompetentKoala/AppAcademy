// Feel free to use this variable:
// const alphabet = "abcdefghijklmnopqrstuvwxyz";

function caesarCipher(string, num) {
    const alphabet = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
    let newWord = ''
    for (let i = 0; i < string.length; i++){
        let index = alphabet.indexOf(string[i])
        newWord += alphabet[index + num]
    }return newWord
}

//assign alphabet
//assign new string
//loop through string
//declare index of letter
//add letter shifted by num to new string
console.log(caesarCipher("apple", 1)); // "bqqmf"
console.log(caesarCipher("bootcamp", 2)); // "dqqvecor"
console.log(caesarCipher("zebra", 4)); // "difve"
