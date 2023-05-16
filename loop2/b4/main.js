//Bài 1: In dãy Fibonaci
let fibo = [0, 1];
let num1 = parseInt(prompt('Nhập số số Fibonaci muốn in'));
while (fibo.length) {
    if (fibo.length == num1) break;
    let next = fibo[fibo.length - 1] + fibo[fibo.length - 2];
    fibo.push(next);
}
for (let i of fibo) {
    document.write(i + '<br>');
}

//Bài 2: Tính giai thừa của một số nguyên dương
let num2 = parseInt(prompt('Nhập số nguyên dương bất kì'));
let rs = 1;
while (num2 <= 0) {
    alert('Bạn nhập chưa đúng. Hãy nhập lại!');
    num2 = parseInt(prompt('Nhập số nguyên dương bất kì'));
}
for (let i = num2; i > 0; i--) {
    rs *= i;
}
document.write(`${num2}! = ${rs}`);

//Bài 3: In tam giác vuông. Các góc vuông nằm ở các vị trí khác nhau
for (let i = 0; i < 6; i++) {
    for (let j = 0; j <= i; j++) {
        document.write('*');
    }
    document.write('<br>');
}

for (let i = 6; i >= 0; i--) {
    let span = `<div style='text-align: right; width: 60px'>`
    for (let j = 0; j <= i; j++) {
        span += '*';
    }
    document.write(span + '</div>');
}

// Bài 4: In hình chữ nhật
let a = 6;
let b = 18;
for (let i = 0; i <= a; i++) {
    document.write('*');
    for (let j = 1; j <= b; j++) {
        if (i == 0 || i == a) {
            document.write('*');
        } else {
            document.write('&nbsp;&nbsp;');
        }
    }
    document.write('*');
    document.write('<br>');
}

//Bài 5: Viết chương trình tính lãi ngân hàng (lãi mẹ đẻ lại con) khi biết số tiền ban đầu, số tháng cho vay và lãi xuất hàng tháng.
let money = parseFloat(prompt('Số tiền ban đầu của bạn: '));
let month = parseInt(prompt('Số tháng cho vay: '));
let rate = parseFloat(prompt('lãi suất hàng tháng (%): '));

for (let i = 0; i < month; i++) {
    money += money * rate / 100;
}
alert(`Số tiền của bạn sau ${month} tháng là: ${money}`);

//Bài 6: In hình trái tim
for(let i = 1; i <= 6; i++) {
    for(let j = 1; j <= 7; j++) {
        if(!((i == 1 && (j == 1 || j == 4 || j == 7))
            || (i == 4 && (j == 1 || j == 7))
            || (i == 5 && (j <= 2 || j >= 6))
            || (i == 6 && (j <= 3 || j >= 5)))) {
            document.write("&nbsp;*&nbsp;");
        } else {
            document.write("&nbsp;&nbsp;&nbsp;&nbsp;");
        }
    }
    document.write("<br>");
}