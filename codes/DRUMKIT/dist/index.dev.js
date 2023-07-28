"use strict";

/*making buttons responsive(so that if they are clicked,one JS alert is shown "i am clicked") [done JUST FOR PRACTICE]
 var no_of_drum_buttons = document.querySelectorAll(".drum").length;

 for(var i=0;i< no_of_drum_buttons  ; i++) {
     document.querySelectorAll(".drum")[i].addEventListener("click",function() {
         alert("i am clicked!!"); });
 }*/
var no_of_drum_buttons = document.querySelectorAll(".drum").length;

for (var i = 0; i < no_of_drum_buttons; i++) {
  //handles event of "mouseclick"
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    /*
    console.log(this.innerHTML);//In an event, 'this' refers to the element that received the event.
    */
    makeSound(this.innerHTML);
  }); //handles event of "key strokes"

  document.addEventListener("keydown", function (e) //here event listener added to the entire document instead of some specified element so that in the entire doc u start pressing any proper key that matches the switch statement, the function will be invoked.
  {
    makeSound(e.key);
  });
}

function makeSound(k) {
  switch (k) {
    case "w":
      var crash = new Audio("sounds/crash.mp3"); //audio constructor of HTML is invoked.

      crash.play();
      break;

    case "a":
      var kick_bass = new Audio("sounds/kick-bass.mp3");
      kick_bass.play();
      break;

    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      break;
  }
} // document.addEventListener("keydown", function(e){
//     alert("i am pressed");
//     console.log(e.key);
// });
// function play_sound(){
//    var audio=new Audio("sounds/tom-1.mp3");    
//    audio.play(); 
// }