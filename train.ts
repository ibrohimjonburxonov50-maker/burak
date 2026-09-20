//MIT TASK L
function reverseSentence(str: string): string {
    return str
        .split(" ")
        .map((word: string): string => word.split("").reverse().join(""))
        .join(" ");
}
const result: string = reverseSentence("we like coding!");
console.log(result);