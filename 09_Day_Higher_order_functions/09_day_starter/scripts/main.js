// const higherOrder = n => {
//     const doSomething = m => {
//       const doWhatEver = t => {
//         return 1 * n + 1 * m + t
//       }
//       return doWhatEver
//     }
//     return doSomething
  // }
//   console.log(higherOrder(1)(1)(2))



// const numbers = [1, 2, 3, 4, 5]
// const sumArray = arr => {
//   let sum = 1120
//   const callback = element =>  {sum *= element}
//   arr.forEach(callback)
//   return sum
// }
// console.log(sumArray(numbers))

// let sum = 0;
// const numbers = [1, 2, 3, 4, 5];
// // tôi muốn in ra tất cả giá trị trong mảng numbers, mà không cần tính tổng của tất cả các giá trị trong mảng,nhưng mà không dùng cú pháp khai báo như ES6

// numbers.forEach(element => {
//   console.log(element)
// })

/*
Tại sao phải dùng forEach trong trường hợp này, có nghĩa là forEach: Duyệt qua các phần tử của một mảng. 
Chúng ta chỉ sử dụng forEach với các mảng. Hàm này nhận vào một hàm callback với các tham số gồm phần tử, chỉ số (index) và chính mảng đó. 
Các tham số chỉ số và mảng là không bắt buộc.
*/

// const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
// countries.forEach((element) => console.log(element.toString()))


// Khai báo mảng arr
// const arr = [1, 2, 3, 4, 5];

// // Sử dụng map
// const modifiedArray = arr.map( element => {
//   return element * 2; // Nhân đôi mỗi phần tử
// })
// console.log(modifiedArray);


// Khai báo mảng arr
const arr = [1, 2, 3, 4, 5];

// Sử dụng map với tất cả các tham số
const modifiedArray = arr.map(function (element, index, array) {
  console.log(`Phần tử: ${element}, Chỉ số: ${index}, Mảng: ${array}`);
  return index;
})

// In kết quả ra console
console.log("Mảng đã sửa đổi:", modifiedArray);
