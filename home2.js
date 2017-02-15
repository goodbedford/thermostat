
function home(homeState) {

  var rooms = [];
  var $home = $("<div>").addClass("home home--md");
  var $homeHeader = $("<div>").addClass("home__header");
  var $homeSection = $("<div>").addClass("home__section");
  var $roomsPanel = $("<div>").addClass("home__panel-rooms");
  var $controlPanel = $("<div>").addClass("home__panel-controls js-home-controls");
  var $date = $("<span>").html((new Date()).toDateString());
  init();

  function init() {
    var currentRoomId = homeState.getCurrentRoomId();
    $roomsPanel.append( $("<div>").addClass("home__panel-header").html("Rooms"))
    $homeHeader.append("Home Automation by Goodbedford LLC", $date);
    homeState.getRooms().forEach(function(roomState, index) {

      var panelItem = panelItemMaker(homeState, roomState);
      if(roomState.getRoomId() === currentRoomId) {
        roomState.setActive(true);
        panelItem.addClass("home__panel-item--active");
      }
      $roomsPanel.append(panelItem);
    });

    render(currentRoomId);
    // homeState.render();
    $homeSection.append($roomsPanel, $controlPanel);
    $home.append($homeHeader, $homeSection);
  }

  function panelItemMaker(homeState, roomState) {
    var roomId = roomState.getRoomId();
    var roomName = roomState.getRoomName();
    var roomTemp = roomState.getRoomTemp();
    var $item = $("<div>").addClass("home__panel-item");
    var $name = $("<span>").html(roomName).addClass("home__text js-home-name");
    var $tempText = $("<span>").addClass("home__text js-home-temp");
    $item[0].dataset["roomName"] = roomName;
    $item[0].dataset["roomId"] = roomId;
    $tempText.html(roomTemp);
    $item.append($name, $tempText);
    $item.on("click", function(event) {
      $(this).addClass("home__panel-item--active");
      $item.siblings(".home__panel-item").removeClass("home__panel-item--active");
      homeState.setCurrentRoomId(roomId);
      homeState.render();
    });
    return $item;
  }
  function render(roomId) {
    var roomState = homeState.getRoom(roomId);
    var room = Room($controlPanel, homeState);
    $controlPanel.html(room);
  }

  return $home;
}
