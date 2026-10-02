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
// function getSquareNumbers(arr: number[]) {
//     return arr.map(num => ({
//         number: num,
//         square: num * num
//     }));
// }

// console.log(getSquareNumbers([1, 2, 3]));

//Mit TASK N
// function palindromCheck(str: string): boolean {
//     const reversedStr: string = str.split("").reverse().join("");
//     return str === reversedStr;
// }

// console.log(palindromCheck("dad"));
// console.log(palindromCheck("hello"));

//MIT TASK O
// function calculateSumOfNumbers(arr: any[]): number {
//     return arr.reduce((sum, current) => {
//         return typeof current === "number" ? sum + current : sum;
//     }, 0);
// }

// console.log(calculateSumOfNumbers([10, "10", { son: 10 }, true, 35]));

// MIT TASK P
// function objectToArray(obj: Record<string, any>): [string, any][] {
//     return Object.entries(obj);
// }

// console.log(objectToArray({ a: 10, b: 20 })); 

//MIT TASK Q
function hasProperty(obj: object, key: string): boolean {
    return key in obj;
}

const car = { name: "BMW" };

console.log(hasProperty(car, "name"));
console.log(hasProperty(car, "model")); 
