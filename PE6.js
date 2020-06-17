function sumDifference(endNumber) {
    var sumOfSquares = 0;
    var sqaureOfSum = 0;
    for (var i = 1; i <= endNumber; i++)
    {
        sumOfSquares += Math.pow(i, 2);
        sqaureOfSum += i;
    }
    sqaureOfSum = Math.pow(sqaureOfSum, 2);
    return sqaureOfSum - sumOfSquares;
}

sumDifference(3);