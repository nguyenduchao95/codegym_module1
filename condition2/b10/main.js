//Bài 1: Chub7ển từ độ C sang độ F.
let c = parseFloat(prompt('Nhập nhiệt độ C'));
let f = c  *  9/5 + 32;
console.log(`${c} độ C = ${f} độ F`);

//Bài 2: Chub7ển từ mét sang feet.
let m = parseFloat(prompt('Nhập số mét cần chub7ển đổi'));
if(m >= 0){
    let ft = m * 3.2808;
    console.log(`${m} mét = ${ft} feet`);
} else {
    console.log('Nhập mét không đúng!');
}

//Bài 3: Tính diện tích hình vuông khi biết cạnh a.
let a3 = parseFloat(prompt('Nhập cạnh a'));
if(a3 >= 0){
    let area3 = a3 * a3;
    console.log(`Diện tích hình vuông là ${area3}`);
} else {
    console.log('Nhập cạnh không đúng!');
}

//Bài 4: Tính diện tích hình  chữ nhật khi biết 02 cạnh a, b.
let a4 = parseFloat(prompt('Nhập cạnh a'));
let b4 = parseFloat(prompt('Nhập cạnh b'));
if(a4 >= 0 && b4 >= 0){
    let area4 = a4 * b4;
    console.log(`Diện tích hình chữ nhật là ${area4}`);
} else {
    console.log('Nhập cạnh không đúng!');
}

//Bài 5: Tính diện tích tam giác vuông khi biết 02 cạnh kề a, b.
let a5 = parseFloat(prompt('Nhập cạnh a'));
let b5 = parseFloat(prompt('Nhập cạnh b'));
if(a5 > 0 && b5 > 0){
    let area2 = 0.5 * a5 * b5;
    console.log(`Diện tích tam giác vuông là ${area5}`);
} else {
    console.log('Nhập cạnh không đúng!');
}

//Bài 6: Giải phương trình bậc 1.
let a6 = parseFloat(prompt('Nhập a'));
let b6 = parseFloat(prompt('Nhập b'));
if (a6 == 0 && b6 == 0){
    alert('Phương trình vô số nghiệm');
}
else if (a6 != 0 && b6 == 0){
    alert('Phương trình có nghiệm a7 = 0');
}
else if (a6 == 0 && b6 != 0){
    alert("Phương trình vô nghiệm");
}
else {
    alert('Phương trình có nghiệm a7 = ' + (-b6/a6));
}

//Bài 7: Giải phương trình bậc 2.

let a7 = parseFloat(prompt('Nhập a'));
let b7 = parseFloat(prompt('Nhập b'));
let c7 = parseFloat(prompt('Nhập c'));
if(a7 != 0) {
    let delta=(b7*b7-4*a7*c7);
    let x1, x2;
    if (delta == 0) {
        x1 = -b7 / (2 * a7);
        alert(`Phương trình có nghiệm kép: x1 = x2 = ${x1}`);
    } else if (delta < 0) {
        alert("Phương trình vô nghiệm");
    } else {
        x1 = (-b7 - Math.sqrt(delta)) / (2 * a7);
        x2 = (-b7 + Math.sqrt(delta)) / (2 * a7);
        alert(`Phương trình có 2 nghiệm: x1 = ${x1} và x2 = ${x2}`);
    }
} else {
    alert('Đây là phương trình bậc 1')
}

//Bài 8: Kiểm tra xem một số nhập vào có phải là tuổi của một người không.
// Một số nguyên là tuổi của một người khi nhỏ 120 và lơn hơn 0.
let age = parseInt(prompt('Nhập tuổi'));
if(age > 0 && age < 120){
    alert('Đây là tuổi của một người');
} else {
    alert('Đây không phải tuổi của một người');
}

//Bài 9: Kiểm tra xem 3 số thực (a,b,c) nhập vào có phải là cạnh của một tam giác.
let a9 = parseFloat(prompt('Nhập a'));
let b9 = parseFloat(prompt('Nhập b'));
let c9 = parseFloat(prompt('Nhập c'));
if(a9 > 0 && b9 > 0 && c9 > 0) {
    if ((a9 + b9 > c9) || (a9 + c9 > b9) || (b9 + c9 > a9)) {
        alert("Đây là tam giác !");
    } else {
        alert("Đây không phải tam giác");
    }
} else {
    alert("Đây không phải tam giác");
}
