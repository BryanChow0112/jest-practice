// An analyzeArray function that takes an array of numbers and returns an object 
// with the following properties: average, min, max, and length.
function analyzeArray(array) {
    return {
        average: array.reduce((acc, curr) => acc + curr, 0) / array.length,
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length
    };
}

module.exports = analyzeArray;