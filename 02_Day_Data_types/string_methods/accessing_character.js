// Let us access the first character in 'JavaScript' string.

let string = 'JavaScript'
let firstLetter = string[0]
console.log(firstLetter) // J
let secondLetter = string[1] // a
let thirdLetter = string[2]
let lastLetter = string[9]
console.log(lastLetter) // t
let lastIndex = string.length - 1
console.log(lastIndex) // 9
console.log(string[lastIndex]) // t

/* nếu ghép các phép tính + - * /  thì đối với các ký tự
chuỗi là số thì ( - / * ) sẽ quy đổi ký tự chuỗi thành số
để thực hiện phép tính.
Đặc biệt: thì phép + là phép nối chuỗi không thực hiện
các phép toán tử số học như trên gọi là concatenation

