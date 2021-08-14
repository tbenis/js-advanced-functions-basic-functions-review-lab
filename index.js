// Your code here

function saturdayFun (activity = "roller-skate" ) {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork =  function (activity = "go to the office" ) {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective (param1 = "*"){
    return function (param2  = "special"){
        return `You are ${param1}${param2}${param1}!`;
    }
}

const Calculator = {
    add: function(a,b){
        return a+b;
    },
    subtract: function(a,b){
        return a-b;
    },
    multiply: function(a,b){
        return a*b;
    },
    divide: function(a,b){
        return a/b;
    }
}

function actionApplyer(start, ray) {
    let a = start
  
    for (let i = 0; i < ray.length; i++ ){
      a = ray[i](a)
    }
    return a
  }
  