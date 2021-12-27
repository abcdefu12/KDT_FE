// When target is ES5, class in js compiled to function
// Most of class name use capital letter.

//public private protected
//default:public usually used underbar(_

class Person {
    public name: string = "Mark";
    // age!: number; 
    public age: number;
    //strictNullChecks & strictPropertyInitialization => true

    // constructor(name: string){
    //     this.name = name;
    // }

    public constructor(age?:number) {
        if (age ===undefined) {
            this.age = 20;
        } else{
            this.age = age;
        }
    }

    public async init() {

    }
}

// const p1 = new Person(39);
const p1: Person = new Person(39);
const p2: Person = new Person();
// p1.age = 39;

console.log(p1);
console.log(p1.age);


class Person5 {
    public constructor(private _name:string, private age:number) {}

    get name(){
        console.log("get");
        return this._name + "VIP";
    }

    set name(n:string){
        console.log("set");
        this._name =n;
    }
}
const p5: Person5 = new Person5("Mark", 390);
console.log(p5)


//Getter & Setter
console.log(p5.name);
p5.name = "Kim";
console.log(p5.name);

class Person7{
    public readonly name = 'Mark';
    private readonly country: string = "Korea";

    //readonly 내외부 변경불가능

}

//index signature
class Students {
    [index: string]: "male" | "female";

    mark: "male" = "male";
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
    private static instance: ClassName | null = null;
    public static getInstance(): ClassName{
        if (ClassName.instance === null) {
            ClassName.instance = new ClassName();
        }
        return ClassName.instance;
    }
    private constructor(){}
}

// const asth = new ClassName();
// const bsth = new ClassName();
const asth = ClassName.getInstance();
const bsth = ClassName.getInstance();
console.log(asth===bsth);


//Inheritance
class Parent {
    constructor(protected _name: string, private _age: number){}

    public print(): void{
        console.log(`이름은 ${this ._name} 이고, 나이는 ${this ._age} 입니다.`);
    }

    protected printName():void {
        console.log(this ._name, this._age);
    }
}
const p = new Parent("Mark", 39);
p.print();

class Child extends Parent{
    // protected _name = "Mark Jr.";
    // public _name = "Mark Jr";
    public gender = 'male';

    constructor(age:number){
        super("Mark Jr.", age);
        this.printName();
    }
}

// new Child("Son", 5);
// const cofp = new Child("Son", 5);
const cofp = new Child(5);

cofp.print();
cofp.gender
// cofp._name


//Abstract Classes
abstract class AbstractPerson{
    protected _name: string = "Mark";

    abstract setName(name:string): void;
}
// new AbstractPerson()

class PersonA extends AbstractPerson{
    setName(name: string): void {
        this._name = name;
    }    
}
const pa = new PersonA();
// pa.setName();