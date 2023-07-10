"use strict";

//making buttons responsive(so that if they are clicked,one JS alert is shown "i am clicked")
var no_of_drum_buttons = document.querySelectorAll(".drum").length;

for (var i = 0; i < no_of_drum_buttons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    alert("i am clicked!!");
  });
}