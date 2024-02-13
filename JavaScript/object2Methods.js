console.log("------------object methods---------");
console.log("--1---BY USING DOT");
let obj={
    name:"abc",
    age:20,
    display:function(){
        console.log("hello from method");
    }
};
console.log(obj);//complete object
obj.display();//call the display
console.log(obj.display);//returns the complete display function

console.log("---2----BY USING square bracket[]");
obj["display"]();

console.log("=======example===============");
let obj2={
    name:"xyz",
    age:20,
    display:function(){
        console.log("hello I am object method");
        console.log(this.name);
        console.log(this.age);
    },
    print:()=>{
        console.log("I am arrow function")
        console.log(obj2.name);
        console.log(obj2.age);
    }
};
console.log(obj2);
obj2.display();//by dot
obj2["display"]();//square bracket display normal function
obj2["print"]();//square bracket print arrow function

console.log("in operator");
console.log("age" in obj2);//true
console.log("city"in obj2);//false

console.log("for- in loop");
for(let prop in obj2){
    console.log(prop);//keyname
    //console.log(obj2[prop]);//values
}
