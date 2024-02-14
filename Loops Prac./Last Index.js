function lastIndex(str, char) {
    // your code here
    for (i = str.length - 1; i > 0; i--){
        if (char === str[i]){
            return i
        }
    }
}

//loops backwards throgh loop
//match char with str
//get index of
//return index
console.log(lastIndex("abca", "a"))        // 3
console.log(lastIndex("mississipi", "i"))  // 9
console.log(lastIndex("octagon", "o"))     // 5
console.log(lastIndex("programming", "m")) // 7
