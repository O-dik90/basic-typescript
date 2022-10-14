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
class myClass {
    constructor() {
        this.p = 3;
        this.l = 5;
    }
}
const mc = new myClass();
console.log(`${mc.l}, ${mc.p}`);
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
