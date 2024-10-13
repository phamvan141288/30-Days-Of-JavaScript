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

let m = [];
let heights = 1;
let space;
for (i = 0; i <= heights; i++) {
    space = ''.repeat(heights-i);
    m += '#'.repeat(heights*i-1)
    console.log(space + m)
    }




const height = 7;  // Chiều cao của cây thông

for (let i = 1; i <= height; i++) {
    let space = ' '.repeat(height-i);   // Tạo khoảng trắng để căn giữa
    let stars = '*'.repeat(2 * i - 1);    // Tạo các ngôi sao cho mỗi dòng
    console.log(space + stars);           // Hiển thị khoảng trắng + ngôi sao
}