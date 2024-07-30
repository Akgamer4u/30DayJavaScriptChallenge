// class Person{
//     constructor(name,age){
//         this.name=name
//         this.age=age
//     }
//     greet(){
//        return`hello ${this.name} nice to meet you. you are ${this.age} year old`
//     }
//     birthyear(x){
//         return x-this.age
//     }
//     static geeting(){
//         return `hello nice to meet you`
//     }

// }
// class Student extends Person{
//     constructor(name,age,student_id,total_students){
//         super(name,age)
//         this.student_id=student_id
//         this.total_students=total_students++
//     }
//     id(){
//         return this.student_id
//     }
//     greet(){
//         return `hello ${this.name} nice to meet you. you are ${this.age} year old and your id is ${this.student_id}`
//     }
   
// }

// const student=new Student("avinash",24,1234,)
// console.log(student1)
// console.log(student1.id())
// console.log(student1.greet())

// console.log(Person.geeting())

// class Student{
//     static allstudents=0
//     constructor(name,age,id){
//         this.name=name
//         this.age=age
//         this.id=id
//         Student.allstudents++
//     }  
//     getstudent(){
//         return `hello ${this.name} nice to meet you. you are ${this.age} year old and your id is ${this.id}`
//     }
// }
// const avinash=new Student("avinash",24,1234)
// const jhon=new Student("jhon",24,1235)
// const harsh=new Student("harsh",24,1236)

// console.log(avinash.getstudent())
// console.log(jhon.getstudent())
// console.log(harsh.getstudent())
// console.log("total students",Student.allstudents)


// class Person{
//     constructor(firstname,lastname){
//         this._firstname=firstname
//         this._lastname=lastname
//     }

//     get Fullname(){
//         return `${this._firstname} ${this._lastname}`
//     }

//     set Fullname(name){
//         const [firstname,lastname]=name.split(" ")
//         if(firstname!=="" && lastname!==""){
//             this._firstname=firstname
//             this._lastname=lastname
//         }
//         else{
//             console.log("invalid name") 
//         }
       
//     }
       
//     }
       
    

// const person=new Person("avinash","kumar")
// console.log(person.Fullname)
// person.Fullname="harsh kumar"
// console.log(person.Fullname)


// class BankAccount {
//     #balance;

//     constructor(initialBalance) {
//         this.#balance = initialBalance;
//     }

//     deposite(amount) {
//         if(amount>0){
//         this.#balance += amount;
//         console.log(`your deposited amount is :- ${amount} and your current balance is :- ${this.#balance}`)
//         }else{
//             console.log("invalid amount")
//         }
//     }

//     withdraw(amount) {
//         if(amount>0 && this.#balance>=amount){
//             this.#balance -= amount;
//             console.log(`your withdraw amount is :- ${amount} and your current balance is :- ${this.#balance}`)
//         }else{
//             console.log("Invalid withdrawal amount or insufficient funds")
//         }
//     }

//     getBalance() {
//         return `your current balance is :- ${this.#balance}`
//     }
// }

// const account = new BankAccount(1000);

// account.withdraw(900);
// account.withdraw(100);
// account.withdraw(50);


// console.log(account.getBalance());


