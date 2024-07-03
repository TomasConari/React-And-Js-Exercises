/* 
DESCRIPTION:
Given an integer n and two other values, build an array of size n filled with these two values alternating.

Examples
5, true, false     -->  [true, false, true, false, true]
10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
0, "one", "two"    -->  []
Good luck!

https://www.codewars.com/kata/62a611067274990047f431a8
*/

const alternate = (n, firstValue, secondValue) => {
    let arr = [];
    if((n !== null) && (n > 0)){
      for (let i = 0; i < n; i += 1){
        if (i % 2 === 0){
          arr.push(firstValue);
        };
        if (i % 2 > 0){
          arr.push(secondValue);
        };
      };
    };
    console.log("arr.length:", arr.length);
    return arr;
};

console.log(alternate(5, "blue", "red"));