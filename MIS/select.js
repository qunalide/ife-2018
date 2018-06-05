let regionSelect = document.getElementById("region-select");
let productSelect = document.getElementById("product-select");

regionSelect.onchange = function() {
    let region = document.getElementById("region-select").value;
    let product = document.getElementById("product-select").value;
    getData(region,product);
}

productSelect.onchange = function() {
    let region = document.getElementById("region-select").value;
    let product = document.getElementById("product-select").value;
    getData(region,product);
}

function getData(region,product) {
    let sourceData = [{
        product: "手机",
        region: "华东",
        sale: [120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270]
    }, {
        product: "手机",
        region: "华北",
        sale: [80, 70, 90, 110, 130, 145, 150, 160, 170, 185, 190, 200]
    }, {
        product: "手机",
        region: "华南",
        sale: [220, 200, 240, 250, 260, 270, 280, 295, 310, 335, 355, 380]
    }, {
        product: "笔记本",
        region: "华东",
        sale: [50, 60, 80, 110, 30, 20, 70, 30, 420, 30, 20, 20]
    }, {
        product: "笔记本",
        region: "华北",
        sale: [30, 35, 50, 70, 20, 15, 30, 50, 710, 130, 20, 20]
    }, {
        product: "笔记本",
        region: "华南",
        sale: [80, 120, 130, 140, 70, 75, 120, 90, 550, 120, 110, 100]
    }, {
        product: "智能音箱",
        region: "华东",
        sale: [10, 30, 4, 5, 6, 5, 4, 5, 6, 5, 5, 25]
    }, {
        product: "智能音箱",
        region: "华北",
        sale: [15, 50, 15, 15, 12, 11, 11, 12, 12, 14, 12, 40]
    }, {
        product: "智能音箱",
        region: "华南",
        sale: [10, 40, 10, 6, 5, 6, 8, 6, 6, 6, 7, 26]
    }]

    let newData = [];
    
    if (product == "产品列表") {
        for (let i = 0; i < sourceData.length; i++) {
            if (sourceData[i].region == region) {
                newData.push(sourceData[i]);
            }
        }
        changeData(newData);
    }
    else {
        for (let i = 0; i < sourceData.length; i++) {
            if (sourceData[i].product == product && sourceData[i].region == region) {
                newData.push(sourceData[i]);
            }
        }
        changeData(newData);
    }
    
}

function changeData(data) {
    let newData = data;
    let table = document.getElementById("table-wrapper");
    let a = "";

    for (let i = 0; i < newData.length; i++) {
        a = a + "<tr><td>" + newData[i].product + "</td>" + "<td>" + newData[i].region + "</td>" + "<td>" + newData[i].sale[0] 
        + "</td><td>" + newData[i].sale[1] + "</td><td>" + newData[i].sale[2] + "</td><td>" + newData[i].sale[3] 
        + "</td><td>" + newData[i].sale[4] + "</td><td>" + newData[i].sale[5] + "</td><td>" + newData[i].sale[6] 
        + "</td><td>" + newData[i].sale[7] + "</td><td>" + newData[i].sale[8] + "</td><td>" + newData[i].sale[9] 
        + "</td><td>"+ newData[i].sale[10] + "</td><td>"+ newData[i].sale[11] + "</td></tr>";
    }
    table.innerHTML = 
    "<span>产品表格</span>" + "<table border='1'><tbody><tr><td>产品</td><td>产地</td><td>一月</td><td>二月</td><td>三月</td><td>四月</td><td>五月</td><td>六月</td><td>七月</td><td>八月</td><td>九月</td><td>十月</td><td>十一月</td><td>十二月</td></tr>" 
    + a + "</tbody></table>";
}