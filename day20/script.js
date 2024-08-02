// localStorage.setItem("name","avinash")
// localStorage.setItem("age",24)
// localStorage.setItem("country","india")

// console.log(localStorage.getItem("name"))
// console.log(localStorage.getItem("age"))
// console.log(localStorage.getItem("country"))

// const myObj = {
//     name:"avinash",
//     age:24
// }
// localStorage.setItem("obj",JSON.stringify(myObj))
// console.log(JSON.parse(localStorage.getItem("obj")))


// const userName=document.getElementById("name")
// const userEmail=document.getElementById("email")
// const form=document.getElementById("form")
// const display=document.getElementById("result")
// const clear=document.getElementById("clear")

// const displayData=()=>{
//     const name=localStorage.getItem("name")
//     const email=localStorage.getItem("email")
//     display.innerHTML=`
//     <h2>Name: ${name}</h2>
//     <h2>Email: ${email}</h2>
//     `
// }

// form.addEventListener("submit",(e)=>{
//     e.preventDefault()
//     const name=userName.value
//     const email=userEmail.value
//     localStorage.setItem("name",name)
//     localStorage.setItem("email",email)
//    displayData();
// })

// // Log localStorage content before removal
// console.log(localStorage.getItem('name'));  // Output: Name saved
// console.log(localStorage.getItem('email')); // Output: Email saved

// // Remove item from localStorage
// localStorage.removeItem('name');

// // Log localStorage content after removal
// console.log(localStorage.getItem('name'));  // Output: null
// console.log(localStorage.getItem('email')); // Output: Email saved



// ---------------------------------------------------------Session Storage task-------------------------------------------------------------------------

// sessionStorage.setItem("name","avinash")
// sessionStorage.setItem("age",24)
// sessionStorage.setItem("country","india")

// console.log(sessionStorage.getItem("name"))
// console.log(sessionStorage.getItem("age"))
// console.log(sessionStorage.getItem("country"))

// const myObj = {
//     name:"avinash",
//     age:24
// }
// sessionStorage.setItem("obj",JSON.stringify(myObj))
// console.log(JSON.parse(sessionStorage.getItem("obj")))

// const userName=document.getElementById("name")
// const userEmail=document.getElementById("email")
// const form=document.getElementById("form")
// const display=document.getElementById("result")


// const displayData=()=>{
//     const name=sessionStorage.getItem("name")
//     const email=sessionStorage.getItem("email")
//     display.innerHTML=`
//     <h2>Name: ${name}</h2>
//     <h2>Email: ${email}</h2>
//     `
// }

// form.addEventListener("submit",(e)=>{
//     e.preventDefault()
//     const name=userName.value
//     const email=userEmail.value
//     sessionStorage.setItem("name",name)
//     sessionStorage.setItem("email",email)
//    displayData();
// })


// // Log localStorage content before removal
// console.log(sessionStorage.getItem('name'));  // Output: Name saved
// console.log(sessionStorage.getItem('email')); // Output: Email saved

// // Remove item from localStorage
// sessionStorage.removeItem('name');

// // Log localStorage content after removal
// console.log(sessionStorage.getItem('name'));  // Output: null
// console.log(sessionStorage.getItem('email')); // Output: Email saved

const saveBothStorage=(key,value)=>{
    localStorage.setItem(key,value)
    sessionStorage.setItem(key,value)

    console.log(`localStorage: ${localStorage.getItem(key)}`)
    console.log(`sessionStorage: ${sessionStorage.getItem(key)}`)
}
saveBothStorage("name","avinash")

const clearStorage=()=>{
    localStorage.clear()
    console.log("localStorage cleared")
    sessionStorage.clear()
    console.log("sessionStorage cleared")
}
clearStorage()

console.log(localStorage.length)
console.log(sessionStorage.length)

