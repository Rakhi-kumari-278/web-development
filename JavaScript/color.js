let p=document.querySelector("p");

let arr=["pink","red","green","yellow","blue"];

function backgroundColor(){
    let index=Math.floor(Math.random()*arr.length);
    p.style.backgroundColor=arr[index];
    
}