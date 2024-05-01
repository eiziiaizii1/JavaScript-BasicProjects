// OOP basics
/*
const person1 = {
    firstName: "SpangBob",
    lastName: "Squarepants",
    age:30,
    isEmployed: true,
    sayHello: function(){console.log(`Hii I am ${this.firstName}`)},
    eat: function(){console.log(`${person1.firstName} is eating crabby patty`)}
}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello();
person1.eat();

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age:31,
    isEmployed: false,
    // this keyword does not work with artrow funcs
    sayHello: () => console.log("hey "),
    eat: () => console.log("I am eating rocks")
}

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
person2.sayHello();
person2.eat();
*/


//Constructors``
/*
function Car(make, model ,year){
    this.make = make,
    this.model = model,
    this.year = year,
    this.drive = function() { console.log(`Your drive ${this.model}`); }
}

const car1 = new Car("Ford", "Mustang", 2014);
const car2 = new Car("Subaru", "Forester", 2010);

car1.drive();
car2.drive()
*/


//Classes
/*
class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Product: ${this.price}`);
    }

    calculateTotal(salesTax){
        return this.price + this.price * salesTax;
    }
}

const salesTax = 0.02;

const p1 = new Product("Pants", 15.75);
const p2 = new Product("BackFlipping Monkey Toy",999.99)

p1.displayProduct();
const total1 = p1.calculateTotal(salesTax);
console.log(total1);

p2.displayProduct();
const total2 = p2.calculateTotal1(salesTax);
console.log(total2);
*/


// Static variables
/*
class User {
    static userCount = 0;

    constructor(userName){
        this.userName = userName;
        User.userCount++;
    }

    static getUserCount(){
        console.log(`There are ${User.userCount} users`);
    }
}

const u1 = new User("MonkeyDog");
//console.log(this.userCount); this kleyword does not work
console.log(User.userCount);
const u2 = new User("MonkeySnake");
User.getUserCount();
*/


// INHERITANCE ``
/*
class Animal{
    alive = true;
    eat(){
        console.log(`This ${this.name} is eating. NAM NAM NAM`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping... zZZZzZzzz`);
    }

}
class Rabbit extends Animal{
    name = "Rabbit";
}
class Fish extends Animal{
    name = "Fish";
    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}
class Monkey extends Animal{
    name = "Monkey";
    climb(){
        console.log(`This ${this.name} is climbing`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const monkey = new Monkey();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();

console.log(monkey.alive);
monkey.eat();
monkey.sleep();
monkey.climb();

fish.swim();
*/

// SUPER KEYWORD
/*
class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    move(speed){
        console.log(`This ${this.name} moves at a speed of ${speed}kmh`);
    }
}

class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }
    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    }
}
class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
    swim(){
        console.log(`This ${this.name} can swim`);
        super.move(this.swimSpeed);
    }
}
class Hawk extends Animal{
    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }
    fly(){
        console.log(`This ${this.name} can fly`);
        super.move(this.flySpeed);
    }
}

const r = new Rabbit("rabbit",2,5);
const f = new Fish("fish",12389612,1);
const h = new Hawk("hawk",2,40);

r.run();
f.swim();
h.fly();
*/

// GETTERS-SETTERS
/*
class Rectangle{
   constructor(width, height){
        this.width = width;
        this.height = height;
   }

   set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }
        else{
            console.error("Width must me postitive number")
        }
   }
   set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        }
        else{
            console.error("height must me postitive number")
        }
   }
   
   get width(){
        return this._width.toFixed(1);
   }
   get height(){
        return this._height.toFixed(1);
   }

   get area(){
        return this._width * this._height.toFixed(1);
   }
}

const rectangle = new Rectangle(15,3);
rectangle.width = 10;
rectangle.height = 10;

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);
*/

//DESTRUCTURING

/*
//case 1 Swapping
let a = 1;
let b = 2;

[a,b] = [b,a];

console.log(a);
console.log(b);

const letters = ["a","b","c","d","e","f","g"];
[letters[0],letters[3]] = [letters[3],letters[0]];
console.log(letters);

//case 2 assign array elements to variables
const [first, second, third, ...extra] = letters;
console.log(first,second,third);
console.log(extra);

//case 3 extract values from objects
const person1 = {
    name: "ali",
    surname: "demir",
    age: 32,
    job: "police"
}
const person2 = {
    name: "mert",
    surname: "ateş",
    age: 12,
}

const {name,surname,age,job="Unemployed"} = person2;
console.log(name);
console.log(surname);
console.log(age);
console.log(job);

//case 4 destructure in function parameters
function displayPerson({name, surname, age, job="unemployed"}){
    console.log(`Fullname: ${name} ${surname}`);
    console.log(`Fullname: ${age}`);
    console.log(`Fullname: ${job}`);
}
displayPerson(person1);
displayPerson(person2);
*/


//NESTED OBJECTS
/*
const person = {
    fullname: "Skibidi Toilet",
    age: 98673,
    isStudent: false,
    hobbies: ["Toileting","karate","soccer"],
    address: {
        street: "donkey st.",
        city: "diyarbakir",
        country: "USA"
    }
}

console.log(person.address);
console.log(person.address.street);

for(const property in person.address){
    console.log(person.address[property]);
}
*/


// ARRAY OF OBJECTS
/*
const fruits = [{name: "apple",color :"red"},
                {name: "orange",color :"orange"},
                {name: "banana",color :"yellow"}];
*/
