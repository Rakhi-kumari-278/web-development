let hour=document.getElementsByClassName("hr");
let minute=document.getElementsByClassName("min");
let second=document.getElementsByClassName("sec");
// console.log(hour);
// console.log(minute);
// console.log(second);

let hr_block=hour[0];
let myHour=0;

let min_block=minute[0];
let myMin=0;

let sec_block=second[0];
let mySec=0;

let id;

let stop=document.getElementsByTagName("button");
// console.log(stop)

stop[0].addEventListener("click",()=>{
    clearInterval(id);
})

let div_container=document.createElement("div");
console.log(div_container);
div_container.style.height="20vh";
div_container.style.width="40vh";
div_container.style.border="2px solid black";
div_container.style.marginLeft="5%";
div_container.style.overflow="scroll";

let section=document.querySelector("section");
console.log(section)

section.insertAdjacentElement("afterend",div_container);

stop[1].addEventListener("click",()=>{
    clock();
})
function clock(){
    id=setInterval(()=>{
        if(mySec<=60){
            sec_block.textContent=++mySec+"sec";
        }
        if(mySec==59){
            min_block.textContent=++myMin+"min";
            mySec=0;
        }
        if(myMin==59){
            hr_block.textContent=++myHour+"hr";
            myMin=0;
        }
    },1000)
}
clock();
