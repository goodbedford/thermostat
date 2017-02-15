
// btnText is an object with on or off prop
function Button(btnText, groupTitle, roomState) {
  var $on;
  var $off;
  var $group;
  var $btnSection;
  var $btnGroupTitle;

  $btnSection = $("<div>").addClass("button__section");
  $btnGroupTitle = $("<div>").addClass("button__group-title");
  $btnGroupTitle.html(groupTitle);
  $btnSection.append($btnGroupTitle);
  $group = $("<div>");
  $group.addClass("button__group");
  $on = makeBtn(btnText.on,groupTitle);
  $off = makeBtn(btnText.off,groupTitle);
  addActive();
  $group.append($on, $off);
  $btnSection.append($group);

  function makeBtn(text, groupTitle) {
    var $button = $("<button>");
    $button.html(text).addClass("button button--default");
    $button.on("click", function buttonHandler() {
      roomState.toggleDevice(groupTitle);

      addActive();
    });
    return $button;
  }
  function addActive() {
    if (roomState.getDevice(groupTitle)) {
      $on.addClass("button--active");
      $off.removeClass("button--active");
    }
    else {
      $off.addClass("button--active");
      $on.removeClass("button--active");

    }
  }

  return $btnSection;
}


// var curtains = Button({on:"open", off: "closed"}, "row", "curtains");
// var lights = Button({on:"on", off: "off"}, "row", "lights");

// $("body").prepend(lights);
// $("body").prepend(curtains);
