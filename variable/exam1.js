/*
// Bài 1

let i = 10
let f = 20.5
let b = true
let s = 'Hà Nội'

document.write('i = ' + i)
document.write('<br/>')
document.write('f = ' + f)
document.write('<br/>')
document.write('b = ' + b)
document.write('<br/>')
document.write('s = ' + s)

*/

/*
// Bài 2

let width = 20
let height = 10
let area = width * height
document.write('Area = ' + area)
*/

// Bài 3

let a,b;
while (isNaN(a)){
    a = parseInt(prompt("Nhập số a"));
}

while (isNaN(b)){
    b = prompt("Nhập số b");
}
function check(a,b){
    let mess = (a % b == 0) ? "a là bội số của b" : "a không là bội số của b";
    alert(mess);
}

check(a,b);

