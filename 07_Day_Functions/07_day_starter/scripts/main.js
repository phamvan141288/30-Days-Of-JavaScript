// console.log(countries)
// alert('Open the console and check if the countries has been loaded')
// function square () {
//     let m = 2
//     let sq = m * m
//     console.log(sq)
// }
// square();


// function square() {
//     let num = 2
//     let sq = num * num
//     return sq
//   }
//   console.log(square())

//   function areaOfCircle(r) {
//     let area = Math.PI * r * r
//     return area
//   }
  
//   console.log(areaOfCircle(1)) // should be called with one argument


//   // function with two parameters
// function functionName(parm1, parm2) {
//     //code goes her
//   }
//   functionName(parm1, parm2) // during calling or invoking two arguments needed
//   // Function without parameter doesn't take input, so lets make a function with parameters
//   function sumTwoNumbers(numOne, numTwo) {
//     let sum = numOne + numTwo
//     console.log(sum)
//   }
//   sumTwoNumbers(10, 20) // calling functions
//   // If a function doesn't return it doesn't store data, so it should return


//   function sumTwoNumbers(numOne, numTwo) {
//     let sum = numOne + numTwo;
//     console.log(sum);
// }

// sumTwoNumbers(10, 20); // Calls the function with arguments 10 and 20
// function sumTwoNumbers(numOne, numTwo) {
//     let sum = numOne + numTwo
//     return sum
//   }
//   console.log(sumTwoNumbers())
// function fullName(firstName , lastName) {
//     firstName = "Van"
//     lastName = "Pham"
//     console.log(`${firstName} ${lastName}`); // Replace with your actual full name
// }

// fullName();

//  Linear equation is calculated as follows: 2x + 3y + 5 = 0. 
// Write a function which calculates value of a linear equation, _solveLinEquation_.
// function liner (x , y) {

// }
// liner()

// /**
 

// x = (3y-5)2

//  */\
function solveLinEquation(a, b, c, x) {
    // Check if b is 0 to avoid division by zero
    if (b === 0) {
        return "No solution for y when b is 0 (vertical line).";
    }

    // Calculate y based on the linear equation formula
    let y = (-a * x - c) / b;
    return y;
}

// Example usage:
let a = 2, b = 3, c = 5, x = 1;
console.log(solveLinEquation(a, b, c, x)); // Outputs the value of y for the given x