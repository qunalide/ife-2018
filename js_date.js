let clock = document.getElementById("clock");

window.onload = function() {
    setInterval(function() {
        let date = new Date();
        clock.innerHTML = animate(date);
    }, 100)
}

// 封装一个函数，来根据某个日期返回这一天是星期几
function getWeek(date) {
    let week = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
    let wk = week[date.getDay()];
    return wk
}

// 封装一个函数，把日期时间按照要求的格式进行包装,把月、日、小时等出现个位数的情况前面补充0，补充为两位
function getTime(date) {
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    if (h<10) {
        h = changeTime(h);
    }
    if (m<10) {
        m = changeTime(m);
    }
    if (s<10) {
        s = changeTime(s);
    }
    let year = date.getFullYear();
    let mon = date.getMonth() + 1;
    let day = date.getDate();
    let x = date>12 ? "am" : "pm" 
    return year + "-" + mon + "-" + day + " " + h + ":" + m + ":" + s + " " + x
}

function changeTime(time){
    let ss = ["00","01","02","03","04","05","06","07","08","09"];
    return ss[time]
}

function animate(date) {
    return getTime(date) + " " + getWeek(date);
}