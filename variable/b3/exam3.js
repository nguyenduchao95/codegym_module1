// Viết chương trình nhập điểm của một sinh viên cho các môn: Vật lý, Hóa học, và Sinh học.
// Sau đó hiển thị điểm trung bình và tổng của những điểm này.
let phys = parseFloat(prompt("Nhập điểm Vật lý"));
let chem = parseFloat(prompt("Nhập điểm Hóa học"));
let bio = parseFloat(prompt("Nhập điểm Sinh học"));
let sum = phys + chem + bio;
let avg = sum / 3;
document.write("Điểm trung bình là: " + avg + "<br/>");
document.write("Tổng điểm là: " + sum + "<br/>");



// Viết chương trình nhập một giá trị là độ 0C (Celsius) và chuyển nó sang độ 0F (Fahrenheit).
// [Hướng dẫn: C/5 = (F-32)/9]
let cel = parseFloat(prompt("Nhập giá trị độ 0C (Celsius)"));
let fah = 32 + 9 * cel / 5;
document.write(cel + " độ 0C (Celsius) = " + fah + " độ 0F (Fahrenheit) <br/>");



// Viết chương trình tính diện tích hình tròn
let r = parseFloat(prompt("Nhập bán kính hình tròn"))
let area = Math.PI * r * r;
document.write("Diện tích hình tròn là: " + area + "<br/>");



// Viết chương trình chu vi hình tròn
let perimeter = Math.PI * 2 * r;
document.write("Chu vi hình tròn là: " + perimeter + "<br/>");