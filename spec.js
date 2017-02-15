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


xdescribe("TempControl", function() {
  var tempC;
  var temp;
  var target = document.querySelector(".js-temp");
  var btnGet = document.querySelector(".js-get-button");
  var btnSet = document.querySelector(".js-set-button");
  var inputText = document.querySelector(".js-temp-input");
  beforeEach(function() {
    tempC = TempControl;
    tempC.init(50, target, btnSet, btnGet, inputText);
  });

  describe("getTemp", function() {
    it("should return temp", function() {
      temp = tempC.getTemp();
      expect(temp).toEqual(50);
      expect(typeof temp === "number").toBe(true);
    });
  });
  describe("getTempRender", function() {
    it("should show correct temp", function() {
      var tempText;
      tempC.setTempRender(20);
      tempC.getTempRender();
      tempText = document.querySelector(".js-temp");

      expect(tempText.innerHTML).toEqual("20");

    })
  });
  describe("setTempRender", function() {
    it("should show correct temp", function() {
      var tempText;
      // debugger;
      tempC.setTempRender(99);
      tempText = document.querySelector(".js-temp");

      expect(tempText.innerHTML).toEqual("99");
    })
  })
});

xdescribe("Home", function() {
  var home;
  beforeEach(function() {
    home = homeStateModule();
  });

  it("should exits", function() {
    expect(home).toBeDefined();
  });
  describe("home.rooms", function() {
    it("should be an array", function() {
      expect(Array.isArray(home.getRooms())).toBe(true);
    })
    it("should have zero rooms", function() {
      expect(home.getRooms().length).toEqual(0);
    });
  });
  describe("home.addRoom", function() {
    it("should exits", function() {
      expect(home.addRoom).toBeDefined();
    });
    it("should add rooms to rooms array", function() {
      home.addRoom("movie room");
      expect(home.getRooms().length).toEqual(1);
    });
  })
  describe("home.getRoom", function() {
    it("should exists", function() {
      expect(home.getRoom).toBeDefined();
    });
    it("should return the requested room", function() {
      var room = "movie room";
      home.addRoom(room);
      console.log(home)
      expect(home.getRoom(room).getRoomName() ).toEqual(room );
    });
  });

});

xdescribe("Button", function() {
  it("should be defined", function() {
    expect(Button).toBeDefined();
  });
  describe("button__section", function() {
    var $btnSection;
    beforeEach(function() {
      $btnSection = Button({on:"open", off: "closed"}, "row", "curtains");
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

xdescribe("ButtonGroupModule", function() {
  var buttonGroup;

  beforeEach(function() {
    buttonGroup = ButtonGroupModule();
    buttonGroup.init({on:"on", off: "off"}, "row");
  });
  describe("ButtonGroupModule.init", function() {
    var buttonGroup;

    beforeEach(function() {
      buttonGroup = ButtonGroupModule();
      buttonGroup.init({on:"on", off: "off"}, "row");
    });
    it("should be defined", function() {
      expect(buttonGroup.init).toBeDefined();
    });
  });
  describe("ButtonGroupModule.getButtonGroup", function() {
    var buttonGroup;

    beforeEach(function() {
      buttonGroup = ButtonGroupModule();
      buttonGroup.init({on:"on", off: "off"}, "row");
    });
    it("should be defined", function() {
      expect(buttonGroup.getButtonGroup).toBeDefined();
    });
    it("should return button group elements", function() {
      var btnGroup = buttonGroup.getButtonGroup();
      expect(btnGroup).toBeDefined();
    });

    it("should have two buttons ", function() {
      var btnGroup = buttonGroup.getButtonGroup();
      var btns = btnGroup.find(".button");
      expect(btns.length).toBe(2);
    });
  });
  describe("ButtonGroupModule.getButtonSection", function() {
    var buttonGroup;

    beforeEach(function() {
      buttonGroup = ButtonGroupModule();
      buttonGroup.init({on:"on", off: "off"}, "row", "lights");
    });
    it("should be defined", function() {
      expect(buttonGroup.getButtonSection).toBeDefined();
    });
    it("should return button section element", function() {
      var btnSection = buttonGroup.getButtonSection();
      expect(btnSection).toBeDefined();
    });

    it("should have a div with class title ", function() {
      var btnSection = buttonGroup.getButtonSection();
      var btns = btnSection.find(".button__group-title");
      expect(btns.html()).toBe("lights");
    });
  });

  xit("should exist", function() {
    console.log("buttongroup", buttonGroup)
    expect(buttonGroup).toBeDefined();
  });
});
