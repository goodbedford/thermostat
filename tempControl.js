// tempControl.js
function tempControlFactory($controlPanel, homeState) {
  var roomState = homeState.getRoom(homeState.getCurrentRoomId());
  var $tempControl  = $("<div>").addClass("temp temp--center");
  var $tempSection = $("<div>").addClass("temp__section temp__section--bg-black");
  var $tempText = $("<span>").addClass("temp__text").html(roomState.getRoomTemp());
  var $tempBlock = $("<div>").addClass("temp__section-flex temp__section-flex--temp-control");
  var $btnGroup = $("<div>").addClass("button__group button__group--column");
  var $up = makeBtn("+", $tempText);
  var $down = makeBtn("-", $tempText);

  $btnGroup.append($up, $down);
  $tempSection.append($tempText);
  $tempBlock.append($tempSection, $btnGroup);
  $tempControl.append($tempBlock);

  return $tempControl;

  function makeBtn(text) {
    var $button = $("<button>").addClass("button button--temp-control");
    var $span = $("<span>").addClass("button__icon");
    $button.html($span.html(text));
    if(text === "+") {
      $button.addClass("js-temp-plus-btn");
      $button.find($span).addClass("button__icon--plus");
      $controlPanel.on("click", ".js-temp-plus-btn", function plusButtonHandler() {
        roomState.increaseRoomTemp(1);
        homeState.render();
      });
    }
    else if( text === "-"){
      $button.addClass("js-temp-minus-btn");
      $button.find($span).addClass("button__icon--minus");
      $controlPanel.on("click", ".js-temp-minus-btn", function minusButtonHandler() {
        roomState.decreaseRoomTemp(1);
        homeState.render();
      });
    }

    return $button;
  }
}
