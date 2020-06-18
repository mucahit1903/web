var threeSumClosest = function (nums, target) {
    const sortedNums = nums.sort((a, b) => a - b)
    let result = 10
    let minDiff = 99999999999
    for (let i = 0; i < sortedNums.length - 2; i++)
    {
        let j = i + 1
        let k = sortedNums.length - 1
        result = sortedNums[i] + sortedNums[j] + sortedNums[k]
        while (j < k)
        {
            let num = sortedNums[i] + sortedNums[j] + sortedNums[k]
            let diff = Math.abs(target - num)
            if (minDiff > diff)
            {
                minDiff = diff
                result = num
                if (num < target)
                {
                    j++
                } else if (num > target)
                {
                    k--
                }
            } else
            {
                if (num < target)
                {
                    j++
                } else
                {
                    k--
                }
            }
        }
    }
    return result
};
