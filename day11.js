// const prom=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("hello");
//     }, 3000);
// })
// prom.then((data)=>{
//     console.log(data);
// })

// const prom2=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         reject("error");
//     }, 1000);
// })
// prom2.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.error(err);
// })

// const prom3=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("data from prom3");
//     }, 3000);
// })
// const prom4=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//        resolve("data from prom4");
//     }, 1000);
// })
 
// const prom5=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//        resolve("data from prom5");
//     }, 2000);
// })
// Promise.all([prom3,prom4,prom5]).then((data)=>{
//     console.log(data);
// })
 
// Promise.race([prom4,prom3,prom5]).then((data)=>{
//     console.log(data);
// })


// prom3.then((data)=>{
//     console.log(data);
//     return prom4;
// }).then((data)=>{
//     console.log(data);
//     return prom5;
// }).then((data)=>{
//     console.log(data);
//     return;
// }).then((err)=>{
//     console.error(err);
// })

// const promiess= new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         reject("error from data from promiess");
//     }, 3000);
// })
//  const asf=async()=>{
//     const data=await promiess;
//     console.log(data);
//  }
//  asf()

// const asf1=async()=>{
//    try{
//     const data=await promiess;
//     console.log(data);
//    }
//    catch(err){
//     console.error(err);
//    }
// }
// asf1()


// const url=`https://official-joke-api.appspot.com/random_joke`;
// fetch(url).then((res)=>{
//     return res.json();
// }).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.error(err);
// })

// const url="https://randomuser.me/api/";
// const myfun=async()=>{
//     try{
//         const res=await fetch(url);
//         const data=await res.json();
//         console.log(data);
//     }
//     catch(err){
//         console.error(err);
//     }
// }
   
// myfun()

