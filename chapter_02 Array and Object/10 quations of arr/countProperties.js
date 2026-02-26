// 6. Count properties in an object Input:

function countProperties(obj) {
    return Object.keys(obj).length;
}

let obj = {
    name: "Vishal",
    age: 22,
    city: "Surat"
};

console.log(countProperties(obj));
