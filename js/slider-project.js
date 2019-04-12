function myFunction() {
          var age, concert;
          age = document.getElementById("age").value;
          concert = (age > 20 && age < 50 ) ? "Go to registration": "Sorry, you can`t make registration";
          document.getElementById("demo").innerHTML = concert + ", have a nice day.";
        }
        
        
        console.log(a > 20 && a < 50);
        // expected output: false
        
        console.log(a > 0 || b > 0);
        // expected output: true
        
        console.log(!(a > 0 || b > 0));
        // expected output: false



        function populateDays() {
            var myBirthday, today, bday, diff, days;
            myBirthday = [8, 1]; // 8th of January
            today = new Date();
            bday = new Date(today.getFullYear(), myBirthday[1] - 1, myBirthday[0]);
            if (today.getTime() > bday.getTime()) {
                bday.setFullYear(bday.getFullYear() + 1);
            }
            diff = bday.getTime() - today.getTime();
            days = Math.floor(diff / (1000 * 60 * 60 * 24));
            document.getElementById("elvBirth").value = days;
        }