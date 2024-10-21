// console.log(countries)
// alert('Open the console and check if the countries has been loaded')
// for(let i = 0; i <= 10; i++){
//     console.log(i)
// }

// let i;

// for(i = 10; i >= 0; i--){
//     console.log(`${i} * ${i} = ${i * i}`) // nên nhớ khi mà dùng phép nối có dấu $ thì luôn luôn phải dùng hàm dấu stick `` để thực hiện được lệnh
// }

// const countries1 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
// const newArr = [] // tạo ra một biến rỗng để khi hiển thị giá trị thì thông qua biến này để thể hiện
// for(let i = 0; i < countries1.length; i++){ // đầu tiên là cho chạy vòng lặp, dùng lenght để chạy toàn bộ tập hợp trên đên số 5 là dừng(cụ thể là length ở đây là 5)
//   newArr.push(countries1[i].toUpperCase())
// }
// console.log(newArr)
// // console.log(countries1)
// console.log(countries1.length)
// toUpperCase() chỉ dùng trong String, chứ không dùng lên Array khi mà đưa vào hàm console.log thì nó in ra mảng chứ không phải string

// let i = 0
// while (i <= 5) {
//   console.log(i)
//   i++
// }
//      // Bản chất của vòng lặp while là khai báo điều kiện () và thực thực thi {} (tức là do) => Công thức ở trên và ở dưới chỉ là tách ra
// let m = 0
// do{
//   console.log(m)
//   m++
// }while (m <= 5) 

// const fruits = ['apple', 'banana', 'cherry'];

// for (const fruit of fruits) {
//   console.log(`${fruit}  ${fruit}`);
// }

// 4. Write a loop that makes the following pattern using console.log():

//    ```js
//        #
//        ##
//        ###
//        ####
//        #####
//        ######
//        #######
//    ```

// let heights = 7;
// for (i = 1; i <= heights; i++) {
//     let space = ' '.repeat(heights-i);
//     let m = '#'.repeat(2*i - 1);
//     console.log(space + m);
//     }




// const height = 7;  // Chiều cao của cây thông

// for (let i = 1; i <= height; i++) {
//     let space = ' '.repeat(height-i);   // Tạo khoảng trắng để căn giữa
//     let stars = '*'.repeat(2 * i - 1);    // Tạo các ngôi sao cho mỗi dòng
//     console.log(space + stars);           // Hiển thị khoảng trắng + ngôi sao
// }

// 5. Use loop to print the following pattern:

//    ```sh
//    0 x 0 = 0
//    1 x 1 = 1
//    2 x 2 = 4
//    3 x 3 = 9
//    4 x 4 = 16
//    5 x 5 = 25
//    6 x 6 = 36
//    7 x 7 = 49
//    8 x 8 = 64
//    9 x 9 = 81
//    10 x 10 = 100
//    ```

// for ( let i = 0; i <= 10; i++) {
//  console.log(`${i} * ${i} = ${i * i}`);
// }

// 6. Using loop print the following pattern

//    ```sh
//     i    i^2   i^3
//     0    0     0
//     1    1     1
//     2    4     8
//     3    9     27
//     4    16    64
//     5    25    125
//     6    36    216
//     7    49    343
//     8    64    512
//     9    81    729
//     10   100   1000
//    ```

//7. Use for loop to iterate from 0 to 100 and print only even numbers
//8. Use for loop to iterate from 0 to 100 and print only odd numbers
//9. Use for loop to iterate from 0 to 100 and print only prime numbers
//10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
// console.log('i i^2 i^3');
// let sum = 0; khi tính tổng trong vòng lặp của 1 hàm là phép toán tử (khác với toán hạng) vì nếu không khai báo thì giá trị nó sẽ
// biểu thị là unidentified nên phải khai báo cho nó 1 giá trị, phép tính trong vòng lặp sum += i là dùng để thực hiện phép tính
// sum chạy liên tục , tức là phép toán tử gán cho nó chạy liên tục kết quả sum mà bắt đầu là kết quả là sum = 0;
// 11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// 12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
// 13. Develop a small script which generate array of 5 random numbers
// 14. Develop a small script which generate array of 5 random numbers and the numbers must be unique
// 15. Develop a small script which generate a six characters random id:

//     ```sh
//     5j2khz

// sum1 = 0;
// sum2 = 0;
let uniqueNum = [];
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// arr2 =[];
for (let i = 0 ; i <= 9; i++) {
    uniqueNum.push(i.toString());
}

for (let i = 0 ; i < alphabet.length; i++) {
    uniqueNum.push(alphabet[i]);
}
console.log(`Result`, uniqueNum);

// Khởi tạo hàm chạy chạy ra ID random
function generateRandomId(length = 6) {
    let randomId = '';
    for (let i = 0; i < length; i++) {
        // Get a random index from the uniqueNum array
        let randomIndex = Math.floor(Math.random() * uniqueNum.length); // nhớ đây là hàm chạy thuật toán hiện random
        // Append the corresponding character to the randomId string
        randomId += uniqueNum[randomIndex];
    }
    return randomId;
}

// Generate and display a random ID
// let randomId = generateRandomId();
// console.log(`Generated Random ID:`, randomId);

let intervalId = setInterval(() => {
    // Generate a new random ID and display it
    let randomId = generateRandomId();
    console.log(`Generated Random ID:`, randomId);

}, 1000);
        

 
// Set interval to call the function every 1 second (1000 milliseconds)
// let intervalId = setInterval(() => {
//     uniqueNum = []; // Clear the array before generating new numbers
//     generateUniqueNumbers();

    // Optional: stop the interval after showing results 5 times
    // if (--counter === 0) clearInterval(intervalId);
// }, 1000);
// let uniqueNum = []; // Array to store unique random numbers

// Function to generate unique random numbers
// function generateUniqueNumbers() { 
//     while (uniqueNum.length < 10) {
//         let randomNum = Math.floor(Math.random() * 100); // Generate a random number between 0 and 99
        
//         // Check if the random number is not already in the array
//         if (!uniqueNum.includes(randomNum)) {
//             uniqueNum.push(randomNum); // Add the random number to the array if it's not already present
//         }
//     }

//     // Output the array of unique random numbers
//     console.log("Result:", uniqueNum);
// }   

// // Set interval to call the function every 1 second (1000 milliseconds)
// let intervalId = setInterval(() => {
//     uniqueNum = []; // Clear the array before generating new numbers
//     generateUniqueNumbers(); // Call the function to generate new random numbers

//     // Optional: stop the interval after showing results 5 times
//     // if (--counter === 0) clearInterval(intervalId);
// }, 1000);

    
    // if(i % 2 === 0) {x   
    //    sum1 += i;
    //    console.log(arr1)
    // } else {
    //    sum2 += i;
        //  }
   
// arr1.push(sum1);
// arr2.push(sum2);
// console.log(`Total odds number are ${sum1}`)
// console.log(`Total even number are ${sum2}`)
// console.log(`Total odds number as array are:`, arr1)
// console.log(`Total odds number as array are:`,  arr2)

    //  console.log(`Total numbers are ${sum}`)
     
    
    // if (i % 2 !== 0 || i == 2) {
    //     console.log(`Prime number: ${i}`)
    // }
    
    
    // if ( i % 2 !== 0) {
    //     console.log(i);
    // }
    
    
    // if(i % 2 === 0){
    //     console.log(i)
    // }




    //     // if ( i % 2 === 0) {
//     //     console.log(i);
//     // }

    // if ( i % 2 !== 0) {
    //     console.log(i);
    // }
    // if (i % i !== 0 || i / 1 !== i) {
    //     console.log(i);
    // } else  {
        
    
    
    // console.log(`${i}  ${i**2} ${i**3}`);


// chia hết cho chính nó
// chi hết cho 1
// không thể chia cho số khác ngoài chính nó