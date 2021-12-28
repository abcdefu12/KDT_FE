"use strict";
//node primitiveType.js
// console.log('hello');
//type Annotation
let a;
a = "Mark";
a = "39";
function hello(b) {
}
hello(39);
//primitive type
//boolean
let isDone = false;
isDone = true;
console.log(typeof isDone);
let isOk = true;
// let isNotOk: boolean = new Boolean(true);
//number
let decimal = 6;
let hex = 0xf00d; //16진수
let binary = 0b1010;
let octal = 0o744;
let notANumber = NaN;
let underscoreNum = 1000000;
//string
let myName = "mark";
myName = "gim";
//templeteString
let fullName = `Mark Lee`;
let age = 39;
let sentence = `Hello, My name is ${fullName}.
I'll be ${age + 1} years old next month.`;
console.log(sentence);
//symbol
//ECMAScript2015
console.log(Symbol('foo') === Symbol('foo'));
const sym = Symbol();
const obj = {
    [sym]: "value"
};
console.log(obj[sym]);
//null & undefined
//subtypes of all other types
//compileOption -> `--strickNullChecks` ->error
//insert undefined in void can be possible
//union type
// let name: string = null;
// let u: undefined = null;
let v = undefined;
let union = 'str';
console.log(union);
//null
let n = null;
console.log(n);
console.log(typeof n);
//undefined
let u = undefined;
console.log(u);
console.log(typeof u);
//object
//to represent non-primitive type
const person1 = { name: 'Mark', age: 39 };
const person2 = Object.create({ name: 'Mark', age: 39 });
console.log(person1);
console.log(person2);
// create({ prop: 0 });
// create(null);
//Array != Tuple
//Array
let list = [1, 2, 3];
let newlist = [1, 2, 3, "4"];
// let list: Array<number> = [1, 2, 3];
console.log(list);
console.log(newlist);
//Tuple
let x;
x = ["hello", 39];
x[0] = "world";
console.log(x);
//any -> unknown
//any
//do not use unless necessary
function returnAny(message) {
    console.log(message);
    return message;
}
const any1 = returnAny("return can be anything");
any1.toString();
//can lower type security
let looselyTyped = {};
// let d = looselyTyped.a.b.c.d;
function leakingAny(obj) {
    const a = obj.num;
    const b = a + 1;
    return b;
}
const c = leakingAny({ num: 0 });
// c.indexOf("0");
//unknown
// declare let maybe: unknown;
// if (maybe === true){
//     const aBoolean: boolean = maybe;
// }
// if (typeof maybe === 'string'){
//     const aString: string = maybe;
// }
//never
function error(message) {
    throw new Error(message);
}
function fail() {
    return error("failed");
}
function infiniteLoop() {
    while (true) { }
}
let h = 'hello';
if (typeof h !== 'string') {
    let f = h;
}
//void
//값이 없고 타입만 존재
function returnVoid(message) {
    console.log(message);
    return;
}
returnVoid("There is no return.");
