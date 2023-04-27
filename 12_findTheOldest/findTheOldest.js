const findTheOldest = function(pessoas) {
    let maisVelho=0;
    let nome;
    //for(let i=0; i<pessoas.length; i++) {
    //    if(pessoas[i] > maisVelho){
    //        maisVelho = pessoas[i];
    //    } A LOGICA
    let idade;
    for(let i = 0; i < pessoas.length;i++){
        //if(!pessoas[i].yearOfDeath === null){
            idade = pessoas[i].yearOfDeath - pessoas[i].yearOfBirth;
            if(idade > maisVelho){
                maisVelho = idade;
                nome = pessoas[i].name;
            }
        //}
    }
    return nome;
}
// Do not edit below this line
module.exports = findTheOldest;
