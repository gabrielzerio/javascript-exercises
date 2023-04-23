const add = function(num1,num2) {
	const add = num1+num2;
  return add;
};

const subtract = function(num1,num2) {
	const sub = num1-num2;
  return sub;
};

const sum = function(vetor) {
	let increment=0;
  vetor.forEach(element => {
    increment+=element;
  });
  return increment;
};
const multiply = function(vetor) {
  let soma=1;
  for(let i=0;i<vetor.length;i++){
    soma= soma * vetor[i];
  }
  console.log(soma);
  return soma;
};
const power = function(numerador,denominador) {
	let pot = Math.pow(numerador,denominador);
  return pot;
};

const factorial = function(factor) {
	let soma=1;
  for(let i=factor; i>0; i--){
    soma*=i;
  }
return soma;
};
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
