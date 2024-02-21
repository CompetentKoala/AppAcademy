function luckyNumbers(matrix) {
    let luckyNums = [];

    for (let i = 0; i < matrix.length; i++) {
        let minRow = Math.min(...matrix[i]); // Find minimum element in the row
        let colIndex = matrix[i].indexOf(minRow); // Find column index of the minimum element

        // Check if the minimum element is also the maximum in its column
        if (matrix.every(row => row[colIndex] <= minRow)) {
            luckyNums.push(minRow);
        }
    }

    return luckyNums;
}

// Example usage:
let matrix1 = [[5, 9, 21],
               [9, 19, 6],
               [12, 14, 15]];

console.log(luckyNumbers(matrix1)); // Output: [12]

let matrix2 = [[5, 10, 8, 6],
               [10, 2, 7, 9],
               [21, 15, 19, 10]];

console.log(luckyNumbers(matrix2)); // Output: [10]
