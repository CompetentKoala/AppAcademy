// Your code here
function threeIncreasing(arr){
    for (i = 0; i < arr.length;i++){
        if((arr[i] + 1) === arr[i+1] && arr[i] + 2 === arr[i+2]){
            return true
        }
    } return false
}

//return true or false if 3 consectuive
//loop through array
//check if next position is 1 above,
//check if that next position is 1 above
//return true if so
//return false if not


console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4]));     // true
console.log(threeIncreasing([2, 7, 8, 9]));                 // true
console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6]));        // false
console.log(threeIncreasing([1, 2, 4, 5, 2, 7, 8]));        // false
