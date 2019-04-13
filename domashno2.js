




var numbers1 = [45, "4", 9, 16, "25"];
var numbers2 = numbers1.map(myFunction);

document.getElementById("demo").innerHTML = numbers2;

function myFunction(value, array) {
  return typeof value;
  console.log(typeof value)
}


var songs = ["One", "Two", "Six", "Seven"];
var nar = 40;
document.getElementById("karma").innerHTML = myWork(songs);
document.getElementById("opit").innerHTML = myWork(nar);

function myWork(array) {
 if 
  (Array.isArray(array)) {
      return "Hello, Slavena!";
    }
}


var slavi = ["Gumza", "Godji", "Trifonov"];
            console.log(slavi.length)
            alert("The length it`s:" + slavi.length)


var person = ["Kevin", "Nik", "police"]
var kamion = [person + " " + "there are hansdome"]
console.log(kamion.length)