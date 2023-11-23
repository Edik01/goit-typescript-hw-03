class Key {
  constructor(private signature: number = Math.random()) {}
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey(): Key {
    return this.key;
  }
}
abstract class House {
  key: Key;
  door: boolean = false;
  tenants: Person[] = [];
  constructor(key: Key) {
    this.key = key;
  }
  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
    }
  }
  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }

  openDoor(personKey: Key): void {
    if (this.key.getSignature() === personKey.getSignature()) {
      this.door = true;
    }
  }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);
