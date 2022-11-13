# Review ES6

## 1. Sự khác biệt nhé giữa let, const và var

- scope (Phạm vị)
  var -> global
  const, let: function, block

- assignment
  const: không thể re-assign
  let và var là có thể

- hoisting
  var có thể sử dụng trước khi khai báo
  let, const

## 2. ES6

## 2.1 Map

Function này được sử dụng với mục đích để “biến đổi” các phần tử trong mảng theo một “công thức” nhất định mà không thay đổi giá trị của mảng ban đầu
Cú pháp chung:
array.map(function(item){
// item chính là phần tử đang lặp
return item; // giá trị trả về sẽ thay thế cho giá trị ban đầu của phần tử
});

Hàm map() nhận vào 3 tham số (theo thứ tự):

Phần tử hiện tại của mảng.
Chỉ số của phần tử hiện tại trong mảng.
Mảng ban đầu.

map() nhận input vào là 1 callback function để transform mỗi phần tử trong mảng thành 1 giá trị mới.
Luôn sử dụng return để trả về từng giá trị sau chỉnh sửa, nếu không mảng trả về cuối cùng sẽ chỉ chứa các giá trị undefined.

## 2.2. Filter

Function này được sử dụng với mục đích để lọc các phần tử trong mảng theo một điều kiện nhất định mà không làm thay đổi giá trị của mảng ban đầu.

Cú pháp:
array.filter(callback[, thisObject]);

callback − Hàm để kiểm tra mỗi phần tử của mảng.
thisObject − Đối tượng để sử dụng như là một this khi thực thi callback.

Trả về: Trả về mảng được tạo ra.

## 2.3 Reduce

Function này được sử dụng để thực thi một function nhất định cho tất cả các phần tử của mảng, với một giá trị tịnh tiến và trả lại một giá trị duy nhất.

Cú pháp:
arr.reduce(callback( accumulator, currentValue[, index[, array]] ) {
// return result from executing something for accumulator or currentValue
}[, initialValue])

Với hàm reduce(), các tham số truyền vào sẽ khác 1 chút so với 2 hàm kể trên:

accumulator biến tích lũy, được trả về sau mỗi lần gọi hàm callback.
currentValue phần tử của mảng đang được xử lý.
index (Optional) chỉ số của phần tử trong mảng đang được xử lý.
array (Optional) mảng hiện tại gọi hàm reduce().

initialValue là giá trị cho tham số thứ nhất (accumulator) của hàm callback trong lần gọi hàm đầu tiên. Nếu giá trị này không được cung cấp thì giá trị phần tử đầu tiên của mảng sẽ được sử dụng.

Giá trị trả về chính là giá trị của accumulator sau lần gọi hàm callback cuối cùng.

## 2.4. Some

Hàm some trong js có nhiệm vụ lặp qua tất cả các phần tử của mảng, mỗi lần lặp nó sẽ truyền giá trị của phần tử đang lặp vào hàm callback. Nếu một phần tử nào đó thỏa với chương trình trong hàm callback thì hàm some sẽ return true. Ngược lại nếu tất cả các phần tử đều không thỏa thì nó sẽ return false.

Cú pháp:

some(function callbackFn(element, index, array) { ... }, thisArg)

element là biến chứa giá trị của phần tử đang lặp.
index là key của phần tử đang lặp.
array là mảng gốc mà phần tử đang thuộc về.
thisArg là tham số không bắt buộc. Nếu được truyền vào thì thisArg sẽ được sử dụng làm giá trị "this", nếu không được truyền vào thì giá trị "this" là "undefined".

## 2.5. Every

Every là một phương thức dành cho đối tượng mảng trong javascript. Công dụng của hàm này là giúp kiểm tra tất cả các phần tử trong mảng có thõa mãn một điều kiện nào đó hay không. Nếu tất cả phần tử đều thỏa thì sẽ trả về true, ngược lại nếu chỉ cần một phần tử không thỏa thôi là nó sẽ trả về false.

array.every(function(currentValue, index, arr), thisValue)

currentValue - giá trị của phần tử hiện tại.
index - chỉ số của phần tử hiện tại.
arr - mảng mà phần tử hiện tại thuộc về.
thisValue - tham số không bắt buộc. Nếu được truyền vào thì thisValue sẽ được sử dụng làm giá trị của this, nếu không được truyền vào thì giá trị this là "undefined".

Mỗi phương thức xử lý trong hàm every sẽ thực hiện một lần với lần lượt tất cả các phẩn tử trong mảng,

Nếu có một phần tử của mảng không thỏa mãn phương thức của hàm every và trả về False, hàm every đó sẽ trả về False. Nếu không có lỗi xảy ra hàm every sẽ trả về True.

## 2.6. Find

Hàm find sẽ lần lượt sử dụng các phần tử của mảng để thực hiện hàm kiểm tra cho đến khi có giá trị thỏa mãn và hàm kiểm tra trả về true. Khi đó hàm find sẽ trả về giá trị của phần tử thỏa mãn và bỏ qua không kiểm tra các phần tử còn lại.

Cú pháp:
array.find(function(currentValue, index, arr),thisValue)

currentValue - giá trị của phần tử hiện tại.
index - chỉ số của phần tử hiện tại.
arr - mảng mà phần tử hiện tại thuộc về.
thisValue - tham số không bắt buộc. Nếu được truyền vào thì thisValue sẽ được sử dụng làm giá trị "this:. Nếu không được truyền vào thì giá trị "this" là "undefined".

Lưu ý:
Hàm find không thực hiện hàm kiểm tra với các phần tử không có giá trị.
Hàm find sẽ không thay đổi mảng ban đầu.

## 2.7 FindIndex

Hàm findIndex sẽ trả về key của phần tử đầu tiên trong mảng thỏa mãn được điều kiện kiểm tra (được truyền vào như một hàm).

Cú pháp:
array.findIndex(function(currentValue, index, arr),thisValue)

currentValue - giá trị của phần tử hiện tại.
index - chỉ số của phần tử hiện tại.
arr - mảng mà phần tử hiện tại thuộc về.
thisValue - tham số không bắt buộc. Nếu được truyền vào thì thisValue sẽ được sử dụng làm giá trị "this:. Nếu không được truyền vào thì giá trị "this" là "undefined".

Lưu ý:
Hàm find không thực hiện hàm kiểm tra với các phần tử không có giá trị.
Hàm find sẽ không thay đổi mảng ban đầu.

## 2.8 for with index (for(let i = 0; i < nums.lentgh ; i++))

Vòng lặp for trong JS lặp lại một khối mã miễn là một điều kiện nhất định được đáp ứng.

Nó thường được sử dụng để thực thi một khối mã trong một số lần nhất định (bạn đã biết trước số lần lặp này).

Cú pháp của vòng lặp for trong JS là:

for(initialization; condition; increment) {
// Code
}

- initialization - khởi tạo, nó được sử dụng để khởi tạo các biến đếm và được đánh giá một lần vô điều kiện trước khi thực hiện đầu tiên của phần thân của vòng lặp.

- condition - điều kiện, nó được đánh giá ở đầu mỗi lần lặp. Nếu nó đánh giá là đúng, các câu lệnh lặp thực thi. Nếu nó ước tính thành false, việc thực hiện vòng lặp kết thúc.

- increment - nó cập nhật bộ đếm vòng lặp với một giá trị mới mỗi khi vòng lặp chạy.

## 2.9 For in

Vòng lặp này thường được sử dụng với mục đích là lặp trong một object chứ không phải trong array hay string giống như hai vòng lặp trên. Số lượng lặp tương ứng với số thuộc tính của object mà ta duyệt.

Cú pháp:
for (let key in object) {
// do something
}

let key: khai báo biến chạy
obj: đối tượng duyệt (thường là object)

Lưu ý: object phải là object đếm được và nó không dùng cho việc duyệt mảng.

## 2.10 For of

For of trong JavaScript là vòng lặp được sử dụng để lấy các giá trị của iterable objects (các đối tượng có thể lặp lại) theo thứ tự index

for (bienDaiDien of doiTuongCoTheLap) {
// Code
}

bienDaiDien : Là biến đại diện cho các phần tử trong đối tượng có thể lặp
doiTuonCoTheLap : Là tên đối tượng có thể lặp

## 2.11. forEach

forEach là một phương thức có sẵn của array, để duyệt qua mỗi phần tử của mảng và thực hiện một hành động nào đó.

forEach() chỉ lặp qua các mảng, nó có thể truy cập cả giá trị và chỉ mục của từng phần tử trong khi lặp.

Cú pháp:
array.forEach(function(currentValue, index, arr), thisValue)

currentValue : giá trị của phần tử hiện tại.
index : chỉ số của phần tử hiện tại.
arr : mảng mà phần tử hiện tại thuộc về.
thisValue : tham số không bắt buộc. Nếu được truyền vào thì thisValue sẽ được sử dụng làm giá trị this . Nếu không được truyền vào thì giá trị “this” là “undefined”.

## 3.Spread operator (...)

Spread operator là một toán tử mới, giúp chúng ta có thể “trải phẳng” các phần tử của một đối tượng tập hợp (array, object, set).

Cú pháp của spread operator là dấu ba chấm (`...`)

Một số ứng dụng với spread operator:

- Sao chép array, object
- Gộp array, object
- Thêm phần tử vào array, thêm key vào object.

Spread operator là một cách đơn giản để giúp các thao tác với array, object.

## 4. String template (literals string)

Template literal là một cú pháp mới, giúp chúng ta dễ dàng thực hiện các thao tác nối chuỗi trên nhiều dòng. Với template literal, chúng ta có thể dễ dàng thêm các giá trị JS vào bên trong của một chuỗi ký tự mà không cần dùng phép nối chuỗi.

## 5. Arrow function

## 5.1. Declaration function

function showMessage(){
//Do something
}
Định nghĩa bằng từ khóa function, sau đó bắt buộc phải đặt tên, không đặt tên cho function thì không phải là 1 Declaration function
Hỗ trợ hoisting gọi trước khi định nghĩa

## 5.2. Expression function

var showMessage2 = function(){

}
Expression function dc gán cho 1 biến, có thể đặt tên cho nó hoặc không

1 vài loại khác của Expression function
Truyền dưới dạng callback
setTimeout(function(){

})
var myObj = {
myFunction: function(){

    }

}
Không được hỗ trợ hoisting

## 5.3. Arrow function

Arrow functions là một cú pháp để khai báo function mới, xuất hiện từ Javascript ES6. Cú pháp cơ bản của arrow function như sau:
(const/let) functionName = (params) => { /_ function body _/ }

Arrow function là một cú pháp khác để có thể khởi tạo một function. Tuy nhiên nó cũng có những đặc điểm khác so với cách khai báo tiêu chuẩn

Arrow function không hỗ trợ hoisting.

Không có binding cho this và super. Vì vậy không nên dùng nó với các trường của một object. this của arrow function là context gần nhất với nó, thay vì là đối tượng gọi nó.

Không thể dùng như một “object constructor”.

Một vài lợi ích khi sử dụng arrow function trong ứng dụng Javascript:

- Giảm số lượng code, code trông sạch hơn.
- Tránh binding `this` trong một số trường hợp (event handling)

## 6. Destructuring

Phép gán destructuring là một cú pháp cho phép “unpack” dữ liệu từ array, object trở thành các biến riêng biệt.

Thông thường, để có thể lấy được dữ liệu từ trong array và object, chúng ta cần phải làm như sau:
const person = {name: "MindX", age: 20}
const name = person.name;
const age = person.age;

Destructuring cho phép chúng ta sửa đoạn code trên thành như sau:
const person = {name: "MindX", age: 7}
const {name, age} = person;

Lưu ý với destructuring:

- Với object, destructuring hoạt động theo tên của trường dữ liệu
- Với array, destructring hoạt động theo vị trí trong array của phần từ
- Nếu key hoặc index không tồn tại trong object / array, biến đó sẽ mang giá trị `undefined`.

Cú pháp destructring giúp giảm thiểu nhiều những dòng code không cần thiết. Giúp code trông sạch hơn.

## 7.Promise

## 8.Class

Trong lập trình hướng đối tượng, class hay còn gọi là lớp được sử dụng để tạo đối tượng có thuộc tính (attribute) và phương thức (method). Từ phiên bản ECMAScript 6 thì JavaSript hỗ trợ tạo ra class giống các ngôn ngữ lập trình hướng đối tượng khác (Java, C++...).
Cú pháp để tạo ra một class trong JavaSript:
class TenClass {
// Hàm khởi tạo
constructor() { ... }
// Các phương thức
phuongThuc1() { ... }
phuongThuc2() { ... }
phuongThuc3() { ... }
}
}
Constructor
Constructor hay còn gọi là phương thức khởi tạo là hàm dùng để khởi tạo một đối tượng của một lớp.Nó sẽ tự động được tạo khi ta tạo một đối tượng của lớp. Chú ý là trong một lớp chỉ có một phương thức constructor, Nếu ta cố ý viết nhiều hơn 1 constructor thì sẽ xuất hiện lỗi. JS chỉ có 1 constructor
Các tham số bị thiếu sẽ trả về underfined. Ta cũng nên đặt tên đối số truyền vào với thên thuộc tính giống nhau để dễ phân biệt

Phương thức Getter và Setter của class

1. Getter
   Phương thức getter giúp ta lấy thuộc tính của đối tượng class. Trong class có bao nhiêu thuộc tính thì có bấy nhiêu phương thức getter.
2. Setter
   Phương thức setter cho phép bạn thay đổi giá trị của thuộc tính của đối tượng.
   rong class có bao nhiêu thuộc tính thì có bấy nhiêu phương thức setter.

Kế thừa trong class
Kế thừa cho chúng ta khả năng sử dụng lại code đã viết.

Sử dụng lại các thuộc tính và phương thức của một lớp có sẵn khi tạo một lớp mới giúp chúng ta tiết kiệm thời gian làm việc.

Một lớp được kế thừa từ lớp cha sẽ có tất cả tác phương thức từ lớp cha.
Xuất hiện từ khóa super: Phương thức super() là phương thức tham chiếu đến lớp cha. Khi chúng ta gọi phương thức super() trong hàm khởi tạo thì chúng ta gọi đến phương thức khởi tạo của lớp cha và có quyền truy cập đến các thuộc tính và phương thức khởi tạo của lớp cha.
Chúng ta cũng có thể gọi phương thức của lớp cha thông qua từ khóa super() khi chúng ta overwride phương thức đó.

Một số lưu ý khác
Hoisting
Không giống như các hàm và các khai báo JavaScript khác, các khai báo class (lớp) không được hoisting

This
Nếu làm việc với ngôn ngữ C, C++ thì các bạn không còn xa lạ gì với từ khóa this nữa. Nó thể hiện cho một đối tượng class.
