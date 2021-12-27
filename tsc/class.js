"use strict";
// When target is ES5, class in js compiled to function
// Most of class name use capital letter.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//public private protected
//default:public usually used underbar(_
class Person {
    //strictNullChecks & strictPropertyInitialization => true
    // constructor(name: string){
    //     this.name = name;
    // }
    constructor(age) {
        this.name = "Mark";
        if (age === undefined) {
            this.age = 20;
        }
        else {
            this.age = age;
        }
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
// const p1 = new Person(39);
const p1 = new Person(39);
const p2 = new Person();
// p1.age = 39;
console.log(p1);
console.log(p1.age);
class Person5 {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
    }
    get name() {
        console.log("get");
        return this._name + "VIP";
    }
    set name(n) {
        console.log("set");
        this._name = n;
    }
}
const p5 = new Person5("Mark", 390);
console.log(p5);
//Getter & Setter
console.log(p5.name);
p5.name = "Kim";
console.log(p5.name);
class Person7 {
    constructor() {
        this.name = 'Mark';
        this.country = "Korea";
        //readonly 내외부 변경불가능
    }
}
//index signature
class Students {
    constructor() {
        this.mark = "male";
    }
}
const aclass = new Students();
aclass.mark = "male";
aclass.jade = "male";
console.log(aclass);
const bclass = new Students();
bclass.chloe = "female";
bclass.alex = "female";
bclass.anna = "female";
console.log(bclass);
//Singletons Pattern
class ClassName {
    constructor() { }
    static getInstance() {
        if (ClassName.instance === null) {
            ClassName.instance = new ClassName();
        }
        return ClassName.instance;
    }
}
ClassName.instance = null;
// const asth = new ClassName();
// const bsth = new ClassName();
const asth = ClassName.getInstance();
const bsth = ClassName.getInstance();
console.log(asth === bsth);
//Inheritance
class Parent {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    print() {
        console.log(`이름은 ${this._name} 이고, 나이는 ${this._age} 입니다.`);
    }
    printName() {
        console.log(this._name, this._age);
    }
}
const p = new Parent("Mark", 39);
p.print();
class Child extends Parent {
    constructor(age) {
        super("Mark Jr.", age);
        // protected _name = "Mark Jr.";
        // public _name = "Mark Jr";
        this.gender = 'male';
        this.printName();
    }
}
// new Child("Son", 5);
// const cofp = new Child("Son", 5);
const cofp = new Child(5);
cofp.print();
cofp.gender;
// cofp._name
//Abstract Classes
class AbstractPerson {
    constructor() {
        this._name = "Mark";
    }
}
// new AbstractPerson()
class PersonA extends AbstractPerson {
    setName(name) {
        this._name = name;
    }
}
const pa = new PersonA();
// pa.setName();
