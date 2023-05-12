// Bài 1: Nhập vào hai số a và b, và kiểm tra xem a có chia hết cho b hay không
let a = parseFloat(prompt('Nhập vào số a: '));
let b = parseFloat(prompt('Nhập vào số b: '));
if(a % b){
    alert('a không chia hết cho b');
} else {
    alert('a chia hết cho b');
}

//Bài 2: Nhập tuổi và in ra kết quả nếu tuổi học sinh đó không đủ điều kiện vào học lớp 10.
let age = parseInt(prompt('Nhập tuổi: '));
if (age >= 15) {
    alert('Học sinh đó đủ điều kiện vào học lớp 10');
} else {
    alert('Học sinh đó không đủ điều kiện vào học lớp 10')
}

//Bài 3: Nhập một số nguyên bất kỳ và in kết quả ra màn hình để nói cho người dùng biết số đó là lớn hay nhỏ hơn 0
let number = parseInt(prompt('Nhập số nguyên bất kỳ: '));
if (number > 0) {
    alert(number + ' lớn hơn 0');
} else if (number < 0) {
    alert(number + ' nhỏ hơn 0');
} else {
    alert('Đây là số 0');
}

//Bài 4: Nhập 3 số nguyên và tìm giá trị lớn nhất của ba số nguyên đó
let number1 = parseInt(prompt('Nhập số thứ 1: '));
let number2 = parseInt(prompt('Nhập số thứ 1: '));
let number3 = parseInt(prompt('Nhập số thứ 1: '));

alert('Số lớn nhất là: ' + Math.max(number1, number2, number3));

//Bài 5: Xếp hạng học lực của học sinh dựa trên các điểm bài kiểm tra, điểm thi giữa kỳ, điểm thi cuối kỳ
let score1 = parseInt(prompt('Nhập điểm bài kiểm tra: '));
let score2 = parseInt(prompt('Nhập điểm thi giữa kỳ: '));
let score3 = parseInt(prompt('Nhập điểm thi cuối kỳ: '));
const trungbinh = (score1 * 10 + score2 * 30 + score3 * 60) / 100;
if (trungbinh >= 9.0) console.log("Hang A");
else if ((trungbinh >= 7.0) && (trungbinh < 9.0)) console.log("Hang B");
else if ((trungbinh >= 5.0) && (trungbinh < 7.0)) console.log("Hang C");
else if (trungbinh < 5.0) console.log("Hang F");
else console.log("Khong hop le");

//Bài 6: Tính hoa hồng nhận được tuỳ theo mức doanh số bán hàng
let doanhSo = parseInt(prompt('Nhập doanh số bán hàng: '));
let hoaHong;
if (doanhSo <= 100) {
    hoaHong = doanhSo * 5 / 100;
    console.log(`Voi tong doanh so la ${doanhSo} thi hoa hong nhan duoc la ${hoaHong}`);
} else if (doanhSo <= 300) {
    hoaHong = doanhSo * 10 / 100;
    console.log(`Voi tong doanh so la ${doanhSo} thi hoa hong nhan duoc la ${hoaHong}`);
} else if (doanhSo > 300) {
    hoaHong = doanhSo * 20 / 100;
    console.log(`Voi tong doanh so la ${doanhSo} thi hoa hong nhan duoc la ${hoaHong}`);
}

//Bài 7: Tính cước điện thoại cho một hộ gia đình với các thông số đã cho
let sophut = prompt("Nhap so phut da su dung : ");
let phi = 0;
const phicodinh = 25;
let tong;
if(sophut > 200){
    phi = (sophut - 200) * 200 + 150 * 400 + 50 * 600;
} else if(sophut > 50){
    phi = (sophut - 50) * 400 + 50 * 600;
} else {
    phi = sophut * 600;
}
tong = 0.01 * phi + phicodinh;
console.log(`Bạn đã gọi ${sophut} phút.`);
console.log(`Số tiền phải nộp của bạn là: ${tong}`);