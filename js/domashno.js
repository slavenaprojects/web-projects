function myConvect() {
   
    document.getElementById("field4").value =
        document.getElementById("field3").value * 1.95583;
}

function myFunction() {
    document.getElementById("field2").value =
        document.getElementById("field1").value * 0.511292;
}

function myLimits() {
    if
      (document.getElementById("field5").value < 18) 
      alert("You haven`t enough years")
    else
     alert("You can go to play");
    }


    document.getElementById("today").innerHTML = new Date();




    






function myFunction(){
var prod1 = document.getElementById("demo1").value;
var prod2 = document.getElementById("demo2").value;
var prod3 = document.getElementById("demo3").value;
var prod4 = document.getElementById("demo4").value;
var total = parseFloat(prod1) + parseFloat(prod2) + parseFloat(prod3) + parseFloat(prod4);

document.getElementById("demo5").value = total;
}