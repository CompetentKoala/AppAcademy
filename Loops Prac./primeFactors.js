// Your code here
let isPrime = function(num){
    if (num < 2) {
        return false;
    }

    for (let i = 2; i < num; i++){
        if(num % i === 0){

            return false
        }
    } return true
}

let primeFactors = function(num){
                        //assign empty array
    let primeArray = []
                         //if number is prime return num
    if (isPrime(num)){
        primeArray.push(num)
        return primeArray
    }
                        //loop up to given number
    for (let i = 0; i < num; i++){
                        //check if any of those numbers can divide evenly to num
        if (num % i === 0 && isPrime(i)){
            primeArray.push(i)
        }
    } return primeArray
}

    //if they can, check if they are prime
    //if prime, push that number to array
    //return the array

//retrun array of numbers that can divide the given num equally



console.log(primeFactors(12));  // [2, 3]
console.log(primeFactors(7));   // [7]
console.log(primeFactors(16));  // [2]
console.log(primeFactors(30));  // [2, 3, 5]
console.log(primeFactors(35));  // [5, 7]
console.log(primeFactors(49));  // [7]
console.log(primeFactors(128)); // [2]
