class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} can make a noise`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} is barks`);
  }

  play() {
    console.log(`${this.name} can play`);
  }
}

var d = new Dog("Tomy", "puppy");
d.speak();
d.play();
