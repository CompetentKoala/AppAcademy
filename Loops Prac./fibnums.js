// Your code here
function fibonacciSequence(num){
    if (num === 0){
        return []
    }
    let array = [1]
    let firstNum = 0
    let lastNum = 1
    for (let i = 0; i<num-1;i++){
        array.push(lastNum + firstNum)
        lastNum += firstNum
        firstNum = lastNum - firstNum
    } return array
}


console.log(fibonacciSequence(4));  // [ 1, 1, 2, 3 ]
console.log(fibonacciSequence(5));  // [ 1, 1, 2, 3, 5 ]
console.log(fibonacciSequence(8));  // [ 1, 1, 2, 3, 5, 8, 13, 21 ]
console.log(fibonacciSequence(0));  // [ ]
console.log(fibonacciSequence(1));  // [ 1 ]
console.log(fibonacciSequence(2));  // [ 1, 1 ]
