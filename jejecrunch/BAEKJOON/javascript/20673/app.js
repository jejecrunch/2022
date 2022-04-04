const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const [p, q] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v) => +v)
let result = "Yellow"

if (p <= 50 && q <= 10) result = "White"
else if (q > 30) result = "Red"

console.log(result)
