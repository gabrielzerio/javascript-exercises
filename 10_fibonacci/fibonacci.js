
const fibonacci = function(index) {
    if(index<=0){ 
        return 'OOPS';
    }

    let firstNum = 0;
    let secondNum = 1;
    for(let i=0; i<index; i++){
        if(i===1){
            secondNum=1;
        }
        else{
    const soma = secondNum;
    secondNum = firstNum+secondNum;
    firstNum = soma;
    }
}   
    return secondNum;
}
// Do not edit below this line
module.exports = fibonacci;
