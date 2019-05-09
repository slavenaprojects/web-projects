//task 1
function myWay(date) {
  	console.log(date instanceof Date && !isNaN(date.valueOf())) 
		if(date instanceof Date && !isNaN(date.valueOf())) {
		return "Good!";
		} else { 
		return "Sorry!";}
} 

//task 2
var d = new Date();
var months = ["January","February","March","April","May","June","July","August","September",
"October","November","December"];
document.getElementById("demo").innerHTML = months[d.getMonth()];

// task 3
var d = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.getElementById("demo").innerHTML = days[d.getDay()];



// task 4
var myBirthday, today, bday, diff, days;
myBirthday = [8,1]; // 8th of January
today = new Date();
bday = new Date(today.getFullYear(),myBirthday[1]-1,myBirthday[0]);
if( today.getTime() > bday.getTime()) {
    bday.setFullYear(bday.getFullYear()+1);
}
diff = bday.getTime()-today.getTime();
days = Math.floor(diff/(1000*60*60*24));
alert(days+" days until Elvis's birthday!");