// Your code here


//return true if num has more divsors than any other number underneath it


//create function to count divsors for any number
let countDivisors = function(num){
    let count = 0
    for (i = 0; i <= num; i++){
        if(num % i === 0){
            count++
        }
    } return count
}

let isAntiPrime = function(num){
    for (let i = 0; i <= num; i++){
        if(countDivisors(i) > countDivisors(num)){
            return false
        }
    } return true
}

//create counters for divsors ofr num
//create counter for divors of other numers(i)
//loop up to number
//and count dividors, then
//compare two counters every time
//if index counter is ever higher than num counter
//return false
//otherwise, return true

console.log(isAntiPrime(24))   // true
console.log(isAntiPrime(36))   // true
console.log(isAntiPrime(48))   // true
console.log(isAntiPrime(360))  // true
console.log(isAntiPrime(1260)) // true
console.log(isAntiPrime(27))   // false
console.log(isAntiPrime(5))    // false
console.log(isAntiPrime(100))  // false
console.log(isAntiPrime(136))  // false
console.log(isAntiPrime(1024)) // false
