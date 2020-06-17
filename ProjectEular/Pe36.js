function checkPrime(num) {
    for (var i = 2; i < num; i++)
    {
        if (num % i === 0)
        {
            return false
        }
    }
    return true;
}


function binaryConvert(num) {
    return num.toString(2);
}


function isPalindromic(num) {
    var numReverse = num.split("").reverse().join("")
    if (num === numReverse)
    {
        return true;
    }
    return false;
}


function getNum() {
    var palindromic10 = false,
        palindromic2 = false,
        numString = "",
        isPrime = false,
        baseTwo = 0,
        num = 1;

    while (true)
    {
        isPrime = checkPrime(num);
        numString = num.toString();

        if (isPrime && numString.length > 1)
        {
            baseTwo = binaryConvert(num);
            palindromic2 = isPalindromic(baseTwo);
            palindromic10 = isPalindromic(numString);

            if (palindromic2 && palindromic10)
            {
                return ("This magical number is " + numString + " ...in base 2 ==> " + baseTwo);
            }
        }

        num += 1;
        isPrime = false;
        palindromic2 = false;
        palindromic10 = false;
    }
}
console.log(getNum());