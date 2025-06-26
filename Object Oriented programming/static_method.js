class Room {
  constructor({ name }) {
    this.name = Room.capitalize(name);
  }

  bedRoom() {
    console.clear();
    console.log(`This is ${this.name}'s bedroom`);
  }

  bathRoom() {
    console.log("This is a bathroom");
  }

  hall() {
    console.log("This is a hall");
  }

  kitchen() {
    console.log("This is a kitchen");
  }

  static capitalize(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
}

const member = {
  name: "nilesh",
};

const newMember = new Room(member);
newMember.bedRoom(); // ✅ Output: This is Nilesh's bedroom
