 //////////////Varibles/////////////////////////////
var generateBtn = document.querySelector("#startquiz");
var timer = document.getElementById("time-limit");
var StartQcon = document.querySelector('.StartQuiz')


 //////////////Arrays?//////////////////////////////
StartQcon.children[0].textContent= "Test";


 //////////////Funtions/////////////////////////////







 //////////////Logic/////////////////////////////
 
 
 function timerfun(){
   var startTime= 100;
   var interval= setInterval(function(){
      startTime--;
      timer.textContent = " Time:  "  +startTime;
      if (startTime===0){
         clearInterval(startTime);
         
      }
   }, 1000)
}


////Add some clics//////
generateBtn.addEventListener("click", timerfun);