 //////////////Varibles/////////////////////////////
var generateBtn = document.querySelector("#startquiz");
var test;
var timer = document.getElementById("time-limit");



 //////////////Arrays?//////////////////////////////

 //////////////Funtions/////////////////////////////

function timerfun(){
   var startTime= 100;
   var interval= setInterval(function(){
      startTime--;
      timer.textContent = " Time:  "  +startTime;
      if (startTime===0){
         // clearInterval(startTime);
         
      }
   }, 1000)
}


function openBox(){
 if (confirm("its working") ){
    var test = true
    console.log(test)
 } 
}


 //////////////Logic/////////////////////////////


////Add some clics//////
generateBtn.addEventListener("click", timerfun);