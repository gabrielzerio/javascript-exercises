const reverseString = function(input) {
    let tamanho=input.length;
    let char='';
    for(let i=tamanho;i>=0;i--){
        char += input.charAt(i);
    }
    return char;
};
// Do not edit below this line
module.exports = reverseString;
