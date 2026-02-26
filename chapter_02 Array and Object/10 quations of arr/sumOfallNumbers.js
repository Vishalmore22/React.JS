// 3. Find the sum of all numbers in an array Input: [10, 20, 30, 40] ✅ Expected Output: 100

function sumArray(arr) {
    let sum = 0;

    arr.forEach(function (num) {
        sum += num;
    });

    return sum;
}

let arr = [10, 20, 30, 40];

console.log(sumArray(arr));


