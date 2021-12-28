function helloString(message: string): string{
    return message;
}

function helloNumber(message: number): number{
    return message;
}

function helloany(message:any):any{
    return message;
}
console.log(helloany("Mark"));
console.log(helloany(39));

console.log(helloany("Mark").length);
console.log(helloany(39).length);

//Difference between any & generic
function helloGeneric<T>(message: T): T{
    return message;
}
console.log(helloGeneric('Mark'));
console.log(helloGeneric('Mark').length);
console.log(helloGeneric(39));
console.log(helloGeneric(true));



//Generic Basic
function helloBasic<T, U>(message: T, comment: U):T{
    return message;
}
helloBasic<string,number>("Mark", 39);
helloBasic(36, 39);


//Generic Array & Tuple
function helloArray<T>(message:T[]):T{
    return message[0];
}
helloArray(["Hello","World"]);
helloArray(["Hello",5]);

function helloTuple<T, K>(message: [T, K]):T{
    return message[0];
}
helloTuple(["Hello","World"]);
helloTuple(["Hello",5]);


//Generic Function
type HelloFunctionGeneric1 = <T>(message: T) => T;
const helloFunction1: HelloFunctionGeneric1 = <T>(message:T): T =>{
    return message;
};

interface HelloFunctionGeneric2 { <T>(message: T): T; }
const helloFunction2: HelloFunctionGeneric2 = <T>(message:T): T =>{
    return message;
};


//Generic Class
class PersonG<T, K>{
    private _name: T;
    private _age: K;

    constructor(name: T, age: K){
        this ._name = name;
        this ._age = age;
    }
}
new PersonG("Mark", 39);
new PersonG<string, number>("Mark",39);



//Generic with extends
class PersonExtends<T extends string | number> {
    private _name: T;

    constructor(name:T){
        this._name = name;
    }
}
new PersonExtends("Mark");
new PersonExtends(39);



//keyof & type lookup system
interface IPerson{
    name: string;
    age: number;
}

const person: IPerson ={
    name: "Mark",
    age: 39
};

//IPerson[keyof IPerson] 
//=> IPerson["name"|"age"] 
//=> IPerson["name"]|IPerson["age"]
//=> string | number
function getProp<T, K extends keyof T>(obj: T, key: K):T[K]{
    return obj[key];
}
getProp(person, 'name');
getProp(person, 'age');

function setProp<T,K extends keyof T>(obj:T, key: K, value: T[K]):void{
    obj[key] = value;
}
setProp(person, "name", "Anna");

