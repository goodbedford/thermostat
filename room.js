// room.js
function Room(controlPanel, homeState) {
  var roomState = homeState.getRoom(homeState.getCurrentRoomId());
  var tControl = tempControlFactory(controlPanel, homeState);
  var curtains = Button({on:"open", off: "closed"}, "curtains", roomState);
  var lights = Button({on:"on", off: "off"}, "lights", roomState);
  var $room = $("<div>").addClass("room");
  var $roomSection = $("<div>").addClass("room__section");
  var $roomControls = $("<div>").addClass("room__controls");

  $room[0].dataset["roomName"] = roomState.getRoomName();
  $room[0].dataset["roomId"] = roomState.getRoomId();
  $roomSection.append(tControl);
  $roomControls.append(curtains, lights);
  $room.append($roomSection, $roomControls);
  return $room;
}
