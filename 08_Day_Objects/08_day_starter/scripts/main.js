// a = 'JavaScript' // declaring a variable without let or const make it available in window object and this found anywhere
// b = 10 // this is a global scope variable and found in the window object
// function letsLearnScope() {
//   console.log(a, b)
//   if (true) {
//     console.log(a, b)
//   }
// }
// console.log(a, b) // accessible

// function letsLearnScope() {
//     var gravity = 9.81
//     console.log(gravity)
  
//   }
//   // console.log(gravity), Uncaught ReferenceError: gravity is not defined
  
//   if (true){
//     var gravity = 9.81
//     // console.log(gravity) // 9.81
//   }
//   console.log(gravity)  // 9.81
  
// //   for(var i = 0; i < 3; i++){
// //     console.log(i) // 0, 1, 2
// //   }
// //   console.log(i) // 3

// for(let i = 0; i < 3; i++){
//     console.log(i) // 0, 1, 2
//   }


//   const person = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     age: 250,
//     country: 'Finland',
//     city: 'Helsinki',
//     skills: [
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'React',
//       'Node',
//       'MongoDB',
//       'Python',
//       'D3.js'
//     ],
//     isMarried: true
//   }
// console.log(person) 

// const users = {
//   Alex: {
//     email: 'alex@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript'],
//     age: 20,
//     isLoggedIn: false,
//     points: 30
//   },
//   Asab: {
//     email: 'asab@asab.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//     age: 25,
//     isLoggedIn: false,
//     points: 50
//   },
//   Brook: {
//     email: 'daniel@daniel.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//     age: 30,
//     isLoggedIn: true,
//     points: 50
//   },
//   Daniel: {
//     email: 'daniel@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   },
//   John: {
//     email: 'john@john.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//     age: 20,
//     isLoggedIn: true,
//     points: 50
//   },
//   Thomas: {
//     email: 'thomas@thomas.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   },
//   Paul: {
//     email: 'paul@paul.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   }
// }


// for (let user in users) {
//   // usersSkill.push({ name: user, skills: users[user].skills });
//   if (users[user].skills.includes('MongoDB') && 
//       users[user].skills.includes('Express') &&
//       users[user].skills.includes('React') &&
//       users[user].skills.includes('Node'))
//       {
//     console.log(user);
//   }
// }

// const myName  = Object.assign([], users); // đây là hàm object.assign học rồi mà quên. thật vcl
// myName['Pham Van'] = {
//   email: 'john@example.com',
//   skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//   age: 25,
//   isLoggedIn: true,
//   points: 50
// }
// console.log(users);
// console.log(myName);

// const keys = Object.keys(users); // dùng hàm này để lấy ra các key trong object
// console.log(keys);

// const values = Object.values(users); // dùng hàm này để lấy ra các value trong object
// console.log(values);


const countries = {
  Finland: 'Helsinki',
  Estonia: 'Tallinn',
  Denmark: 'Copenhagen',
  Sweden: 'Stockholm',
  Norway: 'Oslo',
  Iceland: 'Reykjavík'
}

// for (let country in countries) {
//   console.log(country);
// }    

const keys = Object.keys(countries);
const values = Object.values(countries);
for (let i = 0; i < keys.length; i++) {
  console.log(`${keys[i]} is the capital of ${values[i]}`);
}










/**
1. Find people who are MERN stack developer from the users object
1. Set your name in the users object without modifying the original users object
1. Get all keys or properties of users object
1. Get all the values of users object
1. Use the countries object to print a country name, capital, populations and languages.
 */
