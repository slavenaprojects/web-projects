var king = [
    {title: "My Way",songs: ["My way", "Always on my mind", "Feel", "Seven spanish angels"]},
    {title: "Love me tender", songs: ["Love me tender", "Polk Salad Ani", "It`s a mans world", "Let it be me"]},
    {title: "If tomorrow never comes",songs: ["If tomorrow never comes", "Leave rigth now", "Feeling good", "Stuck on you"]},
    {title: "Trouble",songs: ["Trouble", "Achy breacky hearth", "When I was your man", "You belong to me"]},
    {title: "Upp all night",songs: ["Upp all night", "Endless love", "Love me", "Try to get you"]},
]

var gold = [
    {title: "My Way",price: ["50$"]},
    {title: "Love me tender", price: ["45$"]},
    {title: "If tomorrow never comes",price: ["72$"]},
    {title: "Trouble",price: ["300$"]},
    {title: "Upp all night",price: ["20$"]},
]


function loadTrack(elvAlbum) {
        var x = document.getElementById("elvsongs");
            x.options.length = 1;


    king.forEach(function(val){
        if (val.title == elvAlbum) {
            val.songs.forEach(function(song){
                var option = document.createElement("option");
                option.text = song;
                x.add(option);
            });
        }
    });

} 



function loadPrice(elvAlbum) {
          var y = document.getElementById("elvprice");
              y.options.length = 1;
   gold.forEach(function(val){
       if (val.title == elvAlbum) {
           val.price.forEach(function(prices){
               var option = document.createElement("option");
               option.text = prices;
               y.add(option);
           });
       }
   });

} 


function myFunction() {
    var age, concert;
    age = document.getElementById("age").value;
    concert = (age > 20 && age < 50 ) ? "Go to registration": "Sorry, you can`t make registration";
    document.getElementById("actor").innerHTML = concert + ", have a nice day.";
  }
  
  
  console.log(a > 20 && a < 50);
  // expected output: false
  
  console.log(a > 0 || b > 0);
  // expected output: true
  
  console.log(!(a > 0 || b > 0));
  // expected output: false