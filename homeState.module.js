//homeState.js

// var Home = homeStateModule();
// Home.addRoom("living room");

function homeStateModule() {
  var rooms = [];
  var roomId = 1;
  var currentRoomId = 1;
  var publicApi = {
    addRoom: addRoom,
    getRoom: getRoom,
    getRooms: getRooms,
    getNewestRoomState: getNewestRoomState,
    getCurrentRoomId: getCurrentRoomId,
    setCurrentRoomId: setCurrentRoomId,
    render: render,
  };

  // takes a string:name, creates a new room and adds it to rooms array
  function addRoom(roomName) {
    var room = Room();
    room.init(roomName);
    rooms.push(room);
  }
  function getRoom(roomId) {
    var foundRoom = rooms.filter(function(item) {
      return item.getRoomId() === roomId;
    });
    return foundRoom[0] || {};
  }
  function getRooms() {
    return rooms;
  }
  function getNewestRoomState() {
    var last = rooms.length - 1;
    return rooms[last];
  }
  function getCurrentRoomId() {
    return currentRoomId;
  }
  function setCurrentRoomId(val) {
    currentRoomId = val;
  }
  function render() {
    var homeView = home(publicApi);
    $(".js-thermostat").html(homeView);
  }
  function Room() {
    var id = 0;
    var name = "room";
    var thermostat = 50;
    var curtains = false;
    var lights = true;
    var isActive = false;

    var publicApi = {
      init: init,
      getRoomName: getRoomName,
      getRoomId: getRoomId,
      getLights: getLights,
      getDevice: getDevice,
      toggleDevice: toggleDevice,
      toggleDeviceOff: toggleDeviceOff,
      toggleDeviceOn: toggleDeviceOn,
      setActive: setActive,
      getActive: getActive,
      getRoomTemp: getRoomTemp,
      increaseRoomTemp: increaseRoomTemp,
      decreaseRoomTemp: decreaseRoomTemp,
    };
    function init(newName) {
      name = newName;
      id = roomId++;
    }
    function getRoomName() {
      return name;
    }
    function getRoomId() {
      return id;
    }
    function getLights() {
      return lights;
    }
    function setActive (bool) {
      isActive = bool;
    }
    function getActive () {
      return isActive;
    }
    function getRoomTemp() {
      return thermostat;
    }
    function setRoomTemp(val) {
      thermostat = val;
    }
    function increaseRoomTemp(val) {
      var num = thermostat + val;
      thermostat = num >= 120 ? 120 : (thermostat + val);

    }
    function decreaseRoomTemp(val) {
      var num = thermostat - val;
      thermostat = num <= 0 ? 0 : (thermostat - val);
    }
    // takes device type(lights or curtains) default is "error wrong device";
    function getDevice(device) {
      var result;
      switch(device) {
        case "lights":
          result = lights;
          break;
        case "curtains":
          result = curtains;
          break;
        default:
         console.log("error wrong device");
      }
      return result;
    }
    function toggleLights() {
      lights = ! lights;
    }
    // takes device type(lights or curtains) toggle state
    // default both device true;
    function toggleDeviceOn(device) {
      switch(device) {
        case "lights":
          lights = true;
          break;
        case "curtains":
          curtains = true;
        default:
          lights = true;
          curtains = true;
      }
    }
    // takes device type(lights or curtains) toggle state
    // default both device off;
    function toggleDeviceOff(device) {
      switch(device) {
        case "lights":
          lights = false;
          break;
        case "curtains":
          curtains = false;
        default:
          lights = false;
          curtains = false;
      }
    }
    // takes device type(lights or curtains) toggle state
    // default both device toggle;
    function toggleDevice(device) {
      switch(device) {
        case "lights":
          lights = ! lights;
          break;
        case "curtains":
          curtains = ! curtains;
          break;
        default:
          lights = ! lights;
          curtains = ! curtains;
      }
    }
    return publicApi;
  }
  return publicApi;
};
