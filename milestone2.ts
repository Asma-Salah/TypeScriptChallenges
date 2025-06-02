// challenge1
const sumOfPositives = (array: number[]): number => {
  return array.filter((item) => item > 0).reduce((a, b) => a + b, 0);
};
const sumOfPositiveNumbers = [1, 2, 6, -8, -4];
console.log(sumOfPositives(sumOfPositiveNumbers));

// challenge2
function findMax(numbers: number[]): number {
  let maxNumber = numbers[0];
  for (let num of numbers) {
    if (num > maxNumber) {
      maxNumber = num;
    }
  }
  return maxNumber;
}

const number = [5, 2, 9, 11, 5, 6];
console.log(findMax(number));

// challenge3
const findWinner = (
  candidates: {
    name: string;
    votes: number;
  }[]
): string | number => {
  let winner = candidates[0];
  for (let i = 1; i < candidates.length; i++) {
    if (candidates[i].votes > winner.votes) {
      winner = candidates[i];
    }
  }
  return winner.name;
};
const candidates = [
  { name: "Alice", votes: 50 },
  { name: "Bob", votes: 75 },
  { name: "Charlie", votes: 95 },
];
console.log(findWinner(candidates));

// challenge4
const findLongestWord = (word: string[]): string => {
  let longestString = "";
  for (let str of word) {
    if (str.length > longestString.length) {
      longestString = str;
    }
  }
  return longestString;
};
const words = ["apple", "banana", "orange", "strawberry"];
console.log(findLongestWord(words));

// challenge5

interface CountProperties {
  name: string;
  age: number;
  city: string;
}
const countProperties: CountProperties = {
  name: "asma",
  age: 25,
  city: "muranga",
};

const totalProperties = Object.keys(countProperties).length;
console.log(totalProperties);

// challenge6
function filterByLength(strings: string[], minLength: number): string[] {
  let newArray: string[] = [];
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length >= minLength) {
      newArray.push(strings[i]);
    }
  }
  return newArray;
}
console.log(filterByLength(["cat", "giraffe", "hippo", "dog", "elephant"], 5));

// challenge:7
function sumEven(num: number[]): number {
  const filteredNumbers = num.filter((n) => n % 2 === 0);
  const sumEvenNumbers = filteredNumbers.reduce((a, b) => a + b, 0);
  return sumEvenNumbers;
}
const num = [1, 2, 3, 4, 5];
console.log(sumEven(num));

// // challenge:8

function differenceEvenOdd(numbers: number[]): number {
  let even: number[] = [];
  let odd: number[] = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      even.push(numbers[i]);
    } // end
    else {
      odd.push(numbers[i]);
    } // end else
  } //end of for loop

  console.log(odd);
  console.log(even);

  let oddSum = odd.reduce((total, num) => total + num, 0);
  let evenSum = even.reduce((total, num) => total + num, 0);

  console.log(oddSum);
  console.log(evenSum);
  return oddSum - evenSum;
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let diff = differenceEvenOdd(numbers);

console.log("Diff (odd - even):", diff);

// challenge 9
function countTruthy(obj: { [key: string]: any }): number {
  let count = 0;
  for (let key in obj) {
    if (obj[key]) {
      count++;
    }
  }
  return count;
}
console.log(countTruthy({ a: 0, b: "hello", c: false, d: 42, e: null }));

// challenge10
function average(arrayNum: number[]): number {
  if (arrayNum.length === 0) {
    return 0;
  }
  const sum: number = arrayNum.reduce((acc, val) => acc + val, 0);
  return sum / arrayNum.length;
}

const arrayNum: number[] = [2, 4, 6, 8];
const calAverage: number = average(arrayNum);

console.log(calAverage); //5

// challenge:11
function linearSearch(arr: number[], key: number): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      return i;
    }
  }
  return -1; // indicates the key was not found
}
console.log(linearSearch([5, 4, 8, 5], 5));

// challenge12
function reverseLinearSearch(array: number[], key: number): number {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === key) {
      return i;
    }
  }
  return -1; // indicates the key was not found
}
console.log(reverseLinearSearch([5, 4, 8, 5], 5));

// challenge 13
function linearSearchAll(array: number[], key: number): number[] {
  let indices = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === key) {
      indices.push(i);
    }
  }
  return indices;
}

console.log(linearSearchAll([5, 4, 8, 5], 5));

// challenge14
function countOccurrences(array: string[]): { [key: string]: number } {
  let counts: { [key: string]: number } = {};
  for (let i = 0; i < array.length; i++) {
    let word = array[i];
    if (counts[word]) {
      counts[word] += 1;
    } else {
      counts[word] = 1;
    }
  }
  return counts;
}

console.log(
  countOccurrences(["apple", "banana", "apple", "orange", "banana", "apple"])
);

// challenge 15
function removeDuplicates(numbers: number[]): number[] {
  const unique: { [key: number]: boolean } = {};
  numbers.forEach(function (i) {
    if (!unique[i]) {
      unique[i] = true;
    }
  });
  return Object.keys(unique).map(Number);
}
const uniqueNums = removeDuplicates([1, 2, 3, 3, 7, 7]);
console.log(uniqueNums);

// challenge 16

function mostFreqEle(arr: string[]): string {
  let n = arr.length,
    maxcount = 0;
  let res = "";

  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (arr[i] === arr[j]) count++;
    }

    // If count is greater or if count
    // is same but value is bigger.
    if (count > maxcount || (count === maxcount && arr[i] > res)) {
      maxcount = count;
      res = arr[i];
    }
  }

  return res;
}

const arr = ["apple", "banana", "apple", "orange", "banana", "apple"];
console.log(mostFreqEle(arr));
