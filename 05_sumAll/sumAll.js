const sumAll = function(num1,num2) {
    let numero = num1-num2;
    let incrementa=0;
    if(numero<0){
        numero = numero*-1;
    }
    if(num1<0 || !Number.isInteger(num1) || !Number.isInteger(num2)){
        return 'ERROR';
    }
    else{
        for(let i=numero+1;i>=0;i--){
            incrementa+=i;
        }
        console.log(incrementa);
        return incrementa;
    }
};
// Do not edit below this line
module.exports = sumAll;
