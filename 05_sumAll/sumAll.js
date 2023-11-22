const sumAll = function(num1, num2) {
    let newArr = []

    for(let i = Math.min(num1, num2); i<= Math.max(num1,num2); i++){
        newArr.push(i)
    }
console.log(newArr);
    if((num1 & num2 >= 0) || (typeof num1 & typeof num2 === Number)){
        
        return newArr.reduce((acc ,cur)=> acc + cur)

    }else {

        return 'ERROR'

    }
   
};

// Do not edit below this line
module.exports = sumAll;
