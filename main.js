// 1 misol

// function createUser(name, age) {
//     return new Object({
//         name: name,
//         age: age,
//         isAdmin: false
//     })
// }

// console.log(createUser("Sardor", 15));



// 2 misol

// function yigindi(...nums) {
//     return nums.reduce((sum, num) => sum + num, 0);
// }

// console.log(yigindi(1, 2, 3));      // 6
// console.log(yigindi(5, 10, 15, 20)); // 50



// 3 misol 

// const user = { name: "Sardor", age: 15 };
// const { name, age } = user;
// console.log(name); // "Sardor"
// console.log(age);  // 15


// 4 misol 

// function objectToArray(obj) {
//     return Object.entries(obj)
// }

// console.log(JSON.stringify(objectToArray({ name: "Ali", age: 25 })));


// 5 misol 

// const getAndValues = (obj) => {
//     return Object.keys(obj)
// }

// console.log(getAndValues({ a: 1, b: 2, c: 3}));



// 6 misol


// const sumPositiveValues = (obj) => {
//     return Object.values(obj).reduce((sum, num) => num > 0 ? sum + num : sum, 0);
// }
// console.log(sumPositiveValues({ a: -5, b: 10, c: 15 }));    