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


// const countries = {
//   Finland: 'Helsinki',
//   Estonia: 'Tallinn',
//   Denmark: 'Copenhagen',
//   Sweden: 'Stockholm',
//   Norway: 'Oslo',
//   Iceland: 'Reykjavík'
// }

// // for (let country in countries) {
// //   console.log(country);
// // }    

// const keys = Object.keys(countries);
// const values = Object.values(countries);
// for (let i = 0; i < keys.length; i++) {
//   console.log(`${keys[i]} is the capital of ${values[i]}`);
// }
// function signUp(username, email, password) {
//   // Kiểm tra nếu email hoặc username đã tồn tại
//   const userExists = users.some(user => user.email === email || user.username === username);
  
//   if (userExists) {
//       return 'You already have an account.';
//   }

//   // Tạo thông tin người dùng mới
//   const newUser = {
//       id: Math.random().toString(36).substr(2, 6), // Tạo ID ngẫu nhiên
//       username,
//       email,
//       password,
//       createdAt: new Date().toLocaleString(), // Thời gian hiện tại
//       isLoggedIn: false
//   };

//   // Thêm vào danh sách `users`
//   users.push(newUser);

//   return 'Sign-up successful! Welcome to the platform.';
// }



const users = [
{
    id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt:'08/01/2020 9:00 AM',
    isLoggedIn: false
},
{
    id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt:'08/01/2020 9:30 AM',
    isLoggedIn: true
},
{
    id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt:'08/01/2020 9:45 AM',
    isLoggedIn: true
},
{
    id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt:'08/01/2020 9:50 AM',
    isLoggedIn: false
},
{
    id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt:'08/01/2020 10:00 AM',
    isLoggedIn: false
}
];
function getInput() {
  const username = prompt("Nhập tên người dùng:") || '';
  const email = prompt("Nhập địa chỉ email:") || '';
  const password = prompt("Nhập mật khẩu:") || '';
  return { username, email, password };
}

function validateInput(username, email, password) {
  if (!username || !email || !password) {
      return "Vui lòng nhập đầy đủ thông tin.";
  }
  // Add more validation as needed (e.g., email format, password strength)
  return null; // No error
}

function signUp(username, email, password) {
  const validationError = validateInput(username, email, password);
  if (validationError) {
      return validationError;
  }

  const userExists = users.some(user => user.email === email || user.username === username);
  
  if (userExists) {
      return 'Tài khoản đã tồn tại.';
  }

  const newUser = {
      _id: Date.now().toString(36) + Math.random().toString(36).substr(2),
      username,
      email,
      password, // In a real app, hash this password
      createdAt: new Date().toLocaleString(),
      isLoggedIn: false
  };

  users.push(newUser);

  return 'Đăng ký thành công! Chào mừng bạn đến với nền tảng của chúng tôi.';
}

function runSignUp() {
  const { username, email, password } = getInput();
  const result = signUp(username, email, password);
  console.log(result);
}

runSignUp();