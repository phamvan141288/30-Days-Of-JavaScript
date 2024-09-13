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
// const now = new Date()
// console.log (now.getTime());

/*
7. Use the Date object to do the following activities
   1. What is the year today?
   2. What is the month today as a number?
   3. What is the date today?
   4. What is the day today as a number?
   5. What is the hours now?
   6. What is the minutes now?
   7. Find out the numbers of seconds elapsed from January 1, 1970 to now.


*/

// const thoigian =  new Date()
// const months = [
//   "January", "February", "March", "April", "May", "June", 
//   "July", "August", "September", "October", "November", "December"
// ];
// console.log(thoigian.getFullYear())
// console.log(months[thoigian.getMonth()]) // truyền 1 biến vào để show kết quả hiện thị thì dùng dấu [] này để lấy giá trị hiện tại về
// // trong khi đó khi khai báo biến months là một biến string
// console.log(months[9]) // vì giá trị khai báo là một mảng chứa trong đó là string nên khi đưa giá trị theo số thứ tự mảng nó sẽ xuất hiện kết quả
// console.log(thoigian.getDate()-2)
// console.log(thoigian.getTime())
// console.log(thoigian.getHours())
// console.log(thoigian.getMinutes())
// const now = new Date();
// const secondsElapsed = Math.floor(now.getTime() / 1000);
// console.log(secondsElapsed.toLocaleString()); // dùng định dạng toLocalString() để đổi định dang sang dấu `,`
// console.log(secondsElapsed.toLocaleString('de-DE')); // dùng toLocaleString(`de-DE`) đổi định dạng sang dấu `.`

// Bài tập 2
/**
 Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

   ```sh
   Enter base: 20
   Enter height: 10
   The area of the triangle is 100
 */

   // let base = prompt("Enter base: ")
   // let height = prompt("Enter height: ")
   // let result = base*height*2

   // console.log("The area of the triangle is" + " " + result);

/**
 * 1. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

   ```sh
   Enter side a: 5
   Enter side b: 4
   Enter side c: 3
   The perimeter of the triangle is 12
//  */
// let a = prompt("Enter side a: ")
// let b = prompt("Enter side b: ")
// let c = prompt("Enter side c: ")
// let result = a + b + c;
// console.log("The perimeter of the triangle is: ", result);

/**
 * 
1. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
1. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
1. Calculate the slope, x-intercept and y-intercept of y = 2x -2
1. Slope is m = (y<sub>2</sub>-y<sub>1</sub>)/(x<sub>2</sub>-x<sub>1</sub>). Find the slope between point (2, 2) and point(6,10)
1. Compare the slope of above two questions.
1. Calculate the value of y (y = x<sup>2</sup> + 6x + 9). Try to use different x values and figure out at what x value y is 0.
 */

//  let length = prompt("Enter the length: ")
//  let width = prompt("Enter the width: ")
//  let area = length*width;
//  console.log("Area of rectangle is: ", area)

// let r = prompt("Enter the r of circle: ")
// let AreaResult = 3.14 * r * r;
// let circumferenceResult = 2*3.14*r;
// console.log("The result of area is: ", AreaResult );
// console.group("The result of circumference is: ", circumferenceResult);

/**
 * 1. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

    ```sh
    Enter hours: 40
    Enter rate per hour: 28
    Your weekly earning is 1120

    8 * 28 = 1 day
    40 * 28 

    ```
 */

let hour = prompt("Enter hours: ")
let rate = prompt("Enter rate per hour: ")
let earn = (hour*rate)*5;
console.log(`Your weekly earning is ${earn}`)