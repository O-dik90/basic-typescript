var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _myEmploye_fullname;
console.log("Hello, Typescript");
let nama = "odik yudi nugroho";
console.log(nama);
// tuples
console.log("___tuples___");
var employee = [1, "Steve"];
employee.push(2, "Bill");
console.log(employee);
// Get & set
console.log("___get & set___");
class a {
    get size() {
        return this._size;
    }
    set size(value) {
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
function add(a, b, c) {
    return a + b;
}
let x = add("Hello ", "Steve"); // returns "Hello Steve"
let y = add(10, 20); // returns 30
console.log(x);
console.log(y);
// merging
console.log("___merging___");
let box = { height: 5, width: 8, scale: 10 };
console.log(box);
console.log("___enum___");
console.log("number");
var level;
(function (level) {
    level[level["height"] = 0] = "height";
    level[level["medium"] = 1] = "medium";
    level[level["low"] = 2] = "low";
})(level || (level = {}));
console.log("string");
var color;
(function (color) {
    color["Green"] = "GREEN";
    color["Yellow"] = "YELLOW";
    color["Red"] = "RED";
})(color || (color = {}));
console.log("level " + level[1]);
console.log("index level " + level.low);
console.log("color " + color.Green);
// never
console.log("___NEVER___");
function fn(a) {
    if (typeof a === "string") {
        return true;
    }
    else if (typeof a === "number") {
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
function sd(x, y) {
    let hasil = x + y;
    if (hasil === 2) {
        return true;
    }
    else {
        return false;
    }
}
console.log(sd(1, 1));
console.log("___Type Casting___");
let text = "string";
let value = text.length;
let newvalue = text.length;
console.log("(as) ", value);
console.log("(<>) ", newvalue);
// discriminated unions
console.log("___Descriminated Unions___");
function block(state) {
    // if (state.state === "square") {
    //   return console.log("ini square ", state.l**2);
    // } else if (state.state === "reactangle") {
    //   return console.log("ini rectangle", state.l * state.p);
    // } else {
    //   return console.log("coba lagi");
    // }
    switch (state.state) {
        case "square":
            return console.log("square", state.l);
        case "reactangle":
            return console.log("rectangle", state.l * state.p);
        default:
            break;
    }
}
block({ state: "square", l: 5 });
block({ state: "reactangle", l: 3, p: 5 });
console.log("___Type Guard___");
console.log("___expression___");
let ax = 5;
let user;
let z = (typeof user === "string" && user.length) || user;
if (typeof user === "string") {
    user;
}
console.log("       ");
console.log("___Class___");
// origina;
class myClass {
    constructor() {
        this.p = 3;
        this.l = 5;
    }
}
const mc = new myClass();
console.log(`${mc.l}, ${mc.p}`);
// constructor
class Employee {
    constructor(code, name) {
        this.empName = name;
        this.empCode = code;
    }
    getSalary() {
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
    constructor(name, code, myID) {
        super(code, name); // untuk mengambil constructor dari parent
        this.myID = myID;
    }
    // function untuk menampilkan object
    displayName() {
        console.log("Name = " + this.myID + ", Employee Code = " + this.empCode);
    }
}
const e1 = new Person("mycode", 1, 09090);
console.log(e1);
// call displayName
e1.displayName();
class Owner {
    constructor(empcode, name) {
        this.empCode = empcode;
        this.name = name;
    }
    display() {
        console.log("Name = " + this.name + ", Employee Code = " + this.empCode);
    }
}
let per = new Owner(100, "Bill");
per.display(); // Name = Bill, Employee Code = 100
class Car {
    constructor(name) {
        this.name = name;
    }
    run(speed = 0) {
        console.log("A " + this.name + " is moving at " + speed + " mph!");
    }
}
// method overiding
class Mercedes extends Car {
    constructor(name) {
        super(name);
    }
    run(speed = 150) {
        console.log("A Mercedes started");
        super.run(speed);
    }
}
class Honda extends Car {
    constructor(name) {
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
    constructor(name, nickname, fullname) {
        _myEmploye_fullname.set(this, void 0);
        this.name = name;
        this.nickname = nickname;
        __classPrivateFieldSet(this, _myEmploye_fullname, fullname, "f");
    }
    myDisplay() {
        console.log(this.nickname = "odik", __classPrivateFieldSet(this, _myEmploye_fullname, "odik yudi", "f"));
    }
}
_myEmploye_fullname = new WeakMap();
const myn = new myEmploye("odik", "yudi nugroho", "nu");
console.log(myn.name);
myn.myDisplay();
