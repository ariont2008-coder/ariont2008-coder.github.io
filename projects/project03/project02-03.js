/*
   JavaScript 7th Edition
   Chapter 2
   Hands-On Project 2-3
   Author: Arion Thomas
   Date: 10/15/2026
*/

document.getElementById("square").onmouseover = function() {
   document.getElementById("feedback").innerHTML =
      "You're hovering over the square";
};

document.getElementById("square").onmouseout = function() {
   document.getElementById("feedback").innerHTML = "";
};

document.getElementById("triangle").onmouseover = function() {
   document.getElementById("feedback").innerHTML =
      "You're hovering over the triangle";
};

document.getElementById("triangle").onmouseout = function() {
   document.getElementById("feedback").innerHTML = "";
};

document.getElementById("circle").onmouseover = function() {
   document.getElementById("feedback").innerHTML =
      "You're hovering over the circle";
};

document.getElementById("circle").onmouseout = function() {
   document.getElementById("feedback").innerHTML = "";
};
