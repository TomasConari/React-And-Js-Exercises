/*
Description:
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

https://www.codewars.com/kata/5842df8ccbd22792a4000245
*/

const expandedForm = (num) => {
    const str = num.toString();
    const separatedNum = str.split("");
    const reversed = separatedNum.reverse();
    const expoNumbers = reversed.map((el, i) => el * Math.pow(10, i));
    const filteredNumbers = expoNumbers.filter((el) => el > 0);
    const originalOrder = filteredNumbers.reverse();
    return originalOrder.join(" + ");
};
console.log(expandedForm(3423));