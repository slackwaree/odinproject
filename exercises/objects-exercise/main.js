// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [john, pete, mary];
// let names = [john.name, pete.name, mary.name]; // also could have used map() method instead of individually asigning every key:pair
// alert(names);



// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [john, pete, mary];
// let usersMapped = users.map(user => ({
//     fullName: `${user.name} ${user.surname}`,
//     id: user.id,
// }));
// console.log(usersMapped);



// function sortByAge(array) {
//     console.log(array.sort((a, b) => a.age - b.age));
// }

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let array = [pete, john, mary];
// sortByAge(array);



// function getAvgAge(users) {
//     console.log(users.reduce((prev, user) => prev + user.age, 0) / users.length);
// }

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [pete, john, mary];
// getAvgAge(users);



// function groupById(array) {
//     return users.reduce((obj, value) => {
//         obj[value.id] = value;
//         return obj;
//     }, {});
// }
// let users = [
//     {id: 'john', name: "John Smith", age: 20},
//     {id: 'ann', name: "Ann Smith", age: 24},
//     {id: 'pete', name: "Pete Peterson", age: 31},
// ];
// let usersById = groupById(users)

// What the actual f*ck.


// NOTES
// (1) When reading or writing from an array, you can use the singular form of the array name as a shorthand for the key name
//      Example:
//      let users = [john, pete, mary];
//      let usersMapped = users.map(user => {
//      });
