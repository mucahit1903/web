var nums = [1, 1, 2,];

var removeDuplicates = function (nums) {
    var sortedArray = nums.sort();
    var len = sortedArray.length - 1;
    var newArr = [];

    if (len >= 0)
    {
        for (var i = 0; i < len; i++)
        {
            if (sortedArray[i] !== sortedArray[i + 1])
            {
                newArr.push(sortedArray[i]);
            }
        }
        newArr.push(sortedArray[len]);
    }
    return newArr

}

removeDuplicates(nums)
console.log(removeDuplicates(nums))