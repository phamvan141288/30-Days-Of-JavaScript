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
các phép toán tử số học như trên gọi là concatenation */

/* Khi thực hiện việc nối thì đương nhiên dùng phép toán tử +
nhưng mà nó sẽ bị dính với nhau nên nếu muốn thêm space
thì phải dùng cấu trúc là ' ' để tạo khoảng cách giữa hai chuỗi */

/*người ta sử dụng hàm string để gọi một chuỗi kết nối với length bằng dấu '.'
là đo chiều dài của chuỗi, trong javascript sẽ đếm từ số thứ tự là số 0
nên phải trừ - 1 để hiển thị kết quả được đúng nhất*/

/* Khi mà sử dụng string[LastIndex] thì có nghĩa là lấy giá trị hiển
thị cụ thể của LastIndex trong string */