// 8. Merge two objects Input: const a = { x: 1, y: 2 }; const b = { y: 3, z: 4 };  ✅ Expected Output: { x: 1, y: 3, z: 4 }


function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };

console.log(mergeObjects(obj1, obj2));
