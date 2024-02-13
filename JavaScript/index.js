// console.log("hello everyone");
// let a=+prompt("enter a");
// let b=+prompt("enter b");
// let c=+prompt("enter c");
// function sum(x,y,z){
//     console.log(x+y+z);
// }
// sum(a,b,c);

// let a=+prompt("enter a");
// let b=+prompt("enter b");
// let c=+prompt("enter c");
// let sum=function(x,y,z){
//     console.log(x+y+z);
// }
// sum(a,b,c);

//1=======
//let x=+prompt("enter x");
// function square(x){
//     console.log(x*x);
// }
// square(x);

// let x=+prompt("enter x");
// function cube(x){
//     console.log(x*x*x);
// }
// cube(x);
// ==========================================

//2=========
// let year= +prompt("enter the year:");
// if((year%4==0&&year%100!=0)||year%400==0){
//     console.log(`leap year ${year}`);
// }
// else{
//     console.log(`not leap year ${year}`);
// }

//3===================

// 
//4=========
// let num=+prompt("enter the number");
// if(num%2==0){
//     console.log(`even number ${num}`);
// }
// else{
//     console.log(`odd number ${num}`);
// }

//5========
// let num=+prompt("enter the number");
// let sum=0;
// function checkSumEven(x){
// for(let i=1;i<=num;i++){
// if(i%2==0){
//     sum=sum+i;
//     console.log(`even no. ${i}`);
// }
// }
// console.log(`sum of even number ${sum}`);
// }
// checkSumEven(num);
//6==============
// let num=+prompt("enter the number");
// let sum=0;
// for(let i=1;i<=num;i++){
// if(i%2!==0){
//     sum=sum+i;
// }
// }
// console.log(`sum of odd number ${sum}`);

//7================
// let n=+prompt("enter the number:");
// function countofDigit(x){
// let count=0;
// while(n!=0){
//     n=Math.floor(n/10);
//     count++;
// }
// console.log(`count of digits in number ${count}`);
// }
// countofDigit(n);
//8================
// let num=+prompt("enter the number:");
// let result=num=>{
// let sum=0;
// let rem;
// while(num>0){
//     rem=num%10;
//     sum=sum+rem;
//     num=Math.floor(num/10);
// }

// console.log(`sum of digits in number ${sum}`);
// }
// result(num);
//9 =====
// let num=+prompt("enter the no.");
// console.log(`multiplication table of  ${num}`);
// function findMultication(num) {
// for(let i=1;i<=10;i++){
//   console.log(`${num}*${i}=`+num*i );
// }
// }
// findMultication(num);
// //10======
// let num =+prompt("enter the number");
// function findReverse(num){
// let numStr=num.toString();
// for(let i=numStr.length-1;i>=0;i--){
//   console.log(numStr[i]);
// }
// }
// findReverse(num);
//========immediate invoke function
// (function greet(){
//     console.log("hello world");
// })()

//========immediate invoke function for square and cube ============
// let x =+prompt("enter the number");
// (function(a){
//     console.log(`square of ${x}:`+a*a);
//     console.log(`cube of ${x}:`+a*a*a);
// })(x);

//======leap year using function declaration========
// let year=+prompt("enter the year:");
// function findLeap(x){
//     if((x%4==0 && x%100!==0)||x%400==0){
//         console.log(`leap year ${x}`);
//     }else{
//     console.log(` not leap year ${x}`);
// }
// }
// findLeap(year);
// 
// let year=+prompt("enter the year");
// function checkLeap(year){
//     if(year %100==0){
//         if(year%400==0){
//             console.log(`leap year ${year}`);
//         }
//         else{
//             console.log(`not leap year ${year}`);
//         }    
//     }
//     else{
//     if(year%4==0){
//         console.log(`leap year ${year}`);
//     }
//     else{
//         console.log(`not leap year ${year}`);
//     }
// }

// }
// checkLeap(year);


//!================

// let n=+prompt("enter no:");
// count=0;
// for(let i=1;i<n.length;i++){
//    count++;
// }
// console.log(count)

// let n=+prompt("enter no:");
// for(let i=1;i<=n;i++){
// if(i%2==0){
//    console.log("even no"+  i);
// }
// }


// let n=+prompt("enter no:");
// for(let i=1;i<=n;i++){
// if(i%2!=0){
//    console.log("odd no  "+  i);
// }
// }



// let n=+prompt("enter no:");
// fact=1;
// for(let i=1;i<=n;i++){
// fact=fact*i;
// }
// console.log("factorial of no: "+fact);

// let n=+prompt("enter no:");
// fact=1;
// function printFact(n){
// for(let i=1;i<=n;i++){
// fact=fact*i;
// }
// console.log(fact);
// }
// printFact(n);

// let sum=0;
// function findSum(x){
//     for(let i=1;i<=x;i++){
//         sum=sum+i;
//     }
//     console.log(`sum of numbers: ${sum}`)
//     console.log(`average of number: ${sum/x }`);
// }
// findSum(100);
// let num =+prompt("enter the no");
// function sumEven(num){
//    let evensum=0;
//    let oddsum=0;
//   for(let i=1;i<=num;i++){
//     if(i%2==0){
//         evensum=evensum+i;
//         console.log(`even no ${evensum}`);   
//     }
//     else{
//         oddsum=oddsum+i;
//         console.log(`odd no ${oddsum}`); 
//     }
//   } 
// }
// sumEven(num)
//factorial number=====================
// let num=+prompt("enter the number");
// let result = num =>{
//   let fact=1;
//   let factfinal=1;
//   if(num==0){
//     console.log("number is zero")
//   }else{
//   for(let i=1;i<=num;i++){
//     fact=fact*i;   
//   }
// }
//   console.log(`fact ${fact}`);
//   for(let i=1;i<=fact;i++){
//     factfinal=factfinal*i;   
//   }
//   console.log(`factfinal ${factfinal}`);
// }
// result(num);

// const lowerNumber = +(prompt('Enter lower number: '));
// const higherNumber = +(prompt('Enter higher number: '));
// console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);
// function findPrime(lowerNumber,higherNumber){
//   let count=0;
//   for(let i=lowerNumber;i<=higherNumber;i++){
//   for(let j=2;j<i;j++){
//     if(i%j==0){
//       flag=1;
//       break;
//     }
//   }
//     if(i>1&&count==0){
//       console.log(`prime number ${i}`)
//     } 
//   }
// }

//   findPrime(lowerNumber,higherNumber);
//for range prime no========
// var totalPrimeNumber = 0;
// for(let i=1; i<=60; i++) {
//     for(let j= 2; j< i; j++) {
//         if(i%j ==0) {
//             console.log(i, "is not a prime number");
//         }
//         console.log(i, "is a prime number");
//         totalPrimeNumber+=1;
//     }
// }
// let num=+prompt("enter the number ...");
// let result = num =>{
//   let count=0;
//   for(i=1;i<=num;i++){
//     n=i;
//   for(let j=1;j<=Math.floor(n/2);j++){
//     if(n%j==0){
//       count++;
//       break;
//     }
//   }
//     if(count==0){
//       console.log(`prime number ${n}`)
//     }else{
//       console.log(`not prime number ${n}`)
//     }
//   }
// }
//   result(num);


// let n=+prompt("enter the number ...");
// let result = n=>{
//   let sum=0;
// for(let i=1;i<=Math.floor(n/2);i++){
//   if(n%i==0){

//     sum=sum+i;
//   }
// }
// if(sum==n){
//   console.log(`perfect no ${n}`)
// }else{
//   console.log(`not perfect no ${n}`)
// }
// }
// result(n)
// let num=+prompt("enter the no");
// let result=num==0?1:Math.floor(Math.log10(num)+1);
// console.log(result); 
// let num=+prompt("enter the no");
// let result=Math.floor(Math.log10(num)+1);
// console.log(result);  

// let num=+prompt("enter the no");
// let result=(Math.log10(num)+1);
// console.log(result);  
//12 power================
// let num=+prompt("enter the no.");
// let pow=+prompt("enter the power.");
// let findPow =(num,pow)=>{
//    let result=1;
//    for(let i=1;i<=pow;i++){
//     result=result*num;
//    }
//    console.log(`Power of num ${result}`);
// }
// findPow(num,pow);

// let n=+prompt("enter the number ...");
// let result = n=>{
//   if(n%10==7){
//     console.log(`last digit is 7 of ${n}`);
//   }else{
//     console.log(`no last digit is 7 of ${n}`);
//   }
// }
// result(n); 

// let n=+prompt("enter the number ...");
// let result = n=>{
//   for(let i=1;i<=n;i++){
//   if(i%10==7|| i%7==0){
//     console.log(`end with 7 or divided by 7: ${i}`);
//   }else{
//     console.log(`no end with 7 or divided by 7: ${i}`);
//   }
// }
// }
// result(n); 
// let result =n=>{
//   for(let i=1;i<=n;i++){
//     console.log(`=======when ${i} =======`)
//     if(i%3==0){
//       console.log(`Fizz ${i}`);
//     }
//     if(i%5==0){
//       console.log(`Buzz ${i}`);
//     }
//     if (i%3==0||i%5==0){
//       console.log(`FizzBuzz ${i}`);
//     }
//     else{
//       console.log(`not multiple of 3 & 5`);
//     }
//   }
// }
// result(500);

// const lowerNumber = +(prompt('Enter lower number: '));
// const higherNumber = +(prompt('Enter higher number: '));

// console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

// // looping from lowerNumber to higherNumber
// for (let i = lowerNumber; i <= higherNumber; i++) {
//     let flag = 0;

//     // looping through 2 to user input number
//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             flag = 1;
//             break;
//         }
//     }

//     // if number greater than 1 and not divisible by other numbers
//     if (i > 1 && flag == 0) {
//         console.log(i);
//     }
// }

// program to check an Armstrong number of three digits
//=========================================================
let sum = 0;
const number = prompt('Enter a three-digit positive integer: ');

// create a temporary variable
let temp = number;
while (temp > 0) {
    // finding the one's digit
    let remainder = temp % 10;

    sum += remainder * remainder * remainder;

    // removing last digit from the number
    temp = parseInt(temp / 10); // convert float into integer
}
// // check the condition
// if (sum == number) {
//     console.log(`${number} is an Armstrong number`);
// }
// else {
//     console.log(`${number} is not an Armstrong number.`);
// }
//=======================================
// program to check an Armstrong number of n digits

// take an input
// const number = prompt("Enter a positive integer");
// const numberOfDigits = number.length;
// let sum = 0;

// // create a temporary variable
// let temp = number;

// while (temp > 0) {

//     let remainder = temp % 10;

//     sum += remainder ** numberOfDigits;

//     // removing last digit from the number
//     temp = parseInt(temp / 10); // convert float into integer
// }

// if (sum == number) {
//     console.log(`${number} is an Armstrong number`);
// }
// else {
//     console.log(`${number} is not an Armstrong number.`);
// }
//Strong number=======================
// let num=+prompt("enter the no");
// let result=(num)=>{
//      let sum=0;
//      let fact=1;
//      let rem=0;
//      while(num>0){
//       rem=num%10;
//       for(i=1;i<=rem;i++){
//         fact=fact*i;
//       }
//     num=Math.floor(num/10); 
//     }
//     sum=sum+fact;
    
//      if(sum==num){
//       console.log(`strong no ${num}`);
//      }else{
//       console.log(`not strong no ${num}`);
//      }
// }
// result(num);
//Math.floor(Math.log10(num)+1)
// let string=prompt("enter string");

// function CheckPalin(string){
//   let len= string.length;
// for(let i=0;i<len/2;i++){
//   if(string[i]!=string[len-1-i]){
//     console.log("not palindrome")
//   }
//   console.log(" palindrome")
// }
// }
// CheckPalin(string)

// //destructuring in array with obj=============================
// let data=[
//   {
//     name:"Ram",
//     age:16,
//   },
//   {
//     name:"Shyam",
//     age:15,
//   },
//   {
//     name:"Rohan",
//     age:50,
//   },
//   {
//     name:"Sohan",
//     age:20,
//   },
//   {
//     name:"Mohan",
//     age:30,
//   },
//   {
//     name:"Sita",
//     age:10,
//   }
// ];
// let new_arr=data.map(val=>{
//   return val.name
// });
// console.log(new_arr);
// //==================================
// let new_arr1=data.map(val=>{
//   return val.age
// });
// console.log(new_arr1);
// //==========================
// data.map(val=>{
//   console.log(val.name);
// });
// data.map(val=>{
//   console.log(val["age"]);
// });
// =====================String===========
// let str1=""//empty string
// let str2=new String('');//empty string
// // console.log(str1);
// let str="Hello";
// console.log(str[2]);
// // str[2]="m"; it will not work
// console.log(str);

// console.log(str.toLowerCase());

// console.log(str.toUpperCase());

// console.log(str.includes("ell"));
// console.log(str.includes("oll"));

// console.log(str.indexOf("l"));
// console.log(str.indexOf("l",5));

// console.log(str.startsWith("l"));
// console.log(str.startsWith("H"));

// console.log(str.endsWith("l"));
// console.log(str.endsWith("d"));

// console.log(str.charCodeAt(0));

// console.log(str.charAt(6));

// console.log(str.slice(0,-3));//(0,2)
// console.log(str.slice(0,3));

// console.log(str.substring(0,3));
// console.log(str.substring(-9,4));

// let allDivs=document.getElementsByTagName("div");
// let parent=allDivs[0];
// parent.style.display="flex";
// parent.style.backgroundColor="red";
// parent.style.height="200px";
// parent.style.justifyContent="space-between";
// parent.style.padding="20px";

// for(let i=1;i<allDivs.length;i++){
//     // console.log(allDivs[i]);
//     allDivs[i].style.height="100px"
//     allDivs[i].style.width="200px"
// }
// allDivs[1].style.backgroundColor="blue";
// allDivs[2].style.backgroundColor="red";
// allDivs[3].style.backgroundColor="yellow";
// allDivs[2].style.alignSelf="center";


// let a=10;
// console.log(a);
// try {
//     throw new Error("i am not defined");
//     b
// } catch (error) {
//     console.log(error.message);
//    console.log(error);
   
// }
// console.log("end")


/*
let age='abc';
try{
    if(isNaN(age)){
        throw new Error("it is not a number")
    }
    else{
        console.log("your age is ${age}")
    }
}
catch(error){
    console.log("danger "+error.message);
}
finally{
    console.log("i am finally block");
}
console.log("end")

*/


