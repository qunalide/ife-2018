let postfixList = ['163.com', 'gmail.com', '126.com', 'qq.com', '263.net'];
let emailInput = document.getElementById("email-input");
let emailList = document.getElementById("email-sug-wrapper");
let emailLi = document.getElementsByTagName("li");

emailInput.oninput = function() {
    let text = getInput();
    createList();
    changeList(text);
    switchList(text);
    emailClick();
}

let index = 0;

emailInput.addEventListener("keyup", function(key) {
    if (key.keyCode == 38 || key.keyCode == 40 || key.keyCode == 13 || key.keyCode == 27) {
        let l = emailLi.length;
        let last = l - 1;
        if (key.keyCode == 13) {  // 回车选中当前
            let text = emailLi[index].textContent;
            emailInput.value = text;
            emailList.style.display = "none";
        }
        if (key.keyCode == 27) {  // ESC全选
            emailInput.select();
            emailList.style.display = "none";
        }

        emailLi[index].classList.remove("active");
        if (key.keyCode == 38) {  // 向上
            index = index === 0 ? last : index - 1;
        }
        else {  // 向下
            index = index === last ? 0 : index + 1;
        }
        emailLi[index].classList.add("active");
    }
})

function getInput() {
    return emailInput.value.replace(/^\s+|\s+$/gm,'');
}

function createList() {
    if (!emailList.hasChildNodes()) {
        for (let i = 0; i < postfixList.length; i++) {
            let li = document.createElement("li");
            emailList.appendChild(li);
            // 添加默认焦点
            if (i == 0) {
                emailLi[i].classList.add("active");
            }
        }
    }
}

function changeList(text) {
    let tips =[];
    // 判定@重复
    let at = text.indexOf("@");
    if (at >= 0) {
        text = text.slice(0,at);
    }
    for (let i = 0; i < postfixList.length; i++) {
        let t = ""
        t = text + "@" + postfixList[i];
        tips.push(t);
    }
    for (let i = 0; i < tips.length; i++) {
        let child = emailList.children[i];
        child.textContent = tips[i]
    }
}

function switchList(text) {
    if (text === "") {
        emailList.style.display = "none";
    } else {
        emailList.style.display = "block";
    }
}

function emailClick() {
    for (let i = 0; i < emailLi.length; i++) {
        emailLi[i].onclick = function() {
            let text = emailLi[i].textContent;
            emailInput.value = text;
            emailList.style.display = "none";
            emailInput.focus();
        }
    }
}

window.onload = function() {
    emailInput.focus();
}
