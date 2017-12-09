class Room {
  constructor (room) {
    this.room = room;
    this.roomDescription;
    this.items = new Item(this.room);
    this.observations = 2;
    this.movement;

    this.moveMaker();
    this.roomDescMaker();
  }

  moveMaker () {
    if(this.room == "Bathroom") {
      this.movement = [
        "Living Room"
      ];
    }
    if(this.room == "Living Room") {
      this.movement = [
        "Bathroom",
        "Kitchen",
        "Bedroom",
        "Exterior Home - Front",
        "Attic"
      ];
    }
    if(this.room == "Kitchen") {
      this.movement = [
        "Living Room"
      ];
    }
    if(this.room == "Bedroom") {
      this.movement = [
        "Living Room"
      ];
    }
    if(this.room == "Attic") {
      this.movement = [
        "Living Room"
      ];
    }
    if(this.room == "Exterior Home - Front") {
      this.movement = [
        "Living Room",
        "Truck",
        "Exterior Home - Back",
        "Basement",
        "Road to House"
      ];
    }
    if(this.room == "Truck") {
      this.movement = [
        "Exterior Home - Front"
      ];
    }
    if(this.room == "Exterior Home - Back") {
      this.movement = [
        "Exterior Home - Front",
        "Rooftop",
        "Workshed"
      ];
    }
    if(this.room == "Workshed") {
      this.movement = [
        "Exterior Home - Back"
      ];
    }
    if(this.room == "Road to House") {
      this.movement = [
        "Exterior Home - Front"
      ];
    }
    // KITCHEN IS SPECIAL HERE!
    if(this.room == "Rooftop") {
      this.movement = [
        "Exterior Home - Back",
        "Kitchen"
      ];
    }
    if(this.room == "Basement") {
      this.movement = [
        "Exterior Home - Front"
      ];
    }
  }

  roomDescMaker () {
    if(this.room == "Living Room") {
      this.roomDescription = `This room is a lot more exciting than whatever one you were just in. It's got a stack of old radio equipment, jerry rigged together via a tangled web of XLR cables and a once top-of-the-line shotgun microphone. There's a monitor displaying a satellite feed of the stars, along with a star map on a second monitor nearby. The monitors are plugged into one large, tower computer, that has a few cords running around the back of it, two of them being HDMI Cords running to an ominous looking, large black box. The box has one single flicering red light on the front of it and a large black button on the top of it. The box has a number of sixteen pin video cords running up the wall to some unseen source outside. There's a futon in the middle of the room, currently folded out into it's bed position. It has a couple of old tattered blankets tossed across it, and atop the bed is an open newspaper with a couple of stories circled in red marker. The carpet is stained with some sort of liquid, making you cautious of where you step. In front of the futon is a coffee table, which is nearly unable to be seen due to the left overs, remotes and books covering the top of it. You look over at the wall to see a number of pictures haning in an organized fashion, making you feel as if they were hung up by someone much more organized than yourself.`;
    }
    if(this.room == "Bathroom") {
      this.roomDescription = `As you step inside the bathroom, you come upon the same situation as you did with the living room, the place is a mess. There's a plate on teh edge of the bathtub, topped with what appears to be old lasagna. It used to be your favorite, still is, but it certainly isn't helping the smell. Upon the back of the toilet is a stack of old magazines titled "PI: Paranormal Investigator." There's a framed picture of you and a young brunette to the left of the sink. An old pair of dog tags are dangling from the neck of the sink, reflecting the small amount of light from the one working light bulb onto the sink below. Next to the sink you see your old razor.`;
    }
    if(this.room == "Kitchen") {
      this.roomDescription = `As you step onto the tacky laminate tile that signifies you've entered the kitchen, you see more evidence that you were certainly living here alone. There's dishes piled in the sink, hardly any appliances to be seen excect a 1980's model Mr. Coffee pot, and as for food it looks like you've been flying through your rations of oatmeal and cereal based on the empty boxes that are stacked on the counter top. The window in here seems to have stayed somewhat less frozen than the others in the house thanks to the exterior light that is placed right above it but it still is difficult to see out of thanks to the snow and ice. On the floor there is a small pellet food dispenser on it that is half full. The name Muffin is printed ont eh side of the dish and likely belongs to a pet dog that is nowhere to be seen. The fridge has an old honey-do list stuck to the front of it by a UFO magnet, but nothing else is found on it besides dust. A number of cabinets remain closed and the few that are open have little else besides a few random dishes inside them.`;
    }
    if(this.room == "Bedroom") {
      this.roomDescription = ``;
    }
    if(this.room == "Attic") {
      this.roomDescription = `
        <p>As you pull down the old, creaky, step ladder that leads up into the attic you are immediately greeted by cobwebs. The attic hasn't been visited in quite a while and you wonder why you haven't been using it for storage other than the fact that this room has always given you the creeps. As you proceed up the stairwell you see more cob webs, a small round window, a number of boxes and some torn up insulation which might explain why the living room has been feeling colder than usual lately. You wonder what little critter has been chewing up the insulation but aren't sure if you want to get the answer.</p>
        <p>As you step off the steps you have to hunch over to make sure that you can move easily without bumping your head. You procedd to the center of the room, watching a few small insects scatter away into the darkness, frightened now that you're intruding upon their home.</p>`;
    }
    if(this.room == "Exterior Home - Front") {
      this.roomDescription = ``;
    }
    if(this.room == "Truck") {
      this.roomDescription = ``;
    }
    if(this.room == "Exterior Home - Back") {
      this.roomDescription = ``;
    }
    if(this.room == "Workshed") {
      this.roomDescription = ``;
    }
    if(this.room == "Road to House") {
      this.roomDescription = ``;
    }
    if(this.room == "Rooftop") {
      this.roomDescription = ``;
    }
    if(this.room == "Basement") {
      this.roomDescription = ``;
    }
  }
}
