"use strict";
function helloString(message) {
    return message;
}
function helloNumber(message) {
    return message;
}
function helloany(message) {
    return message;
}
console.log(helloany("Mark"));
console.log(helloany(39));
console.log(helloany("Mark").length);
console.log(helloany(39).length);
//Difference between any & generic
function helloGeneric(message) {
    return message;
}
console.log(helloGeneric('Mark'));
console.log(helloGeneric('Mark').length);
console.log(helloGeneric(39));
console.log(helloGeneric(true));
//Generic Basic
function helloBasic(message, comment) {
    return message;
}
helloBasic("Mark", 39);
helloBasic(36, 39);
//Generic Array & Tuple
function helloArray(message) {
    return message[0];
}
helloArray(["Hello", "World"]);
helloArray(["Hello", 5]);
function helloTuple(message) {
    return message[0];
}
helloTuple(["Hello", "World"]);
helloTuple(["Hello", 5]);
const helloFunction1 = (message) => {
    return message;
};
const helloFunction2 = (message) => {
    return message;
};
//Generic Class
class PersonG {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
}
new PersonG("Mark", 39);
new PersonG("Mark", 39);
//Generic with extends
class PersonExtends {
    constructor(name) {
        this._name = name;
    }
}
new PersonExtends("Mark");
new PersonExtends(39);
const person = {
    name: "Mark",
    age: 39
};
//IPerson[keyof IPerson] 
//=> IPerson["name"|"age"] 
//=> IPerson["name"]|IPerson["age"]
//=> string | number
function getProp(obj, key) {
    return obj[key];
}
getProp(person, 'name');
getProp(person, 'age');
function setProp(obj, key, value) {
    obj[key] = value;
}
setProp(person, "name", "Anna");
