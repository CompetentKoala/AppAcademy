function maxColumn(matrix) {
    let maxs = []
    let matrixLen = matrix[0].length
    let maxNum = 0
    let maxNext = 0
    let iteration = 0
    let colIteration = 0

    for (let i = 0; i < matrixLen; i++){
        let currentNum = matrix[0][i]
        //console.log(currentNum)
                if (currentNum > maxNum){
                //console.log(maxNum)
                maxNum = currentNum
                for( j = 0; j <matrixLen; j++){
                    if (colIteration < 3 && iteration < 3){
                    let currentNum = matrix[colIteration][iteration]
                    console.log(currentNum)
                    colIteration++
                    }
                    iteration++
                }
            }

    }
    maxs.push(maxNum)
    return maxs

  }


  matrix = [[ 5,  9, 21],
            [ 9, 19,  6],
            [12, 14, 15]]

  console.log(maxColumn(matrix)); // [12, 19, 21]
