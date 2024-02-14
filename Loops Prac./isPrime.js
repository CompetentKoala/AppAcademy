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

//prime num is a
//num is divisble by 1 and itself only
// loop through all numbers till hit max numer
//see if num is divisble by other numbs
//is only 1 and itself, return true


console.log(isPrime(2)); // => true
console.log(isPrime(10)); // => false
console.log(isPrime(11)); // => true
console.log(isPrime(9)); // => false
console.log(isPrime(2017)); // => true
