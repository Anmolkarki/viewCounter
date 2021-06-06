 function viewCounter() {
     var currentCounter = document.getElementById("counter");
     var count = parseInt(currentCounter.innerHTML);
     count++;
     currentCounter.innerHTML = count;
 }