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

console.log(solveLinEquation(1,-1,3,1))


// Example usage:
// let a = 2, b = 0, c = 5, x = 4;
// console.log(solveLinEquation(a, b, c, x)); // Outputs the value of y for the given x

/**
  Quadratic equation is calculated as follows: _ax2 + bx + c = 0_.
   Write a function which calculates value or values of a quadratic equation, _solveQuadEquation_.
 */
// Phương trình bậc 2 thì phải giải bằng tính nghiệm Delta Δ ( < 0; = 0 ; > 0)
// Tính Δ=b2-4ac
// function quadraticResult(a, b, c) {
//     if( a !== 0){
//         return "Phương trình không có nghiệm khi a !== 0";
//     } 
//     if( a < 0){
//         return "Phương trình vô nghiệm khi a < 0";
//     } 
//     if( a === 0){
//         let Δ = b*b - 4*a*c
//         return Δ;
//     } 
//     // if( a > 0){
//     //     return "Phuong trinh khong co nghiem khi a = 0";
//     // } 
// }
// console.log(quadraticResult(0,1,2))
// function showDateTime (){
//     let currentDate = new Date(length-7);
//     return currentDate;
// }
// console.log(showDateTime())

// Declare a function name _swapValues_. This function swaps value of x to y.
 function swapValues (x, y){
    // x === y; đây là toán tử so sánh, phải dùng phép toán tử gắn giá trị
    // y === x;
    // console.log(x,y)

    let temp = x;
    x = y;
    y = temp;
    console.log(x, y);
 }
swapValues(1,2)

function reverseArray(array) {
    let reversedArray = [];
    
    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }
    
    return reversedArray;
}

// Example usage
console.log(reverseArray());