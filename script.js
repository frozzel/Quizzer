 //////////////Varibles/////////////////////////////
var generateBtn = document.querySelector("#startquiz");
var timer = document.getElementById("time-limit");
var StartQcon = document.querySelector('.StartQuiz')
var dispTime = document.querySelector('#score')
var quest = document.getElementById('quest')
var opt = document.getElementById('qopt')
var ansTrue = document.getElementById('ansTrue')
var questOrder = 0;
var optOrder =0;
var startTime = 100;


 //////////////Object//////////////////////////////
/////// https://www.w3schools.com/js/js_objects.asp //////////
 
var questObject = [
   {
      quest: 'Commonly used data types DO Not Include:',
      opt: ['Strings', 'Booleans', 'Alerts', 'Numbers'],
      ans: 'Alerts',
   },
   {
      quest: 'The condition in an if / else statement is enclosed with ________.',
      opt: ['Quotes', 'Curly Brackets', 'Parenthesis', 'Square Brackets'],
      ans: 'Parenthesis',
   },
   {
      quest: 'Arrays in JavaScript can be used to store_________.',
      opt: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
      ans: 'all of the above',
   },
   {
      quest: 'String values must be enclosed within________ when being assigned to variables.',
      opt: ['commas', 'curly brackets', 'quotes', 'parenthesis'],
      ans: 'quotes',
   },
   {
      quest: 'A very useful tool used during development and debugging for printing content to the debugger is:',
      opt: ['JavaScript', 'terminal/bash', 'for loops', 'console. log'],
      ans: 'console. log',
   }
]

 



 //////////////Funtions/////////////////////////////////////////////
 /// https://www.dofactory.com/javascript/function-objects ////////

function StartQuiz(){
   var startq1 = document.getElementById('firstpg')
   startq1.setAttribute('class', 'hidden');
   quest.setAttribute('class', 'StartQuiz')
   ////////need function to call quest//////
   timerfun()
   crtquest()
}
///////////// https://www.w3schools.com/Js/js_object_display.asp /////////
//////////// https://www.w3schools.com/jsref/jsref_forEach.asp ////////////
function crtquest(){
   var firstquest = questObject[questOrder];
   var qh1= document.getElementById('qh1');
   qh1.textContent = firstquest.quest;
   console.log('Should display first quest')
   opt.innerHTML = '';
   firstquest.opt.forEach(function(qopt,i){
      var optSector =document.createElement("button");
      optSector.setAttribute("class", "qopt");
      optSector.setAttribute("value", opt);
      optSector.textContent = i + 1 + "." + qopt;
      optSector.onclick=questTouch;
      opt.appendChild(optSector)
   })
   /////////// ***** TO DO: need more research not displaying correctly**** /////////
   /////////// ***** Displaying in button just not on right side fix if time allows latter////////
   ///////////// ^^^^^^^^^^^^^Done^^^^^^^^????????///////////

}
function stopQuiz(){
   qh1.textContent = ('')
   opt.innerHTML = ('')
   ansTrue.setAttribute('class', 'hidden')
   var stopit = document.getElementById('stopit')
   stopit.setAttribute('class', 'StartQuiz')
}
   




 //////////////Logic/////////////////////////////
 
 function questTouch(){
   if (this.value !== questObject[questOrder].ans){
      startTime -= 10;
      if (startTime <0){
         startTime = 0;
      }
      timer.textContent = startTime;
      ansTrue.textContent= "Wrong!";

   } 
   (this.value === questObject[questOrder].ans)
      ansTrue.textContent = "Correct";
   

   ansTrue.setAttribute('class', 'ansShow');
   questOrder++;
   if (questOrder=== questObject.length){
      stopQuiz();

   } else {
      crtquest()
   }
 }
 
 
 function timerfun(){
   var interval= setInterval(function(){
      startTime--;
      timer.textContent = +startTime;
      if (startTime<=0){
         clearInterval(interval);
         stopQuiz()
         ///// *****TO DO add funtion to stop quiz above *****//////
         //////// Done^^^^^^^///////////////////////////
      }
   }, 1000)
}


////Add some clics//////
generateBtn.addEventListener("click", StartQuiz);