/*
    Array and Object handling  


        1. Introduction to Arrays
         An array is a collection of values stored in a single variable. Arrays are ordered, index-based, and mutable.
                
            const fruits = ["apple", "banana", "cherry"];
            console.log(fruits[1]); // Output: banana

            - Arrays can store: numbers, strings, objects, functions—even other arrays.
            - Indexing starts from 0.

        2. Introduction to Objects
         An object is a collection of key-value pairs. Objects are unordered but allow for named access to values.

            const person = 
            {
                name: "Alice",
                age: 25,
                isStudent: true
            };

            console.log(person.name); // Output: Alice          

        - Objects can also store nested data:
            const user = 
            {
                name: "John",
                address: { city: "Delhi", pin: 110011}
            };


        3. Array Methods (with Examples)
        🔹 push() – Add to end
            fruits.push("orange");

        🔹 pop() – Remove last
            fruits.pop();

        🔹 shift() – Remove first
            fruits.shift();

        🔹 unshift() – Add to beginning
            fruits.unshift("kiwi");

        🔹 map() – Transform each element
            const nums = [1, 2, 3];
        const doubled = nums.map(n => n * 2); // [2, 4, 6]
        
        🔹 filter() – Filter based on condition
            const even = nums.filter(n => n % 2 === 0); // [2]

        🔹 reduce() – Accumulate to a single value
            const sum = nums.reduce((acc, cur) => acc + cur, 0); // 6

        🔹 forEach() – Iterate over each element
            fruits.forEach(fruit => console.log(fruit));

        🔹 includes() – Check if value exists
            fruits.includes("apple"); // true

        🔹 find() – Get first matching item
            const item = fruits.find(fruit => fruit.startsWith("b")); // banana
        
        4. Object Methods (with Examples)
        🔹 Object.keys(obj) – Get all keys
            Object.keys(person); // ["name", "age", "isStudent"]

        🔹 Object.values(obj) – Get all values
            Object.values(person); // ["Alice", 25, true]

        🔹 Object.entries(obj) – Key-value pairs
            Object.entries(person);
        [
          ["name", "Alice"],
          ["age", 25],
          ["isStudent", true]
        ] 

        🔹 hasOwnProperty() – Check if key exists
            person.hasOwnProperty("age"); // true
        🔹 Spread Operator with Objects
            const updated = { ...person, age: 30 }; // clones and updates
        






*/

// const arr = ["vishal", "Om", "sachine", "isha", "mahesh"];

// const person = arr.find(p => p.startsWith("O"));
// console.log(person);

// console.log(arr.includes("isha"));

// const newArrya = [1, 2, 3, 4, 5];
// const sum = newArrya.reduce((per, cur) => per + cur, 0);
// console.log(sum);


// const obj = {
//     name: "neathon Alice",
//     age: 39,
//     profecation: "senior developer",
//     place: "England"
// }

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));
// console.log(Object.hasOwnProperty("name"));

// const a = [1, 3, 2,];
// const b = { name: "vishal", age: 22 }

// console.log(...a);
// console.log(...b.name);


