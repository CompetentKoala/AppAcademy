function luckyNumbers(matrix) {
    // your code here...
    let lucky = []
    let luckyNum =[]
    for (let i = 0; i< matrix.length; i++){
        let subArray = []
        let maxCol = matrix[i][0]
        let maxRow = 0
        for (let j = 0; j<matrix[i.length];j++){
            if(matrix[i][j] < maxCol){
                maxCol = (matrix[i][j])
            }
        } lucky.push([maxCol])
    }
    let maxNum = lucky[0][0]
    for (let k = 0; k < lucky.length; k++){
        if (lucky[k][0] > maxNum){
            maxNum = lucky[k][0]
        }
    }
    console.log(lucky)
    luckyNum.push([maxNum])
    return luckyNum
  }


  matrix = [[ 5,  9, 21],
            [ 9, 19,  6],
            [12, 14, 15]]

  console.log(luckyNumbers(matrix)); // [12]

  matrix = [[ 5, 10,  8,  6],
            [10,  2,  7,  9],
            [21, 15, 19, 10]]

  console.log(luckyNumbers(matrix)); // [10]
