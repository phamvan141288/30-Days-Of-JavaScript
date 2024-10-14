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
console.log('i i^2 i^3');
for (let i =0 ; i <= 10; i++) {
//     // if ( i % 2 === 0) {
//     //     console.log(i);
//     // }

    // if ( i % 2 !== 0) {
    //     console.log(i);
    // }
    if (i % i !== 0 || i / 1 !== i) {
        console.log(i);
    } else  {
        
    }
    
    // console.log(`${i}  ${i**2} ${i**3}`);
}

// chia hết cho chính nó
// chi hết cho 1
// không thể chia cho số khác ngoài chính nó