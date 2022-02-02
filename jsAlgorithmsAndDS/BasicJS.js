// // Record Collection 84%

// const recordCollection = {
//     2548: {
//       albumTitle: 'Slippery When Wet',
//       artist: 'Bon Jovi',
//       tracks: ['Let It Rock', 'You Give Love a Bad Name']
//     },
//     2468: {
//       albumTitle: '1999',
//       artist: 'Prince',
//       tracks: ['1999', 'Little Red Corvette']
//     },
//     1245: {
//       artist: 'Robert Palmer',
//       tracks: []
//     },
//     5439: {
//       albumTitle: 'ABBA Gold'
//     }
//   };

//   function updateRecords(records, id, prop, value) {
//     if (prop !== "tracks") {
//         if (value) {
//             records[id][prop] = value;
//       }
//     } else {
//       if (!records[id].hasOwnProperty("tracks")) {
//         records[id]["tracks"] = [];
//         records[id]["tracks"].push(value);
//       } else if (value) {
//         records[id]["tracks"].push(value);
//       }
//     }

//     if (!value) {
//       delete records[id][prop];
//     }
//     return records;
//   }

//   updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")
// console.log(recordCollection);

// // Replace Loops using Recursion 91%
// function sum(arr, n) {
//     // Only change code below this line
//     if (n == 0) {
//       return 0;
//     } else {
//       return sum(arr, n-1) + arr[n-1];
//     }
// }

// // Profile lookup 92%
// // Setup
// const contacts = [
//     {
//         firstName: "Akira",
//         lastName: "Laine",
//         number: "0543236543",
//         likes: ["Pizza", "Coding", "Brownie Points"],
//     },
//     {
//         firstName: "Harry",
//         lastName: "Potter",
//         number: "0994372684",
//         likes: ["Hogwarts", "Magic", "Hagrid"],
//     },
//     {
//         firstName: "Sherlock",
//         lastName: "Holmes",
//         number: "0487345643",
//         likes: ["Intriguing Cases", "Violin"],
//     },
//     {
//         firstName: "Kristian",
//         lastName: "Vos",
//         number: "unknown",
//         likes: ["JavaScript", "Gaming", "Foxes"],
//     },
// ];

// function lookUpProfile(name, prop) {
//     let noSuchContact = true;
//     for (let i = 0; i < contacts.length; i++) {
//         let firstName = contacts[i].firstName;
//         if (firstName === name) {
//             noSuchContact = false;
//             if (contacts[i].hasOwnProperty(prop)) {
//                 return contacts[i][prop];
//             } else {
//                 return "No such property";
//             }
//         }
//     }
//     if (noSuchContact) {
//         return "No such contact";
//     }
// }

// console.log(lookUpProfile("Kristian", "lastName"));

//
// function randomRange(myMin, myMax) {
//     return Math.floor(Math.random() * (myMax - myMin + 1) + myMin)
// }

// console.log(randomRange(1, 1));

// function countdown(n) {
//     if (n < 1) {
//         return [];
//     } else {
//         const arr = countdown(n - 1);
//         arr.unshift(n);
//         return arr;
//     }
// }
// console.log(countdown(5));

// function rangeOfNumbers(startNum, endNum) {
//     if (endNum === startNum) {
//         return [endNum];
//     } else {
//         const arr = rangeOfNumbers(startNum, endNum - 1);
//         arr.push(endNum);
//         return arr;
//     }
// };

// console.log(rangeOfNumbers(4, 4));

// // ES6
// const sum = (...args) => args.reduce((a, b) => a + b, 0);
  
// const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
// let arr2 = [...arr1]; 

// const HIGH_TEMPERATURES = {
//     yesterday: 75,
//     today: 77,
//     tomorrow: 80
//   };
// const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

// const LOCAL_FORECAST = {
//   yesterday: { low: 61, high: 75 },
//   today: { low: 64, high: 77 },
//   tomorrow: { low: 68, high: 80 }
// };
// const { today: { low: lowToday }} = LOCAL_FORECAST;

// let a = 8, b = 6;
// [a, b] = [b, a]

// 
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
  const [a, b, ...arr] = list; 
  return arr;
}
const arr = removeFirstTwo(source);

// Use Destructuring Assignment to Pass an Object as a Function's Parameters
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

let half = (stats) => (stats.max + stats.min) / 2.0;
console.log(half(stats));
half = ({ max, min }) => (stats.max + stats.min) / 2.0;
console.log(half(stats));
half = ({ max, min }) => (max + min) / 2.0;
console.log(half(stats));

// Create Strings using Template Literals