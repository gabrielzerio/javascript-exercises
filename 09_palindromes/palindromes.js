const palindromes = function (text) {
    let textFormated = text.toLowerCase().replace(/[^a-z]/g, "")
    let palindrome='';
    for(let i=textFormated.length-1;i>=0;i--){
        palindrome += textFormated[i];
    }
    return palindrome === textFormated;
};
palindromes('racecar');
// Do not edit below this line
module.exports = palindromes;
