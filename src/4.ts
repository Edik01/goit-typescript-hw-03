class Key {}

class MyHouse {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  openDoor(personKey: Key): void {
    if (this.key === personKey) {
      console.log("Door is opened.");
    } else {
      console.log("Access denied. Wrong key.");
    }
  }

  comeIn(person: Person): void {
    console.log(`${person.getName()} entered the house.`);
  }
}

class Person {
  private key: Key;
  private name: string;

  constructor(key: Key, name: string) {
    this.key = key;
    this.name = name;
  }

  getKey(): Key {
    return this.key;
  }

  getName(): string {
    return this.name;
  }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key, "John");

house.openDoor(person.getKey());
house.comeIn(person);
