const removeFromArray = function(vetor, ...object) {
    const newVetor = [];
    vetor.forEach(element => {
        if(!(object.includes(element))){
            newVetor.push(element);
        }
    });
    console.log(newVetor);
    return newVetor;
};
removeFromArray([1,2,3,4],3);

// Do not edit below this line
module.exports = removeFromArray;
