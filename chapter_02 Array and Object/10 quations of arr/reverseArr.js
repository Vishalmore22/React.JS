//  1.Reverse an array Write a function to reverse the array [1, 2, 3, 4, 5] ✅ Expected Output: [5, 4, 3, 2, 1]

function reverseArr(arr) {// we have to create a function and give parameter. 

    let reversed = [];//and then create a empty arr for store the reverse value.

    for (let i = arr.length - 1; i >= 0; i--) {
        //we using for loop for this. we are start our loop for arrs length-1 (ex. arr length is 5 and minus one so we get 4 our i variable start from arrs last index in decrement order )

        reversed.push(arr[i]);//and last will be stored in empty arr.
    }
    return reversed;
}

let arr = [1, 2, 3, 4, 5];
console.log(reverseArr(arr));


// using built in function
// let arr = [1, 2, 3, 4, 5];
// let reverseArr = arr.reverse();
// console.log(reverseArr);
