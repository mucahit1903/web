const TEXT = "ZIGZAGCONVERSION";
const NO_OF_ROWS = 5;

const convert = (text, noOfRows) => {
    return text.split('').reduce((result, letter, index) => {
        const position = index % ((noOfRows * 2) - 2);
        console.log(position, letter, noOfRows);
        if (!position)
        {
            result.push([letter]);
        }
        else if (position < noOfRows)
        {
            result[result.length - 1].push(letter)
        }
        else
        {
            const x = new Array(noOfRows).fill(" ");
            x[(noOfRows - 2) - (position - noOfRows)] = letter;
            result.push(x);
        }
        return result;
    }, []);
}

const transpose = matrix => matrix[0].map((_, c) => matrix.map(r => r[c])) || [];
const result = convert(TEXT, NO_OF_ROWS);
console.log(result);
console.log(transpose(result).map(x => x.join(" ")).join('\n'));