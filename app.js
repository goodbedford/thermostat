// app.js

(function IIFE() {
  "use strict";

  var homeState = homeStateModule();
  var roomList = ["living room", "office"];

  roomList.forEach(function(roomName) {
    homeState.addRoom(roomName);
  });

  homeState.render();
})();
