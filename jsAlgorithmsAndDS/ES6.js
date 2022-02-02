
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