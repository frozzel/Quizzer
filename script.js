 //////////////Varibles/////////////////////////////
var generateBtn = document.querySelector("#startquiz");
var timer = document.getElementById("time-limit");
var StartQcon = document.querySelector('.StartQuiz')
var dispTime = document.querySelector('#score')
var startTime = 100;
 //////////////Object//////////////////////////////
/////// https://www.w3schools.com/js/js_objects.asp //////////
 
var questObject = [
   {
      quest: 'Commonly used data types DO Not Include:',
      opt: ['1. Strings', '2. Booleans', '3. Alerts', '4. Numbers'],
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

 



 //////////////Funtions/////////////////////////////
function StartQuiz(){
   timerfun()
   StartQcon.children[1].textContent= "";
   StartQcon.children[2].textContent= "";
   StartQcon.children[0].textContent= "Commonly used data types DO Not Include:";
}






 //////////////Logic/////////////////////////////
 
 
 function timerfun(){
   var interval= setInterval(function(){
      startTime--;
      timer.textContent =   +startTime;
      if (startTime===0){
         clearInterval(startTime);
         
      }
   }, 1000)
}


////Add some clics//////
generateBtn.addEventListener("click", StartQuiz);