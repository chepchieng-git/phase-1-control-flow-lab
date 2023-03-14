
function scuberGreetingForFeet(rideLength){
  // Write your code here!
  if(rideLength <= 400) {
    return "This one is on me!"
  }else if(rideLength > 2000, rideLength < 2500) {
    return "I will gladly take your thirty bucks."
  }else if(rideLength > 2500) {
    return "No can do."
  }
}
console.log(scuberGreetingForFeet(2501))


/*
function ternaryCheckCity(NYC){
  // Write your code here!
  return (NYC ? "Ok, sounds good." : "No go.")

  } */
  function ternaryCheckCity(city) {
    if (city === "NYC") {
      return "Ok, sounds good."
    }else{
      return "No go."
    }
  }


  const charm = "generous";

function switchOnCharmFromTip(charm){
  // Write your code here!

  switch (charm) {
    case "generous":
    return "Thank you so much.";

      break;
    case "not as generous":
     return "Thank you.";
      break;
    default: 
     return "Bye."
      break;
  }
 
}


/*

function isEvenOrOdd(evenOdd) {
  if (evenOdd%2 == 0){ 
  return "Number is even"
  } else {
    return "Number is odd"
  }
}
console.log(isEvenOrOdd(10))
console.log(isEvenOrOdd(9))


function findLargest(num1,num2) {
  if(num1>num2) {
    return "Num1 is the largest"
  } else if(num1<num2){
    return "num2 is the largest"    
  }else if(num1==num2) {
    return "num1 and num2 are equal"
  }
}

console.log(findLargest(9,9))

*/