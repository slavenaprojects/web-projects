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