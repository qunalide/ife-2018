/* 在加减乘除中进行修改 1.判断填入信息错误时console输出错误信息 2.除法时除数不为0 */
let add = document.getElementById("add-btn");
let minus = document.getElementById("minus-btn");
let times = document.getElementById("times-btn");
let divide = document.getElementById("divide-btn");
let rs = document.getElementById("result");
add.onclick = function(){
    let f = document.getElementById("first-number").value;
    let s = document.getElementById("second-number").value;
    if (typeof(f) && typeof(s) != "string"){
        console.log("输入的数值不正确 请检查输入内容");
    }
    else {
        rs.innerHTML = "运算结果"+ "<br>" + (parseInt(f) + parseInt(s));
    }
}

minus.onclick = function(){
    let f = document.getElementById("first-number").value;
    let s = document.getElementById("second-number").value;
    if (typeof(f) && typeof(s) != "string"){
        console.log("输入的数值不正确 请检查输入内容");
    }
    else {
        rs.innerHTML = "运算结果"+ "<br>" + (parseInt(f) - parseInt(s));
    }
}

times.onclick = function(){
    let f = document.getElementById("first-number").value;
    let s = document.getElementById("second-number").value;
    if (typeof(f) && typeof(s) != "string"){
        console.log("输入的数值不正确 请检查输入内容");
    }
    else {
        rs.innerHTML = "运算结果"+ "<br>" + (parseInt(f) * parseInt(s));
    }
}

divide.onclick = function(){
    let f = document.getElementById("first-number").value;
    let s = document.getElementById("second-number").value;
    if (typeof(f) && typeof(s) != "string" || s == 0){
        console.log("输入的数值不正确 请检查输入内容");
    }
    else {
        rs.innerHTML = "运算结果"+ "<br>" + (parseInt(f) / parseInt(s));
    }
}

/* 将十进制数字转化为二进制的函数进行修改 1.转化显示后的二进制数为bin-bit中输入的数字宽度 
2.如果bin-bit小于转化后的二进制本身位数，则使用原本的位数，如dec-number为5，bin-bit为2，依然输出101，但同时在console中报个错 */
let trans = document.getElementById("trans-btn");
let html = document.getElementById("result2");

trans.onclick = function(){
    let dec = document.getElementById("dec-number").value;
    let bin = document.getElementById("bin-bit").value;
    dec2bin(dec,bin);
}


function f(val, count){
    let str = "";
    for (let i = 0; i < count; i++){
        str+=val;
    }
    return str;
}

function dec2bin(dec, bin){
    let rs = "";
    let l = parseInt(bin);
    n = parseInt(dec);
    if (typeof(n) == "number" && n >= 0){
        while (n != 0){
            rs = (n%2) + rs;
            n = Math.floor(n/2);
        }
        if (rs.length == 0){
            if (l > rs.length){
                let num = l - rs.length;
                let bit = f(0, num);
                html.innerHTML = "运算结果" + "<br>" + "二进制为 " + bit;
            }
            else {
                console.log("bin-bit输入的值有误 请检查后重试")
                html.innerHTML = "运算结果" + "<br>" + "二进制为 " + "0";
            }
        }
        else {
            if (l > rs.length){
                let num = l - rs.length;
                let bit = f(0, num);
                rs = bit + rs;
                html.innerHTML = "运算结果" + "<br>" + "二进制为 " + rs;
            }
            else {
                console.log("bin-bit输入的值有误 请检查后重试")
                html.innerHTML = "运算结果" + "<br>" + "二进制为 " + rs;
            }
            html.innerHTML = "运算结果" + "<br>" + "二进制为 " + rs;
        }
    }
    else {
        html.innerHTML = "输入的数值不正确 请检查输入内容";
    }
}

/* 从1到100，以此在console输出各数字，但是，当数字为3的倍数或者含有3的时候，输出“PA” */
function num3(){
    for (let i=1; i<=100; i++){
        if (i%3 == 0){
            console.log(i+" PA!!!");
            continue;
        }
        console.log(i);
    }
}

num3();

/* 练习使用循环实现一个九九乘法表 */

function tb(){
    for (let i=1; i<10; i++){
        for (let j=1; j<10; j++){
            if (i>=j){
                console.log(i+'*'+j+'='+i*j);
            }
        }
    }
}

tb();

/* 当用户访问页面的时候，根据当前时间，在页面中输出不同的问候语 */

function hw(){
    let t = new Date();
    let h = t.getHours();
    if (h>6 && h<12){
        h = 1;
    }
    else if (h>=12 && h<18){
        h = 2;
    }
    else if (h>=18 && h<=6){
        h = 3;
    }
    switch(h){
    case 1:
        console.log("早上好 现在是" + t);
        break;
    case 2:
        console.log("下午好 现在是" + t);
        break;
    case 3:
        console.log("晚上好 现在是" + t);
        break;
    }
}

hw();