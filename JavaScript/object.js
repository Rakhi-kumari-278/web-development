//WAYS TO CREATE OBJECT
//--1---By Using Curly Braces & Literals
let object={};
console.log(object);
let object1={name:"ABC",age:20};
console.log(object1);
//--2--By Using new keyword and object constructor
let object3=new Object();
console.log(object3);
let object4=new Object({city:"ABC",state:"up"});
console.log(object4);
//--2--By Using new keyword and constructor function
let object5=new CreateObject();
function CreateObject(){
    this.name="Ram";
    this.age=30;
}
console.log(object5);
//-----------User defined -----------
let keyname=prompt("enter key");
let value=prompt("enter value");
let obje={
    [keyname]:value,

}
console.log(obje);
//-----------------------
let object6=new CreateObject1("rohan",89);
function CreateObject1(name,age){
    this.name=name;
    this.age=age;
}
console.log(object6);

console.log("===========ACCESSING OBJECT VALUES===============")
console.log("--1-- BY using dot & keyname")

let obj={name:"xyz", "last name":"kumar",age:40,city:"noida"};
console.log(obj.name);
console.log(obj.age);
console.log(obj.city);
//console.log(obj.last name);----error

console.log("--2---By using square brackets & keyname")
let obj1={
    name:"jeet", 
    "last name":"kumar",
    age:40,
    city:"noida"
};
console.log(obj1["name"]);
console.log(obj1["last name"]);
console.log(obj1["age"]);
console.log(obj1["city"]);

console.log("How to insert key-value in object");
let obj2={
    name:"rohan", 
    age:40,
    city:"noida"
};
obj2.gender="male";
obj2.country="india";
obj2.age=45;//updated age
console.log(obj2);





