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
// function solveLinEquation(a, b, c, x) {
//     // Check if b is 0 to avoid division by zero
//     if (b === 0) {
//         return "No solution for y when b is 0 (vertical line).";
//     }

//     // Calculate y based on the linear equation formula
//     let y = (-a * x - c) / b;
//     return y;
// }

// console.log(solveLinEquation(1,-1,3,1))


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
// Hàm gọi thời gian
// function showDateTime (){
//     let currentDate = new Date();
//     console.log(currentDate);
// }
// showDateTime();

// // Hoán đổi giá trị gắn vào
//  function swapValues (x, y){
//     // x === y; đây là toán tử so sánh, phải dùng phép toán tử gắn giá trị
//     // y === x;
//     // console.log(x,y)

//     let temp = x;
//     x = y;
//     y = temp;
//     console.log(x, y);
//  }
// swapValues(1,2)

// Gọi ngược từ 3 về 1
// function reverseArray(array) {
//     let reversedArray = [];
    
//     for (let i = array.length - 1; i >= 0; i--) {
//         reversedArray.push(array[i]);
//     }
    
//     return reversedArray;
// }
// console.log(reverseArray([1,2,3]));

// Gọi ngược từ D về A
// let array1 = ['A', 'B', 'C', 'D'];
// function ReverseAlphabetic1 (array1){
//     let ReversedAphabetic1 = [];
//     for( let i = array1.length - 1 ; i >= 0; i--){
//         ReversedAphabetic1.push(array1[i]);
//     }
//     console.log(ReversedAphabetic1);
// }
// ReverseAlphabetic1(array1);

// In kết quả ngược về chữ cái

// let array = ['A', 'B', 'C', 'D'];

// function ReverseAlphabetic(array) {
//     let ReversedAlphabetic = [];
//     for (let i = array.length - 1; i >= 0; i--) {
//         ReversedAlphabetic.push(array[i]);
//     }
//     return ReversedAlphabetic; // Trả về mảng đã đảo ngược
// }

// let ReverseAlphabetic = (array)=>{
//     let ReversedAlphabetic = [];
//     for( let i = array.length-1; i >= 0; i--){
//         ReversedAlphabetic.push(array[i]);
//     }
//     return ReversedAlphabetic;
// }
// console.log(ReverseAlphabetic(array));

// In kết quả đã đảo ngược ra ngoài hàm
// console.log(ReverseAlphabetic(array)); // Kết quả: ['D', 'C', 'B', 'A']

/*
Đã khai hàm return tên biến được khai mới trong hàm thì khi ra ngoài hàm phải dùng hàm console.log trả về tên hàm
Đã khai console.log tên biến được khai mới trong hàm thì ra ngoài thì chỉ trả về tên hàm
*/

// async function getETCPrice() {
//     try {
//         // Gọi API của CoinGecko để lấy giá ETC
//         const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum-classic&vs_currencies=usd');
//         const data = await response.json();

//         // Truy cập giá ETC bằng USD
//         const etcPrice = data['ethereum-classic'].usd;
//         console.log(`Giá Ethereum Classic (ETC): $${etcPrice} USD`);
//     } catch (error) {
//         console.error("Có lỗi xảy ra khi gọi API:", error);
//     }
// }

// getETCPrice();

// async function fetchData () {
//      try { 
//         let response = await fetch(`https://data.binance.com/api/v3/ticker/price?symbol=USDT`);
//         // let response = await fetchData('https://api.binance.com/api/v3/ticker/price?symbol=ALTUSDT');
//         let data  = await response.json();
//         console.log(data);
//      } catch (error) {
//         console.error("lỗi dữ liệu: ", error)
//      }
//     }
// let cryptoSymbol = prompt("Nhập mã tiền điện tử (ví dụ: alt): ")
//     if (cryptoSymbol === 'alt'){
//         fetchData(cryptoSymbol)
//     } else {
//         fetchData(`bạn không nhập đúng`)
//     }

    // async function fetchData(symbol) {
    //     try { 
    //         // Tạo URL động bằng cách ghép symbol với USDT
    //         let response = await fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${symbol.toUpperCase()}USDT`);
            
    //         // Kiểm tra nếu API trả về mã lỗi, có thể do symbol không hợp lệ
    //         if (!response.ok) {
    //             throw new Error("Mã tiền điện tử không hợp lệ hoặc không được hỗ trợ.");
    //         }
    
    //         let data  = await response.json();
    //         console.log(`Giá của ${symbol.toUpperCase()}/USDT: ${data.price} USDT`);
    //     } catch (error) {
    //         console.error("Tên của đồng coin không chính xác: ", error.message);
    //     }
    // }
    
    // let cryptoSymbol = prompt("Nhập mã tiền điện tử (ví dụ: alt): ");
    // if (cryptoSymbol) {
    //     fetchData(cryptoSymbol);
    // } else {
    //     console.log("Bạn chưa nhập mã tiền điện tử.");
    // }


    