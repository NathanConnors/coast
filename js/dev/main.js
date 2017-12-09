class Main {
  constructor () {
    this.rooms = this.roomMaker();
    console.log(this.rooms);
  }

  roomMaker () {
    let rooms = [
      new Room("Living Room"),
      new Room("Bathroom"),
      new Room("Kitchen"),
      new Room("Bedroom"),
      new Room("Attic"),
      new Room("Exterior Home - Front"),
      new Room("Truck"),
      new Room("Exterior Home - Back"),
      new Room("Workshed"),
      new Room("Road to House"),
      new Room("Rooftop"),
      new Room("Basement")
    ];
    return rooms;
  }
}
