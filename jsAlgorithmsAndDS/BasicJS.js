// Counting Cards
let count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    count++;
    break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
    count--;
    break;
    default:
      break;
  }

  if (count <= 0) {
    return count + " Hold"
  } else {
    return count + " Bet"
  }
}

// Build JavaScript Objects
const myDog = {
   "name": "",
  "legs": 0,
  "tails": 0,
  "friends": []
};

// Record Collection 84%
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };

  function updateRecords(records, id, prop, value) {
    if (prop !== "tracks") {
        if (value) {
            records[id][prop] = value;
      }
    } else {
      if (!records[id].hasOwnProperty("tracks")) {
        records[id]["tracks"] = [];
        records[id]["tracks"].push(value);
      } else if (value) {
        records[id]["tracks"].push(value);
      }
    }

    if (!value) {
      delete records[id][prop];
    }
    return records;
  }
updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")
console.log(recordCollection);

// Replace Loops using Recursion 91%
function sum(arr, n) {
    // Only change code below this line
    if (n == 0) {
      return 0;
    } else {
      return sum(arr, n-1) + arr[n-1];
    }
}

// Profile lookup 92%
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
    let noSuchContact = true;
    for (let i = 0; i < contacts.length; i++) {
        let firstName = contacts[i].firstName;
        if (firstName === name) {
            noSuchContact = false;
            if (contacts[i].hasOwnProperty(prop)) {
                return contacts[i][prop];
            } else {
                return "No such property";
            }
        }
    }
    if (noSuchContact) {
        return "No such contact";
    }
}
console.log(lookUpProfile("Kristian", "lastName"));

function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin)
}

console.log(randomRange(1, 1));

function countdown(n) {
    if (n < 1) {
        return [];
    } else {
        const arr = countdown(n - 1);
        arr.unshift(n);
        return arr;
    }
}
console.log(countdown(5));

function rangeOfNumbers(startNum, endNum) {
    if (endNum === startNum) {
        return [endNum];
    } else {
        const arr = rangeOfNumbers(startNum, endNum - 1);
        arr.push(endNum);
        return arr;
    }
}
console.log(rangeOfNumbers(4, 4));
