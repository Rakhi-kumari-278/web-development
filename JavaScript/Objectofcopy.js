console.log("shallow copy")
let obj={
    name:"abc",
    age:20,
}
let obj1=obj;
obj1.age=50;
console.log(obj);//same o/p age:50
console.log(obj1);//same o/p age:50


let obje = { name:"chombi",age:16};

let obj_cpy = obje;
//reference of obj is copied in obj_cpy

obj_cpy.age=20;
console.log(obj_cpy);
//{ name:"chombi",age:20 }
console.log(obje);
//{ name:"chombi",age:20 }





console.log("deep copy");
let obj2={
    name:"abc",
    age:20,
};
obj2.age=60;
console.log(obj);
console.log(obj2);


console.log("example of deep copy");
let object1={
    name:"raghav",
    age:20,
    city:"Noida",
    address:{
        houseNo:123,
        area:"xyz",
    }
};

let object2={
    name:"raghav",
    age:20,
    city:"Noida",
    address:{
        houseNo:123,
        area:"xyz",
    }
};
for(let key in object1){
    object2[key]=object1[key];
}

object2.name="ram";
object2.address.houseNo=15;
console.log(object1);
console.log(object2);

let re=Object.keys(obj);
console.log(re);
let y=JSON.stringify(obj);
console.log(y);
let x=JSON.parse(y);
console.log(x)

