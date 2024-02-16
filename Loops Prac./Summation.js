//second function
//assign empty array
//assign current summation
//loop through the length, pushing the summation to array
function summationSequence(start, length) {
    let array = [start]
    let currentSummation = start

    for (let i = 0; i <length-1; i++){
            let newSummation = summation(currentSummation)
            array.push(newSummation)
            currentSummation = newSummation
    } return array
}
//add all postive numbers up to the number, take that new number and do it for length

//create a fucntion for summation
//assign a sum to 0
//take a number, loop up to it and add to sum
//return the sum
function summation(num){
    let sum = 0
    for (let i =0; i<=num; i++){
        sum += i
    } return sum
}

console.log(summationSequence(3, 4)); // [3, 6, 21, 231]
console.log(summationSequence(5, 3)); // [5, 15, 120]

//console.log(summation(5))
