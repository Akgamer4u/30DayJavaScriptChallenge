const numberPrint=(number)=>{
    console.log("for loop")
    for(let i=1;i<=number;i++){
        console.log(i)
    }
    console.log("while loop")
    number=0
    while(number<10){
        number++
        console.log(number)
    }
}
numberPrint(10)

const fivetable=()=>{
    console.log("5 table")
    for(let i=1;i<=10;i++){
        console.log(5*i)
    }
}
fivetable()

const patternprinting = (number) => {
  console.log("pattern printing");
  for (let i = 1; i <= number; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
      stars += "*";
    }
    console.log(stars);
  }
};
patternprinting(5);


const sumofnumber = (n)=>{
    console.log("sum of number 1-10")
    let sum=0
    let i=0;
   while(i<=n){
       sum+=i
        i++
   }
   console.log(sum)
}
sumofnumber(10)


const factorial = (n) => {
    console.log("factorial");
    let res = 1;
    if (n === 0) {
        console.log(res);
    } else {
       do{
           res *=n;
           n--;
       }while(n>0)
       {
           console.log(res);
       }
    }
};
factorial(7);


const skipAndBreakLoop = () => {
    console.log("skip loop");
    for (let i = 0; i < 10; i++) {
        if (i === 5) {
            console.log("skipping 5");
            continue;
        }
        console.log(i);
    }
     console.log("\n");
     console.log("break loop");
    for (let i = 0; i < 10; i++) {
        if (i === 7) {
            console.log("breaking at 7");
            break;
        }
        console.log(i);
    }
};
skipAndBreakLoop();


const dowhileloopusing=(n)=>{
    console.log("do while loop printing 1-5") 
    let i=1
    do{
        console.log(i)
        i++
    }while(i<=n)
}
dowhileloopusing(5)
