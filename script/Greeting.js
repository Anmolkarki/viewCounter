 window.onload = function() {
     var greeting = document.querySelector("h1.greeting");
     var date = new Date();
     var time = date.getHours();
     if (time < 12) {
         greeting.innerHTML = "Good Morning";
     }
     if (time >= 12 && time <= 18) {
         greeting.innerHTML = "Good AfterNoon";
     } else {
         greeting.innerHTML = "Good Night";
     }
 }