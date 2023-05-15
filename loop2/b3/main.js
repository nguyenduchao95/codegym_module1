//Bài 1: Sử dụng vòng lặp để đếm từ 1 đến 100. Khi số là 99,
// hiển thị hộp thoại thông báo là đã hoàn thành.
for(let i = 1; i < 100; i++){
    if(i = 99) {
        alert('Hoàn thành');
    }
}
//Bài 2: Sử dụng hàm prompt() để lấy thông tin nhiệt độ hiện tại được nhập bởi người truy cập.
// Nếu nhiệt độ nhập vào trên 100, yêu cầu người dùng giảm nhiệt độ.
// Nếu nhiệt độ dưới 20, yêu cầu người dùng tăng nhiệt độ.
let temp = parseInt(prompt('Nhập nhiệt độ'));
while(temp < 20 || temp > 100){
       temp = temp < 20 ? parseInt(prompt('Tăng nhiệt độ')) : parseInt(prompt('Giảm nhiệt độ'));
}

//Bài 3: Hiển thị ra 20 số trong dãy fibonacci đầu tiên.
let rs3 = [0,1];
let num3 = 20;
while(rs3.length < num3){
    let next = rs3[rs3.length - 1] + rs3[rs3.length - 2];
    rs3.push(next);
}
for(let i of rs3){
    document.write(i + '<br>');
}

//Bài 4: Tìm số đầu tiên trong dãy fibonacci chia hết cho 5.
let fibo = [0,1];
while(fibo.length){
    let next = fibo[fibo.length - 1] + fibo[fibo.length - 2];
    fibo.push(next);
    if(next % 5 == 0) break;
}
document.write('Số đầu tiên trong dãy fibonacci chia hết cho 5 là: ' + fibo[fibo.length - 1]);

//Bài 5: Tính tổng của 20 số đầu tiên trong dãy fibonacci.
let rs5 = [0,1];
let num5 = 20;
let sum5 = 0;
while(rs5.length < num5){
    let next = rs5[rs5.length - 1] + rs5[rs5.length - 2];
    rs5.push(next);
}
for(let i of rs5){
    sum5 += i;
}
document.write('Tổng của 20 số đầu tiên trong dãy fibonacci là: ' + sum5);

//Bài 6: Tính tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên.
let rs6 = [];
let i = 0;
let sum6 = 0;
while(i >= 0){
    rs6.push(i);
    if(rs6.length == 30) break;
    i+=7;
}
for(let j of rs6){
    sum6 += j;
}
document.write('30 số đầu tiên chia hết cho 7 là: ' + rs6 + '<br>');
document.write('Tổng của 30 số đầu tiên chia hết cho 7 là: ' + sum6);

//Bài 7: Hãy viết một chương trình in ra các số từ 1 đến 100.
// Nhưng nếu số chia hết cho 3 thì in ra "Fizz", 5 thì in ra "Buzz" thay vì in ra số đó.
// Và nếu số đó chia hết cho cả 3 và 5 thì in ra chữ "FizzBuzz".
for(let i = 1; i <= 100; i++){
    if(i % 15 == 0){
        document.write('FizzBuzz <br>');
    } else if(i % 3 == 0){
        document.write('Fizz <br>');
    } else if(i % 5 == 0){
        document.write('Buzz <br>');
    } else {
        document.write(i + '<br>');
    }
}

//Bài 8: Game đoán số
document.querySelector('button').onclick = function(){
    let max = parseInt(prompt('Số bạn muốn đoán trong khoảng lớn nhất là bao nhiêu?'));
    let num8 = parseInt(prompt('Nhập số bạn đoán'));
    let random = Math.floor(Math.random() * (max + 1));
    let isFail = true;
    for(let i = 0; i < 2; i++){
        if(num8 == random) {
            document.write('Bạn đã đoán đúng số. Chúc mừng bạn!');
            isFail = false;
            break;
        } else if(num8 > random){
            alert('Số bạn đoán lớn hơn');
            num8 = parseInt(prompt('Nhập số bạn đoán'));
        } else {
            alert('Số bạn đoán bé hơn');
            num8 = parseInt(prompt('Nhập số bạn đoán'));
        }
    }
    if(isFail) {
        alert('Bạn hết số lần đoán!');
        document.write('Bạn hết số lần đoán!');
    }
}