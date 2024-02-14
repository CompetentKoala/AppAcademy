//Fibboncci Practice

function fibonacci(length) {
    if(length === 0){
        return []
    } else if(length === 1){
        return [1]
    }
    let fibonacciArr = [1]
    let firstNum = 1
    let secondNum = 1
    for (let i = 1; i < length; i ++){
        fibonacciArr.push(secondNum)
        secondNum += firstNum
        firstNum = secondNum - firstNum
    } return fibonacciArr
}
// define an empty array
//loop though a popuating array to length
//push the next number of fib to arr
// return the arr
console.log(fibonacci(0)); // []
console.log(fibonacci(1)); // [1]
console.log(fibonacci(6)); // [1, 1, 2, 3, 5, 8]
console.log(fibonacci(8)); // [1, 1, 2, 3, 5, 8, 13, 21]
