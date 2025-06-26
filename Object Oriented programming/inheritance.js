class Vehical {
  constructor({ name, type, seats, speed, terrain, price, mileage }) {
    this.name = name;
    this.type = type;
    this.seats = seats;
    this.speed = speed;
    this.terrain = terrain;
    this.price = parseInt(price);
    this.mileage = parseInt(mileage);
  }

  topSpeed() {
    // console.clear();
    console.log(`${this.name} has a top speed of ${this.speed}`);
  }

  typeTerrain() {
    console.clear();
    console.log(
      `${this.name} is a ${this.type} vehical which can run on ${this.terrain} terrain and has ${this.seats} seats of spacing`
    );
  }

  pricing() {
    console.log(
      `The price of ${this.name} is $${
        this.price
      } and after the seasonal discount the price will be $${(
        this.price / 36
      ).toFixed(3)}`
    );
  }
}

class vehicalMileage extends Vehical {
  petrolMileage() {
    console.log(`The milage of this ${this.type} in petrol is ${this.mileage} km/l`);
  }
  dieselMilage() {
    console.log(``);
  }
}

const vehicalDetail = {
  name: "XUV 500",
  type: "SUV",
  seats: "7-seater",
  speed: "500km/hr",
  terrain: "All",
  price: 550000,
  mileage: 39,
};

const vehicals = new vehicalMileage(vehicalDetail);

vehicals.typeTerrain();
vehicals.pricing();
vehicals.petrolMileage();
vehicals.topSpeed();

