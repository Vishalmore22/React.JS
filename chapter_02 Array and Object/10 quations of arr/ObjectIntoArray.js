// 7. Convert an object to an array of key-value pairs Input - const person = { name: "Alice", age: 30 };  Output - [["name", "Alice"], ["age", 30]]


function objectToArray(obj) {
    return Object.entries(obj);
}

let obj = {
    name: "Vishal",
    age: 22,
    city: "Surat"
};

console.log(objectToArray(obj));
