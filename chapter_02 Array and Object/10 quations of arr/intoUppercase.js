// // 5. Convert an array of strings to uppercase Input: ["react", "node", "angular"] ✅ Expected Output: ["REACT", "NODE", "ANGULAR"]


const toUpperCaseArray = (arr) =>
    arr.map(word => word.toUpperCase());

let arr = ["react", "node", "angular"];
console.log(toUpperCaseArray(arr));


// let id = "vishal";
// console.log(toUpperCase("id"));
