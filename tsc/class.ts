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


