// your code here
function rotate(array,num){
        if (num > 0) {
            let first = array.splice(array.length - num);

            for (let i = num - 1; i >= 0; i--) {
                array.unshift(first[i]);
            }

            return array;
        }


        if (num < 0) {
            let indexNum = num * -1
            let first = array.splice(0,indexNum);

            for (let i = 0; i < indexNum; i++) {
                array.push(first[i]);
            }

            return array;
        }
}



let arr = ['a', 'b', 'c', 'd', 'e'];
rotate(arr, 2);
console.log(arr); // [ 'd', 'e', 'a', 'b', 'c' ]

let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
rotate(animals, -1);
console.log(animals); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
