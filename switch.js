"use strict";

var switchComponent = (function IIFE(window) {
  var ball = document.querySelectorAll(".js-switch-ball");
  var switchComponent = document.querySelectorAll(".js-switch-component")


  for(let i = 0; i < ball.length; i++) {
    ball[i].addEventListener("click", ballHandler.bind(ball[i], i));
  }

  function ballHandler(event) {
    if (this.classList.contains("switch__ball--on")) {
      this.parentElement.classList.remove("switch--on");
      this.classList.remove("switch__ball--on");
      this.classList.add("switch__ball--off");
    } else {
      this.parentElement.classList.add("switch--on");
      this.classList.remove("switch__ball--off");
      this.classList.add("switch__ball--on");
    }
  }

  function changeOn(ele) {
    ele.classList.remove("switch__ball--on");
    ele.classList.add("switch__ball--off");
  }
})(window);
