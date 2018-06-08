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

function getInput() {
    return emailInput.value.replace(/^\s+|\s+$/gm,'');
}

function createList() {
    if (!emailList.hasChildNodes()) {
        for (let i = 0; i < postfixList.length; i++) {
            let li = document.createElement("li");
            emailList.appendChild(li);
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
        }
    }
}