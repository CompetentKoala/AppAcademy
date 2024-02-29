
                                    //create a function to add all numbers together and divide by 2
let halfedNum = function(arr){
    let sum = 0
                                     //loop through array and add to sum,
    for (let i = 0; i < arr.length; i++){
        sum += arr[i]
                                    //divide by 2
                                    //retrun halfed number
    } return (sum / 2)
}

function allElseEqual(arr) {
    for (i = 0; i < arr.length; i++){
        if (arr[i] === halfedNum(arr)){
            return arr[i]
        }
    } return null
}

//CHECK IF NUM IS IN ARRAY
//loop through the array
//check if each number is equal to halfed num
//if it is, print the number
//if not, retrun null
//console.log(halfedNum([6, 3, 5, -9, 1]))

console.log(allElseEqual([2, 4, 3, 10, 1])); // 10
console.log(allElseEqual([6, 3, 5, -9, 1])); // 3
console.log(allElseEqual([1, 2, 3, 4]));     // null
console.log(allElseEqual([1, 2, 3, 4]));     // null
