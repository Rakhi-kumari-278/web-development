let obj={
    name:"abc",
    age:20,
    city:"Noida",
    print:undefined,
    display:function(){
        console.log("i am function");
    },
    
};
console.log(obj);
//JSON does not consider undefined & function literals
console.log(JSON.stringify(obj));//object  convert into string

console.log(JSON.parse(JSON.stringify(obj)));//string convert into object