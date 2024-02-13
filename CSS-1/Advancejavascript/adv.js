let my_Promise=new Promise((resolve,reject)=>{
    let titliSaid="yes";
    if(titliSaid=="yes"){
        setTimeout(()=>{
            resolve("Siddhath is happy")
        },3000)
    }else{
        setTimeout(()=>{
            reject("we are happy")
        },3000)
    }

})
//wrong console.log(my_Promise)
// my_Promise.then((res)=>{console.log(res)})
// .catch((err)=>{console.log(err)}).finally(()=>{
//     console.log("i will handle settled state")
// })
my_Promise.then((response)=>{
    console.log(response)
})
my_Promise.catch((error)=>{
    console.log(error)
})
my_Promise.finally(()=>{
    console.log("i have handled settled state")
})
console.log("hi")