// const errorHandelFunc=()=>{
//     try{
//         let name=avinash;
//         console.log(name);
//     }catch(err){
//         console.error("thhis is an error");
//     }
// }
// errorHandelFunc()

// const divideTwoNumberUsingTryAndCatch=(num1,num2)=>{
//     try{
//         if(num2===0)  throw new Error("cannot divide by zero")
//             return num1/num2
//     }catch(err){
//       return err.message
//     }
// }
// console.log(divideTwoNumberUsingTryAndCatch(10,0))

// const finaly = (num1, num2) => {
//   try {
//     if (num2 === 0) {
//       throw new Error("cannot divide by zero");
//     }else{
//         return num1 / num2;
//     }
//   } catch {
//       return err.message;
//   }finally{
//       console.log("finally block");
//   }
// };
// console.log(finaly(4,8));
// let userName=prompt("enter your name");
// const stringEmpty=(userName)=>{
//     try{
//          if(userName==="") {
//             throw new Error("name is empty");
//          } else{
//              return userName
//          }

//     }catch(err){
//        return err.message
//     }
// }
// console.log(stringEmpty(userName));

// const promiseCatch=(num1,num2)=>{
//     return new Promise((resolve,reject)=>{
//         if(num2===0){
//             reject("cannot divide by zero")
//         }else{
//             resolve(num1/num2)
//         }
//     })
// }
// const asf=promiseCatch(10,10)

// asf.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

// const asyncErrorHandeling=async (num1,num2)=>{
//     try{
//         if(num2===0)  throw new Error("cannot divide by zero")
//             return num1/num2
//     }catch(err){
//       return err.message
//     }
// }

// console.log(asyncErrorHandeling(10,10))

// const url=`https://official-joke-api.appspot.com/random_`;
// fetch(url).then((res)=>{
//     return res.json();
// }).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.error("url invalid/something went wrong");
// })

// const url = "https://randomuser.me/";
// const myfun = async () => {
//   try {
//     const res = await fetch(url);
//     const data = await res.json();
//     console.log(data);
//   } catch (err) {
//     console.error("url invalid/something went wrong");
//   }
// };

// myfun();
