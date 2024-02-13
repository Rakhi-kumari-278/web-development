// // let arr=[]
// // console.log(arr)
// let arr=[10,20,30,40];
// console.log(arr);
// // console.log("length "+  arr.length)//op---4
// arr.push(50)
// console.log(arr)//op--10,20,30,40,50
// let len=arr.push(60,70)
// console.log(arr)//op--10,20,30,40,50,60,70
// console.log(len)
// let re=arr.pop()
// console.log(re)
// console.log(arr)//op--10,20,30,40,50,60
// arr.unshift(5,6)
// console.log(arr)//op--5,6,10,20,30,40,50,60
// arr.shift()
// console.log(arr)//op--6,10,20,30,40,50,60
// let arr1=[10,5,23,45];
// console.log(arr1)
// console.log(arr1.indexOf(45));//op---3
// console.log(arr1.indexOf(50));//op---3
// console.log(arr1.includes(10));//op---true
// console.log(arr1.includes(30));//op----false
// console.log(arr1.reverse());//op---45,23,20,10
// console.log(arr1.sort((a,b)=>a-b));
// console.log("========for-in loop========")
// console.log(arr1.splice(1,3))
// console.log(arr1)

// let re=arr1.slice(1,3)
// re[3]="hi"
// console.log(re)
// console.log(arr1)
// let re=arr1.sort((a,b)=>a-b);

// console.log(re)
// let re1=arr1.sort((a,b)=>b-a);
// console.log(re1)
// for(let index in arr1){
//     console.log(index);
// }
// let str=" ";
// for(let index in arr1){
//     str = str+" "+index;
// }
// console.log(str);

// console.log("========for-of loop============")
// for(let value of arr1){
//     console.log(value*5);
// }
// console.log("use for-of loop to print array elements & add 20 in each elements")

// for(let value of arr1){
//     console.log(value+20);
// }
// console.log("========forEach loop====value========")
// arr1.forEach((value,index,arr1) =>{
//     console.log(value*5,index,arr1);

// }
// );
// console.log("=====================index=======");
// arr1.forEach((value,index,arr1) =>{
//     console.log(index);

// }
// );
// console.log("=====================array=======");
// arr1.forEach((value,index,arr1) =>{
//     console.log(arr1);
// }
// );
// console.log("========forEach loop====value========")

// array1=[2,3,4,5,6,8]
// // array1.forEach((value,index,array1) =>{
// //     if(value%2==0){
// //         console.log(`even no ${value}`);
// //     }
// // }
// // );
// // //======================sum using foreach 
// let sum=0;
// array1.forEach((value,index,array1) =>{
//     sum=sum+value;   
//     }
// )
// console.log(`sum  ${sum}`);


// using map method value multiple by 5=========
// let arr=[10,30,50,40];
// let new_arr=arr.map(val=>val*5);
// console.log(`value multiple by 5  [${new_arr}]`);

// //half of each elements ==============
// let new_arr1=arr.map(val=>val/2);
// // console.log(`half of each elements  [${new_arr1}]`);
// let arr1=[12.4,56.8,67.3];

// //value before decimal============
// let new_arr2=arr1.map(val=> Math.floor(val));
// console.log(`value before decimal  [${new_arr2}]`);

// //boolean representation==============
// let arr2=["hello",21,"",0,null,true,25,27.5,undefined,true,false," "];
// let new_arr3=arr2.map(value=> Boolean(value));
// console.log(`boolean representation  [${new_arr3}]`);

// //length of value
// let arr3=["hello","siddharth","ansh","vinay","aanchal"];
// let new_arr4=arr3.map(value =>  value.length);
// console.log(`length of each value  [${new_arr4}]`);
// //======================================
// let arr4=[10,5,71,35,40,55];
// let new_arr5=arr4.map( value=> value*value*value );
// console.log(`cube of value  [${new_arr5}]`);
// //==========================================
// let arr5=[[10,20,30],[40,50],[60,70]];
// let new_arr6=arr5.map(value =>  value.length);
// console.log(`length of each array as value   [${new_arr6}]`);


//filter method
// let arr=[10,50,60,2,0,100,59];
// let new_arr=arr.filter(value =>{
//     if(value>40){
//         return true;
//     }
// });
// console.log(new_arr)

// let arr1=[10,20,"hi","hello",true,false,0,undefined,null,"good morning"];
// let new_arr1=arr1.filter(value =>{
//     if(typeof(value)==="string"){
//         return true;
//     }
// });
// console.log(new_arr1);

// let arr2=[10,20,"hi","hello",true,false,0,undefined,null,"good morning"];
// let new_arr2=arr1.filter(value =>{
//     if(typeof(value)==="boolean"){
//         return true;
//     }
// });
// console.log(new_arr2);
// let arr=[10,50,60,2,0,100,59];
// let new_arr=arr.filter(value =>{
//     if(value%2==0){
//         return true;
//     }
// });
// console.log("even no   "+new_arr)
// //maximum
let arr5=[10,50,60,2,0,100,59];
let max=arr5.reduce((acc,val) =>{
    if(acc<val){
        acc=val;
        
    }
    return acc 
});
console.log("max value = "+max)
// //minimium
// let arr6=[10,50,60,2,0,100,59];
// let min=arr5.reduce((acc,val) =>{
//     if(acc>val){
//         acc=val;
        
//     }
//     return acc 
// });
// console.log("min value = "+ min)
// //========================
let name="rohan";
let a=56
let newatt=Array.from(name);
console.log(newatt)
let newatt1=Array.from(a);
console.log(newatt1)
// //==========================
let name1="rohan";
console.log(Array.isArray(name1));
// //=====================
let name2=[10,20,39];
console.log(Array.isArray(name2));
 
