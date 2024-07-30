const  numberCheck = (n) => {
    if(n===0){
        return "Zero";
    }else if(n>0){
        return "Positive";
    }else{
        return "Negative";
    }
}
console.log(numberCheck(0))

const eligibleForVoting=(age)=>{
    if(age<0){
        return "invalid input"
    }
    else if(age>=18){
        return "person is eligible for voting";
    }else{
        return "person is not eligible for voting";
    }
}
console.log(eligibleForVoting(19))

const largestThreeNum=(a,b,c)=>{
    if(a>b){
        if(a>c){
            return `${a} is largest`;
        }else{
            return `${c} is largest`;
        }
    } else if(b>c){
        return `${b} is largest`;
    } else{
        return `${c} is largest`;
    }
}
console.log(largestThreeNum(5,2,10))

const daysName=(day)=>{
    switch (day) {
        case 1: return "monday"
           break;
        case 2: return "tuesday"
        break;
        case 3: return "wednesday"
        break;
        case 4: return "thursday"
        break;
        case 5: return "friday"
        break;
        case 6: return "saturday"
        break;
        case 7: return "sunday"
        break;
        default: return "invalid input"

    }
}
console.log(daysName(4))
console.log(daysName(2))
console.log(daysName(3))
console.log(daysName(7))
  const grade=(score)=>{
    switch(true){
        case 100 >= score && score > 80:
    return `Your score is ${score} You got grade A`;
    break;
  case 80 >= score && score > 50:
   return `Your score is ${score} You got grade B`;
    break;
  case 50 >= score && score > 40:
    return `Your score is ${score} You got grade c`;
    break;
  case 40 >= score && score > 20:
    return `Your score is ${score} You got grade D`;
    break;
  case 20 >= score && score >= 0:
    return `Your score is ${score} You got grade F`;
    break;
        default: return "invalid input"
    }

  }
  console.log(grade(90))
  console.log(grade(60))
  console.log(grade(40))
  console.log(grade(2))
  console.log(grade(0))

const oddOrEven=(num)=>{
   return num%2===0 ?`${num} is even` : `${num} is odd`
}
console.log(oddOrEven(4))
console.log(oddOrEven(5))

const leapYear = (year) => {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return `${year} is a leap year`;
      } else {
        return `${year} is not a leap year`;
      }
    } else {
      return `${year} is a leap year`;
    }
  } else {
    return `${year} is not a leap year`;
  }
};
console.log(leapYear(2020));
console.log(leapYear(2021));
console.log(leapYear(2022));
