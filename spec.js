// Test

describe("homeStateModule", function() {
  var homeState;
  beforeEach(function() {
    homeState = homeStateModule();
  });

  it("should be exists", function() {
    expect(homeState).toBeDefined();
  });

  describe("homeStateModule.addRoom", function() {
    var homeState;
    beforeEach(function() {
      homeState = homeStateModule();
    });

    it("should be exists", function() {
      expect(homeState.addRoom).toBeDefined();
    });

    it("should create a room", function() {
      homeState.addRoom("dinning room");
      expect(homeState.getRooms().length).toBe(1);
    });
    xit("should have a room name", function() {
      var name;
      homeState.addRoom("kitchen");
      name = homeState.getRooms()[0].getRoomName();
      expect(name).toBe("kitchen");
    });
  });
  describe("homeStateModule.getRooms", function() {
    var homeState;
    beforeEach(function() {
      homeState = homeStateModule();
    });

    it("should be exists", function() {
      expect(homeState.getRooms).toBeDefined();
    });

    it("should return the correct amount of rooms", function() {
      homeState.addRoom("dinning room");
      expect(homeState.getRooms().length).toBe(1);
      homeState.addRoom("kitchen room");
      expect(homeState.getRooms().length).toBe(2);
    });
  });
  describe("homeStateModule.getRoom", function() {
    var homeState, room, roomId;
    beforeEach(function() {
      homeState = homeStateModule();
      homeState.addRoom("dinning room");
      room = homeState.getRooms()[0];
      roomId = room.getRoomId();
    });

    it("should be exists", function() {
      expect(homeState.getRoom).toBeDefined();
    });
    it("should return the correct room", function() {
      expect(homeState.getRoom(roomId)).toBe(room);
    });
    describe("Room", function() {
      var homeState, room, roomId, targetName;
      beforeEach(function() {
        targetName = "office"
        homeState = homeStateModule();
        homeState.addRoom(targetName);
        room = homeState.getRooms()[0];
        roomId = room.getRoomId();
      });
      it("should be exists", function() {
        expect(room).toBeDefined();
      });
      it("should have correct id", function() {
        expect(room.getRoomId()).toBe(1);
      });
      it("should have correct name", function() {
        expect(room.getRoomName()).toBe(targetName);
      });
      it("should have lights on", function() {
        expect(room.getLights()).toBe(true);
      });
      it("should turn lights off", function() {
        room.toggleDeviceOff("lights");
        expect(room.getLights()).toBe(false);
      });
      it("should turn lights on", function() {
        room.toggleDeviceOn("lights");
        expect(room.getLights()).toBe(true);
      });
      it("should return correct device", function() {
        room.toggleDeviceOn();
        expect(room.getDevice("lights")).toBe(true);
        expect(room.getDevice("curtains")).toBe(true);
      });
      it("should toggle device on or off", function() {
        var lights = room.getDevice("lights");
        var curtains = room.getDevice("curtains");
        room.toggleDevice("lights");
        room.toggleDevice("curtains");
        expect(room.getDevice("lights")).toBe( ! lights);
        expect(room.getDevice("curtains")).toBe( ! curtains);
      });
      it("should not be active", function() {
        expect(room.getActive()).toBe(false);
      });
      it("should be active", function() {
        room.setActive(true);
        expect(room.getActive()).toBe(true);
      });
      it("should have temperature", function() {
        expect(room.getRoomTemp()).toBe(50);
      });
      it("should increase temperature", function() {
        room.increaseRoomTemp(1);
        expect(room.getRoomTemp()).toBe(51);
      });
      it("should decrease temperature", function() {
        room.decreaseRoomTemp(10);
        expect(room.getRoomTemp()).toBe(40);
      });
    });
  });
  describe("homeStateModule.getNewestRoomState", function() {
    var homeState;
    beforeEach(function() {
      homeState = homeStateModule();
    });

    it("should be exists", function() {
      expect(homeState.getNewestRoomState).toBeDefined();
    });

    it("should return the correct room", function() {
      var room, roomId;
      homeState.addRoom("dinning room");
      room = homeState.getRooms()[0];
      expect(homeState.getNewestRoomState()).toBe(room);
    });
  });
});

describe("Button", function() {
  it("should be defined", function() {
    expect(Button).toBeDefined();
  });
  describe("button__section", function() {
    var $btnSection;
    var homeState;
    var roomState;

    beforeEach(function() {
      homeState = homeStateModule();
      homeState.addRoom("living room");
      roomState = homeState.getRoom(homeState.getCurrentRoomId());
      $btnSection = Button({on:"open", off: "closed"}, "curtains", roomState);
    });
    it("should return element with .button__section class", function() {
      var isClass = $btnSection.hasClass("button__section");
      expect(isClass).toEqual(true);
    });
    it("should has a div with button__group-title", function() {
      var title = $btnSection.find("div.button__group-title")[0];
      expect(title.nodeName).toEqual("DIV");
      expect(title.classList.contains("button__group-title")).toEqual(true);
    });
    it("should have two buttons", function() {
      var $btns = $btnSection.find("button");
      expect($btns.length).toBe(2);
    });
  });
});
