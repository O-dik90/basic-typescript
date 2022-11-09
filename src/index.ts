console.log("Hello, Typescript");

let nama: string = "odik yudi nugroho";
console.log(nama);

// tuples
console.log("___tuples___");
var employee: [number, string] = [1, "Steve"];
employee.push(2, "Bill");
console.log(employee);

// Get & set
console.log("___get & set___");
interface angka {
  get size(): number;
  set size(value: number);
}

class a implements angka {
  private _size: number;

  get size(): number {
    return this._size;
  }

  set size(value: number) {
    this._size = value;
  }
}

let b = new a();
// set value
b.size = 12;
// get value
console.log(b.size);

// overloading
// rules dari paling sedikit ke banyak
// panjang required harus sama, kalau ada optional tidak
// makin kebawah semakin general
console.log("___overloading___");

function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: boolean, b: boolean): boolean;

function add(a: any, b: any, c?: boolean): any {
  return a + b;
}

let x = add("Hello ", "Steve"); // returns "Hello Steve"
let y = add(10, 20); // returns 30

console.log(x);
console.log(y);

// merging
console.log("___merging___");
interface Box {
  height: number;
  width: number;
}
interface Box {
  scale: number;
  width: number;
}
let box: Box = { height: 5, width: 8, scale: 10 };
console.log(box);

console.log("___enum___");
console.log("number");
enum level {
  height = 0,
  medium,
  low,
}
console.log("string");
enum color {
  Green = "GREEN",
  Yellow = "YELLOW",
  Red = "RED",
}
console.log("level " + level[1]);
console.log("index level " + level.low);
console.log("color " + color.Green);

// never
console.log("___NEVER___");
function fn(a: string | number): boolean {
  if (typeof a === "string") {
    return true;
  } else if (typeof a === "number") {
    return false;
  }
  return neverOccur();
}

let neverOccur = () => {
  throw new Error("Never!");
};

console.log(fn(9));

// if statement
console.log("___If Statement___");
function sd(x: number, y: number): boolean {
  let hasil = x + y;

  if (hasil === 2) {
    return true;
  } else {
    return false;
  }
}
console.log(sd(1, 1));

console.log("___Type Casting___");
let text: unknown = "string";
let value = (text as string).length;
let newvalue = (<string>text).length;
console.log("(as) ", value);
console.log("(<>) ", newvalue);

// discriminated unions
console.log("___Descriminated Unions___");
interface square {
  state: "square";
  l?: number;
}
interface rectangle {
  state: "reactangle";
  l?: number;
  p?: number;
}
type shape = rectangle | square;
const shapes: shape = { state: "reactangle", l: 6, p:9}

console.log(shapes)
function block(state: shape) {
  // if (state.state === "square") {
  //   return console.log("ini square ", state.l**2);
  // } else if (state.state === "reactangle") {
  //   return console.log("ini rectangle", state.l * state.p);
  // } else {
  //   return console.log("coba lagi");
  // }

  // switch (state.state) {
  //   case "square":
  //     return console.log("square", state.l);
  //   case "reactangle":
  //     return console.log("rectangle", state.l * state.p);
  //   default:
  //     break;
  // }
}

block({ state: "square", l: 5 });
block({ state: "reactangle", l: 3, p: 5 });

console.log("___Type Guard___");

console.log("___expression___");
let ax: number = 5;
let user: string | number | boolean;

// let z = (typeof user === "string" && user.length) || user;
// if (typeof user === "string") {
//   user;
// }
console.log("       ");

console.log("___Class___");
// origina;
class myClass {
  p?: number = 3;
  l?: number = 5;
}
const mc = new myClass();
console.log(`${mc.l}, ${mc.p}`);
// constructor
class Employee {
  empCode: number;
  empName: string;

  constructor(code: number, name: string) {
    this.empName = name;
    this.empCode = code;
  }

  getSalary(): number {
    return 10000;
  }
}
console.log(new Employee(0, "odik"));
const e = new Employee(9, "yudi");
console.log(e.empName);
console.log(e.empCode);
console.log(e.getSalary());

// extends
class Person extends Employee {
  myID: number;

  constructor(name: string, code: number, myID: number) {
    super(code, name); // untuk mengambil constructor dari parent
    this.myID = myID;
  }
  // function untuk menampilkan object
  displayName(): void {
    console.log("Name = " + this.myID + ", Employee Code = " + this.empCode);
  }
}
const e1 = new Person("mycode", 1, 09090);
console.log(e1);
// call displayName
e1.displayName();

// implementasi multiple interface
interface IPerson {
  name?: string;
  display(): void;
}

interface IEmployee {
  empCode?: number;
}

class Owner implements IPerson, IEmployee {
  empCode: number;
  name: string;

  constructor(empcode: number, name: string) {
    this.empCode = empcode;
    this.name = name;
  }

  display(): void {
    console.log("Name = " + this.name + ", Employee Code = " + this.empCode);
  }
}

let per: IPerson = new Owner(100, "Bill");
per.display(); // Name = Bill, Employee Code = 100

class Car {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  run(speed: number = 0) {
    console.log("A " + this.name + " is moving at " + speed + " mph!");
  }
}
// method overiding
class Mercedes extends Car {
  constructor(name: string) {
    super(name);
  }

  run(speed = 150) {
    console.log("A Mercedes started");
    super.run(speed);
  }
}

class Honda extends Car {
  constructor(name: string) {
    super(name);
  }

  run(speed = 100) {
    console.log("A Honda started");
    super.run(speed);
  }
}

let mercObj = new Mercedes("Mercedes-Benz GLA");
let hondaObj = new Honda("Honda City");

mercObj.run(); // A Mercedes started A Mercedes-Benz GLA is moving at 150 mph!
hondaObj.run(); // A Honda started A Honda City is moving at 100 mph!

// data modifier
// public
// -bisa diakses didalam maupun diluar class
// -definisi bisa menggunakan public atau tidak sama sekali.
class myEmploye {
  public name: string;

  private nickname: string;
  #fullname: string;

  constructor(name: string, nickname: string, fullname: string) {
    this.name = name;
    this.nickname = nickname;
    this.#fullname = fullname;
  }

  myDisplay(): void {
    console.log((this.nickname = "odik"), (this.#fullname = "odik yudi"));
  }
}

const myn = new myEmploye("odik", "yudi nugroho", "nu");
console.log(myn.name);
myn.myDisplay();
