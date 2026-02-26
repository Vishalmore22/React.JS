// 2.Remove duplicates from an array Input: [1, 2, 2, 3, 4, 4, 5] ✅ Expected Output: [1, 2, 3, 4, 5]

function removeDuplicates(arr) {// we have to create function and give parameter.

    return arr.filter((value, index) => {
        return arr.indexOf(value) === index;
    });
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
