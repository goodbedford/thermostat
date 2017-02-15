// app.js

(function IIFE() {
  "use strict";

  var homeState = homeStateModule();
  var roomList = ["living room", "office"];

  roomList.forEach(function(roomName) {
    homeState.addRoom(roomName);
  });

  homeState.render();
  var me;
  $.ajax({
    method: "GET",
    url:"./homeJson.js",
  })
  .done(function(resp) {
      me = resp;
      console.log(me);
  })
  .fail(function( jqXHR, textStatus) {
    console.log(jqXHR, textStatus);
  })
})();
