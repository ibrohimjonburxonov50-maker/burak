//MIT TASK L
// function reverseSentence(str: string): string {
//     return str
//         .split(" ")
//         .map((word: string): string => word.split("").reverse().join(""))
//         .join(" ");
// }
// const result: string = reverseSentence("we like coding!");
// console.log(result);

//MIT TASK M 
function getSquareNumbers(arr: number[]) {
    return arr.map(num => ({
        number: num,
        square: num * num
    }));
}

console.log(getSquareNumbers([1, 2, 3]));