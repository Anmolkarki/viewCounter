 window.onload = function() {
     var greeting = document.querySelector("h1.greeting");
     var date = new Date();
     var time = date.getHours();
     if (time < 10) {
         greeting.innerHTML = "Good Morning";
     }
     if (time >= 10 && time <= 15) {
         greeting.innerHTML = "Good AfterNoon";
     } else {
         greeting.innerHTML = "Good Night";
     }
 }