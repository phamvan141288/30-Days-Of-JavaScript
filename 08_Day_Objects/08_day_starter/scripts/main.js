// a = 'JavaScript' // declaring a variable without let or const make it available in window object and this found anywhere
// b = 10 // this is a global scope variable and found in the window object
// function letsLearnScope() {
//   console.log(a, b)
//   if (true) {
//     console.log(a, b)
//   }
// }
// console.log(a, b) // accessible

function letsLearnScope() {
    var gravity = 9.81
    console.log(gravity)
  
  }
  // console.log(gravity), Uncaught ReferenceError: gravity is not defined
  
  if (true){
    var gravity = 9.81
    // console.log(gravity) // 9.81
  }
  console.log(gravity)  // 9.81
  
//   for(var i = 0; i < 3; i++){
//     console.log(i) // 0, 1, 2
//   }
//   console.log(i) // 3

for(let i = 0; i < 3; i++){
    console.log(i) // 0, 1, 2
  }