//  export const add=(a,b)=>{
//     return a+b
// }
//  export const obj={
//     name:"avinash",
//     age:24,
//     greeting(){
//         return `my name is ${this.name} and my age is ${this.age}`
//     }
// }

// export default function User(){
//     return "hello world"
// }
 


const name="avinash"
const age=24

const oddOrEven=(num)=>{
   return num%2===0 ?`${num} is even` : `${num} is odd`
}

const denominator=(num)=>{
    if(num===0){
        return "invalid input"
    }
    return 10/num
}
export {name,age,oddOrEven,denominator}