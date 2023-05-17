const palindromes = (text) => {
    const palindrome = text.toLowerCase().replace(/[^a-z]/g, "");
    return palindrome.split('').reverse().join("") == palindrome;
}
    

console.log(palindromes('racecar'));

// Do not edit below this line
module.exports = palindromes;
