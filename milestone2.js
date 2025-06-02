// challenge1
var sumOfPositives = function (array) {
    return array.filter(function (item) { return item > 0; }).reduce(function (a, b) { return a + b; }, 0);
};
var sumOfPositiveNumbers = [1, 2, 6, -8, -4];
console.log(sumOfPositives(sumOfPositiveNumbers));
// challenge2
function findMax(numbers) {
    var maxNumber = numbers[0];
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var num_1 = numbers_1[_i];
        if (num_1 > maxNumber) {
            maxNumber = num_1;
        }
    }
    return maxNumber;
}
var number = [5, 2, 9, 11, 5, 6];
console.log(findMax(number));
// challenge3
var findWinner = function (candidates) {
    var winner = candidates[0];
    for (var i = 1; i < candidates.length; i++) {
        if (candidates[i].votes > winner.votes) {
            winner = candidates[i];
        }
    }
    return winner.name;
};
var candidates = [
    { name: "Alice", votes: 50 },
    { name: "Bob", votes: 75 },
    { name: "Charlie", votes: 95 },
];
console.log(findWinner(candidates));
// challenge4
var findLongestWord = function (word) {
    var longestString = "";
    for (var _i = 0, word_1 = word; _i < word_1.length; _i++) {
        var str = word_1[_i];
        if (str.length > longestString.length) {
            longestString = str;
        }
    }
    return longestString;
};
var words = ["apple", "banana", "orange", "strawberry"];
console.log(findLongestWord(words));
var countProperties = {
    name: "asma",
    age: 25,
    city: "muranga",
};
var totalProperties = Object.keys(countProperties).length;
console.log(totalProperties);
// challenge6
function filterByLength(strings, minLength) {
    var newArray = [];
    for (var i = 0; i < strings.length; i++) {
        if (strings[i].length >= minLength) {
            newArray.push(strings[i]);
        }
    }
    return newArray;
}
console.log(filterByLength(["cat", "giraffe", "hippo", "dog", "elephant"], 5));
// challenge:7
function sumEven(num) {
    var filteredNumbers = num.filter(function (n) { return n % 2 === 0; });
    var sumEvenNumbers = filteredNumbers.reduce(function (a, b) { return a + b; }, 0);
    return sumEvenNumbers;
}
var num = [1, 2, 3, 4, 5];
console.log(sumEven(num));
// // challenge:8
function differenceEvenOdd(numbers) {
    var even = [];
    var odd = [];
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            even.push(numbers[i]);
        } // end
        else {
            odd.push(numbers[i]);
        } // end else
    } //end of for loop
    console.log(odd);
    console.log(even);
    var oddSum = odd.reduce(function (total, num) { return total + num; }, 0);
    var evenSum = even.reduce(function (total, num) { return total + num; }, 0);
    console.log(oddSum);
    console.log(evenSum);
    return oddSum - evenSum;
}
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var diff = differenceEvenOdd(numbers);
console.log("Diff (odd - even):", diff);
// challenge 9
function countTruthy(obj) {
    var count = 0;
    for (var key in obj) {
        if (obj[key]) {
            count++;
        }
    }
    return count;
}
console.log(countTruthy({ a: 0, b: "hello", c: false, d: 42, e: null }));
// challenge10
function average(arrayNum) {
    if (arrayNum.length === 0) {
        return 0;
    }
    var sum = arrayNum.reduce(function (acc, val) { return acc + val; }, 0);
    return sum / arrayNum.length;
}
var arrayNum = [2, 4, 6, 8];
var calAverage = average(arrayNum);
console.log(calAverage); //5
// challenge:11
function linearSearch(arr, key) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === key) {
            return i;
        }
    }
    return -1; // indicates the key was not found
}
console.log(linearSearch([5, 4, 8, 5], 5));
// challenge12
function reverseLinearSearch(array, key) {
    for (var i = array.length - 1; i >= 0; i--) {
        if (array[i] === key) {
            return i;
        }
    }
    return -1; // indicates the key was not found
}
console.log(reverseLinearSearch([5, 4, 8, 5], 5));
// challenge 13
function linearSearchAll(array, key) {
    var indices = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] === key) {
            indices.push(i);
        }
    }
    return indices;
}
console.log(linearSearchAll([5, 4, 8, 5], 5));
// challenge14
function countOccurrences(array) {
    var counts = {};
    for (var i = 0; i < array.length; i++) {
        var word = array[i];
        if (counts[word]) {
            counts[word] += 1;
        }
        else {
            counts[word] = 1;
        }
    }
    return counts;
}
console.log(countOccurrences(["apple", "banana", "apple", "orange", "banana", "apple"]));
// challenge 15
function removeDuplicates(numbers) {
    var unique = {};
    numbers.forEach(function (i) {
        if (!unique[i]) {
            unique[i] = true;
        }
    });
    return Object.keys(unique).map(Number);
}
var uniqueNums = removeDuplicates([1, 2, 3, 3, 7, 7]);
console.log(uniqueNums);
// challenge 16
function mostFreqEle(arr) {
    var n = arr.length, maxcount = 0;
    var res = "";
    for (var i = 0; i < n; i++) {
        var count = 0;
        for (var j = 0; j < n; j++) {
            if (arr[i] === arr[j])
                count++;
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
var arr = ["apple", "banana", "apple", "orange", "banana", "apple"];
console.log(mostFreqEle(arr));
