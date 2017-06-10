$(document).foundation()

/*
var date = new Date();
console.log(date);
console.log(date.getDay() );


if (date.getDay() == 4){
console.log("hurray, it's thursday!"); } else {
console.log("I have no clue what day it is.");
}
*/
/*
if (date.getDay() == 3){

document.getElementById("output").innerHTML="hello";
document.getElementById("output").style.color = "red";
}
*/
console.log("Date Time Script");

var  date = new Date();  //this creates a snapshot of the current time and day using the date object and stores it in a variable called date

var day = date.getDay(); // getDay() pulls the day out of the date object and stores it in a new variable called day. Days are recalled as integers 0,1,...6  - starting on Sunday

// Use comments to disable pieces of code
/* this is a way to comment a bunch of code */

switch(day) // a javascript switch statement evaluates the day and creates a message based on the day
{
case 0:
  document.getElementById("output").innerHTML = "today is Sunday";
  break;
case 1:
  document.getElementById("output").innerHTML = "Heute ist Montag";
  document.getElementById("output").style.color = "red";

  break;
case 3:
 document.getElementById("output").innerHTML = "<img src='http://hkjskfjhskjdhf' alt=''>";


  break;

  case 6:
 document.getElementById("output").innerHTML = "今天是周六";
  break;

  default:
 document.getElementById("output").innerHTML = "Not sure what day it is actually";
}

//Make something cool!
