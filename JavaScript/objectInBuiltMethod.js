console.log("Object InBuilt Method");
let obj={
    name:"abc",
    age:20,
    city:"Noida",
};
let keysfromObject=Object.keys(obj);//return array of given object,s keys
console.log(keysfromObject);

console.log(Object.values(obj));//return array of given object values

console.log(Object.entries(obj));//return array of given objects key-value 
let src1={
    state:"UP",
};
let src2={
    country:"India",
};

console.log(Object.assign(obj,src1,src2));//return multiple sources into target object

const target = { a: 1, b: 2 };
const source1 = { c: 4, d: 5 };
const source2 = { e: 6, f: 7 };
const result = Object.assign(target, source1,source2);
console.log(result);
// Output: { a: 1, b: 2, c: 4, d: 5 }