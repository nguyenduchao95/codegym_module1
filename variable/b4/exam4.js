let input = document.getElementById("amount");
let fromSelect = document.getElementById("from");
let toSelect = document.getElementById("to");
let btn = document.getElementById("btn");
let result = document.getElementById("result");

function convertCurrency(amount, from, to){
    let rs = '';
    if(from == 'vnd') {
        if(to == 'vnd') rs = amount + " Đ";
         else rs = amount/23000 + " $";
    }

    if(from == 'usd') {
        if(to == 'vnd') rs = amount * 23000 + " Đ";
        else rs = amount + " $";
    }

    return rs;
}

btn.onclick = function (){
    let amount = parseFloat(input.value);
    let mess = convertCurrency(amount, fromSelect.value, toSelect.value);
    console.log(mess)
    result.innerHTML = "Result: " + mess;
}
