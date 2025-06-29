// console.log("Test file index.js");

// // Variable
// // Methods of declaring a variable
// // Use 'var' followed by the variable name to create a variable that holds a value.
// // The value can be a string, number, or other data type.

// var name = "Hello Cybersoft4";
// var fullName = console.log(name);
// var gioi_tinh = "nam";
// var hoc_sinh = "Long";
// var soDienThoai = "0903904696";
// var hoten = "MinhQuan";

// // create some variables to store values of a student A: age 20, class 12A1, math: 10, literature: 6, physics: 3

// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);

// var studentA = "";
// var age = 20;
// var studClass = "12A1";
// var mathScore = 10;
// var litScore = 6;
// var physicsScore = 3;

// // data type
// // number data type
// var historyScore = 45;
// // String data type (string)
// // "I go to school";
// // 'I go to school'
// var content = "I go to school";

// // Null data type
// var varNul = null;
// console.log(varNul);

// // Undefined data type
// console.log(undefined);

// // Operators
// var result = 10 + (35 / 5) * 2;
// console.log(result);

// // Modulus Division
// // check even or odd number by using that number % 2, if result = 0, that number is even number
// var mDivision = 7 % 2;
// console.log(mDivision);

// // The increase (++) and decrease (--) operators modify a variable by adding or subtracting 1, respectively.

// // x++ and x-- modify the value after the expression is evaluated.

// // ++x and --x modify the value before the expression is evaluated.
// var number1 = 10;
// var result2 = 5 + ++number1;
// console.log(result2);

// // assign operator =
// var number2;
// console.log(number2);

// number2 = "Lien Huong";
// console.log(number2);

// var studentName;
// studentName = "Minh Long";

// // += assign operator
// var englishScore = 9;
// // englishScore = englishScore + 1;
// englishScore += 1;

// // -= assign operator
// // englishScore = englishScore - 1;
// englishScore -= 1;
// console.log(englishScore);

// // Create two variables: A with value 30 and B with value 25.
// // Create a result variable to store the product of A and B.
// // Increase A by 1.
// // Decrease A by 5, add to A, and store the result in a new variable.
// // Note: Avoid using variable names that conflict with previously declared ones.

// var A = 30;
// var B = 25;
// var resultMultiply = A * B;
// console.log(resultMultiply);

// A += 1;
// resultMultiply -= 5;

// var resultA = resultMultiply + A;
// console.log(resultMultiply);
// console.log(resultA);

// // constant helps hold value one time only and does not allow to change
// // Pi = 3.14, fixed salary for employee based on day, the amount of money paid for every grab trip
// const salary = 700000;
// const SALARY = 1000000;
// // salary = 5000000;

// // 3-block prototype
// // a rectangle with length : 3 and width: 2, calculate perimeter and area

// // Input
// // - this is a rectangle
// // - the length is 3, the width is 2

// // Steps to handle
// // Algorithm
// // Perimeter:(Width + Length) * 2
// // Square: Width * Length
// var recLength = 3;
// var recWidth = 2;
// var recPerimeter = (recLength + recWidth) * 2;
// var recSquare = recLength * recWidth;
// console.log(recPerimeter);
// console.log(recSquare);

// // Output:
// // Requires: caculate perimeter and square of the rectangle

// // Input
// var leg1 = 3;
// var leg2 = 4;
// var hyptotenuse;

// // Steps to handle
// // Math.pow helps handle with power, when call the function we need 2 Inputs, first one is the number we want (n) and the second one is the number of power
// var hypResult = Math.pow(leg1, 2) + Math.pow(leg2, 2);
// // console.log(hypResult);
// hyptotenuse = Math.sqrt(hypResult);

// // Output
// console.log(hyptotenuse);

// Exercise 2
function sumABC(sum) {
  //   var numA = sum % 10;
  //   var numB = Math.floor((sum % 100) / 10);
  //   var numC = Math.floor((sum % 1000) / 100);
  //   return numA + numB + numC;

  var total = 0;
  var length = String(sum).length;

  for (let index = 0; index < length; index++) {
    var num = sum % 10;
    sum = Math.floor(sum / 10);
    total += num;
  }
  return total;
}

// Exercise 1
function employeeSalaryCalculation(day) {
  return day * 100000;
}
const resultExecersie1 = employeeSalaryCalculation(1);
console.log("employeeSalaryCalculation is: ", resultExecersie1);

//Exercise 2
function averageNumber(array) {
  let sum = 0;
  for (let value of array) {
    sum += value;
  }
  avgNum = sum / array.length;
  return avgNum;
}

const resultExecersie2 = averageNumber([1.1, 2.2, 3.2, 3.0, 0.5]);
console.log("averageNumber is: ", resultExecersie2);

//Exercise 3
function moneyExchange(dollarAmount) {
  var dollarRate = 23500;
  return dollarAmount * dollarRate;
}

const resultExercise3 = moneyExchange(2);
console.log("money exchange: ", resultExercise3);

//Exercise 4
function caculatePerimeterandSquare(width, length) {
  var perimeter = (width + length) * 2;
  var square = width * length;
  return { perimeter: perimeter, square: square };
}

var resultExercise4 = caculatePerimeterandSquare(3, 5);
console.log("perimeter of the rectangle is: ", resultExercise4.perimeter);
console.log("square of the rectangle is:", resultExercise4.square);

//Exercise 5
function sumNum(num) {
  var sum = 0;
  var numLength = String(num).length;

  for (let index = 0; index < numLength; index++) {
    let dividedNum = num % 10;
    num = Math.floor((num /= 10));
    sum += dividedNum;
  }
  return sum;
}
const resultExercise5 = sumNum(3562);
console.log("resultExercise5 is: ", resultExercise5);
