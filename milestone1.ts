// // challenge 1
function add(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(` ${add(7, 3)}`); //10

// challenge:2
function convert(minutes: number): number {
  return minutes * 60;
}
console.log(convert(2)); //120

// challenge 3:
function findPerimeter(width: number, length: number): number {
  return 2 * (width + length);
}
console.log(findPerimeter(4, 5)); // 18

// challenge 4:
function isNegative(num: number): boolean {
  if (num < 1) {
    return true;
  } else {
    return false;
  }
}
console.log(isNegative(2)); //false

// challenge5:
function canDrive(name: string, age: number): string | number {
  if (age >= 18) {
    return `${name} is old enough to drive`;
  } else {
    return `${name} is not old enough to drive`;
  }
}

console.log(canDrive("asma", 22)); //asma is old enough to drive
console.log(canDrive("yasmin", 16)); // yasmin is not old enough to drive

// challenge 6:

function findLargest(a: number, b: number, c: number): number {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}
console.log(findLargest(5, 4, 6));

// challenge 7:
function calculateBMI(weight: number, height: number): string {
  let BMI = weight / (height * height);

  if (BMI <= 18.5) {
    return `Your BMI is ${BMI.toFixed(2)} - underweight`;
  } else if (BMI > 18.5 && BMI <= 24.9) {
    return `Your BMI is ${BMI.toFixed(2)} - Normal weight`;
  } else if (BMI > 25 && BMI <= 29.9) {
    return `Your BMI is ${BMI.toFixed(2)} - overweight`;
  } else {
    return `obese`;
  }
}
console.log(calculateBMI(68, 1.75));
console.log(calculateBMI(85, 1.8));

// challenge 8:
function greetUser(name: string, hour: number): string {
  if (hour >= 5 && hour <= 11) {
    return `Good morning, ${name}`;
  } else if (hour >= 12 && hour <= 17) {
    return `Good afternoon, ${name}`;
  } else if (hour >= 18 && hour <= 21) {
    return `Good evening, ${name}`;
  } else {
    return `Good night, ${name}`;
  }
}
console.log(greetUser("Yasmin", 6)); //good morning,Yasmin

// challenge 9
function fizzBuzzCheck(num: number): string {
  if (num % 3 === 0) {
    return `fizz`;
  } else if (num % 5 === 0) {
    return `buzz`;
  } else if (num % 3 === 0 && num % 5 === 0) {
    return `fizzBuzz`;
  } else {
    return `num`;
  }
}
console.log(fizzBuzzCheck(4));

// challenge 10
function perimeter(l: string, num: number): number {
  if (l === "s") {
    return 4 * num;
  } else if (l === "c") {
    return 6.28 * num;
  } else {
    return num;
  }
}
console.log(perimeter("s", 3));
console.log(perimeter("c", 3));

// challenge 11
function isEven(n: number) {
  return n % 2 === 0;
}
function sumEvenNumbers(n: number): number {
  let sum = 0;
  let i = 0;

  while (i <= n) {
    if (isEven(i)) {
      sum += i;
    }
    i++;
  }
  return sum;
}
console.log(sumEvenNumbers(6)); //12
console.log(sumEvenNumbers(10)); //30

// chapter 12
function powerUp(num: number, times: number): number {
  if (times === 1) return num;
  return num * powerUp(num, times - 1);
}
console.log(powerUp(2, 3));

// challenge13
function findFactorial(num: number): number {
  if (num === 0) return 1;
  return num * findFactorial(num - 1);
}
const numberToFindFactorial: number = 4;
console.log(
  `Factorial of ${numberToFindFactorial} is: ${findFactorial(
    numberToFindFactorial
  )}`
); //24

// challenge 14
function sumMultiples(n: number, divisor: number): number {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % divisor === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumMultiples(10, 2)); //30

// challenge15
let sumDigits = function (num: number): number {
  let sum = 0;
  for (let i = 0; num > 0; i++) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
};
console.log(sumDigits(123));
