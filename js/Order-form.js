
function myFunctionSum(){
alert("Page is loaded");    
var prod1 = document.getElementById("demo1").value;
var prod2 = document.getElementById("demo2").value;
var prod3 = document.getElementById("demo3").value;
var prod4 = document.getElementById("demo4").value;
var total = parseFloat(prod1) + parseFloat(prod2) + parseFloat(prod3) + parseFloat(prod4);

document.getElementById("demo5").value = total;
}