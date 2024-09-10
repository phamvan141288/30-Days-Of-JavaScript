// // this is your main.js script
// let firstName = 310;
// let lastName = 22;
// let firstName1 = 'Asabeneh'
// let country1 = 'Finland'
// console.log(firstName ** lastName)
// console.log(firstName1 + ' ' + country1)


// let count = 0
// console.log(++count)        // 1
// console.log(count)          // 1

// let count1 = 0
// console.log(count1++)        // 0
// console.log(count1)          // 1


// // let isRaining = true
// // isRaining
// //   ? console.log('You need a rain coat.')
// //   : console.log('No need for a rain coat.')


//  let isRaining = false

// isRaining
//   ? console.log('You need a rain coat.')
//   : console.log('No need for a rain coat.')

  /*
  	condition: Điều kiện cần kiểm tra (ví dụ: isRaining).
	•	?: Được sử dụng sau điều kiện. Nếu điều kiện đúng (truthy), biểu thức sau dấu ? sẽ được thực thi.
	•	:: Được sử dụng để phân tách giữa biểu thức đúng và sai. Nếu điều kiện sai (falsy), biểu thức sau dấu : sẽ được thực thi.
  
  */

//Bài tập
// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
// let firstName = 'Van',
// let lastName = 'Pham'
// let a {
//   firstName = 'Van',
//   lastName = 'Pham',
//   country = 'Vietnam',
//   city = 'hochiminh',
//   age = 37,
//   isMarried = true,
// } = {};

// console.log(typeof firstName, lastName, country, city, age, isMarried)


// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
// 1. 4 > 3 = > true 
// 2. 4 >= 3
// 3. 4 < 3
// 4. 4 <= 3
// 5. 4 == 4
// 6. 4 === 4
// 7. 4 != 4
// 8. 4 !== 4
// 9. 4 != '4'
// 10. 4 == '4'
// 11. 4 === '4'
// 12. Find the length of python and jargon and make a falsy comparison statement.

// console.log( 4 !== '4'); // kiểu so sánh bằng nhưng mà so sánh về giá trị => đương nhiên là khác = > true
// console.log(4 != '4'); // so sánh không quan tâm đến giá trị => true vì không xét về giá trị mà xét về kiểu từ '4' chuyển thành 4
// console.log(4 === '4');
// console.log(4 == '4');
// console.log(4 >= 3);
// console.log('python'.length + ' ' + 'jargon'.length);


/*

6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
   1. 4 > 3 && 10 < 12 => true
   2. 4 > 3 && 10 > 12 => fales (một trong phép tính mà sai là sai hết)
   3. 4 > 3 || 10 < 12 => true
   4. 4 > 3 || 10 > 12 => true
   5. !(4 > 3) => fales
   6. !(4 < 3) => true
   7. !(false) => true
   8. !(4 > 3 && 10 < 12) => fales
   9. !(4 > 3 && 10 > 12) => true
   10. !(4 === '4') => true
   11. There is no 'on' in both dragon and python


*/

// console.log( 4> 3 && 10 < 12);
// console.log( 4 > 3 && 10 > 12);
// console.log( 4 > 3 || 10 < 12);
// console.log('dragon'.length !== 'python'.length);
const now = new Date()
console.log (now.getTime());
