let btns = document.querySelectorAll("button");
let result = document.querySelector(".result");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
function caculator(a, b, cal){
    let rs;
    switch(cal){
        case "addition":
            rs = a + b;
            break;
        case "subtraction":
            rs = a - b;
            break;
        case "multiplication":
            rs = a * b;
            break;
        case "division":
            rs = a / b;
            break;
    }
    return rs;
}

btns.forEach(function (btn){
    let cal = btn.value;
    btn.onclick = function(){
        let rs = caculator(parseFloat(num1.value), parseFloat(num2.value), cal);
        let mess = "Result " + cal + ": " + rs;
        result.innerHTML = mess;
    }
})