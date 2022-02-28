function saturdayFun(fun = "roller-skate"){
   return `This Saturday, I want to ${fun}!`;
 
}

const mondayWork = function(task = "go to the office"){
    return `This Monday, I will ${task}.`;
}

function wrapAdjective(result = "*"){
  return function whateva(howeverYouWish = "special"){
    return  `You are ${result}${howeverYouWish}${result}!`;

}
}