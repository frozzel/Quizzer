 //////////////Varibles/////////////////////////////
var generateBtn = document.querySelector("#startquiz");
var timer = document.getElementById("time-limit");
var StartQcon = document.querySelector('.StartQuiz')
var dispTime = document.querySelector('#score')
var quest = document.getElementById('quest')
var opt = document.getElementById('qopt')
var questOrder = 0;
var optOrder =0;
var startTime = 100;


 //////////////Object//////////////////////////////
/////// https://www.w3schools.com/js/js_objects.asp //////////
 
var questObject = [
   {
      quest: 'Commonly used data types DO Not Include:',
      opt: ['Strings', 'Booleans', 'Alerts', 'Numbers'],
      ans: '3. Alerts',
   },
   {
      quest: 'The condition in an if / else statement is enclosed with ________.',
      opt: ['1. Quotes', '2. Curly Brackets', '3. Parenthesis', '4. Square Brackets'],
      ans: '3. Parenthesis',
   },
   {
      quest: 'Arrays in JavaScript can be used to store_________.',
      opt: ['1. numbers and strings', '2. other arrays', '3. booleans', '4. all of the above'],
      ans: '4. all of the above',
   },
   {
      quest: 'String values must be enclosed within________ when being assigned to variables.',
      opt: ['1. commas', '2. curly brackets', '3. quotes', '4. parenthesis'],
      ans: '3. quotes',
   },
   {
      quest: 'A very useful tool used during development and debugging for printing content to the debugger is:',
      opt: ['1. JavaScript', '2. terminal/bash', '3. for loops', '4. console. log'],
      ans: '4. console. log',
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

}




 //////////////Logic/////////////////////////////
 
 function questTouch(){

 }
 
 function timerfun(){
   var interval= setInterval(function(){
      startTime--;
      timer.textContent =   +startTime;
      if (startTime<=0){
         clearInterval(startTime);
         ///// *****TO DO add funtion to stop quiz above *****//////
      }
   }, 1000)
}


////Add some clics//////
generateBtn.addEventListener("click", StartQuiz);