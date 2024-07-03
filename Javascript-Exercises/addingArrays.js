/*
Create a function that takes an array of letters, and combines them into words in a sentence.
The array will be formatted as so:
[['J','L','L','M']
,['u','i','i','a']
,['s','v','f','n']
,['t','e','e','']]
The function should combine all the 0th indexed letters to create the word 'just', all the 1st indexed letters to create the word 'live', etc.
Shorter words will have an empty string in the place once the word has already been mapped out (see the last element in the last element in the array).
Examples:
arrAdder([
['J','L','L','M'],
['u','i','i','a'],
['s','v','f','n'],
['t','e','e','']
]) // => "Just Live Life Man"
arrAdder([ 
  [ 'T', 'M', 'i', 't', 'p', 'o', 't', 'c' ],
  [ 'h', 'i', 's', 'h', 'o', 'f', 'h', 'e' ],
  [ 'e', 't', '', 'e', 'w', '', 'e', 'l' ],
  [ '', 'o', '', '', 'e', '', '', 'l' ],
  [ '', 'c', '', '', 'r', '', '', '' ],
  [ '', 'h', '', '', 'h', '', '', '' ],
  [ '', 'o', '', '', 'o', '', '', '' ],
  [ '', 'n', '', '', 'u', '', '', '' ],
  [ '', 'd', '', '', 's', '', '', '' ],
  [ '', 'r', '', '', 'e', '', '', '' ],
  [ '', 'i', '', '', '', '', '', '' ],
  [ '', 'a', '', '', '', '', '', '' ] ]) // => "The Mictochondria is the powerhouse of the cell"

https://www.codewars.com/kata/59778cb1b061e877c50000cc
*/

const arrAdder = (arr) => {
    const phraseArr = arr[0].map((el, i) =>
        arr.map((el, j) => arr[j][i]).join('')
    );
    const words = phraseArr.join(' ');
    return words;
};


/* 
Code with console log for explanation:

const arrAdder = (arr) => {
  const phraseArr = arr[0].map((el, i) => {
    const columnWords = arr.map((el, j) => {
      console.log(`Iteration: i=${i}, j=${j}`);
      return arr[j][i];
    });
    console.log(`Column Words: ${columnWords}`);
    return columnWords.join('');
  });

  console.log(`Phrase Array: ${phraseArr}`);
  const words = phraseArr.join(' ');
  console.log(`Final Result: ${words}`);
  return words;
};

const exampleArr = [
  ['T', 'M', 'i', 't', 'p', 'o', 't', 'c'],
  ['h', 'i', 's', 'h', 'o', 'f', 'h', 'e'],
  ['e', 't', '', 'e', 'w', '', 'e', 'l'],
  ['', 'o', '', '', 'e', '', '', 'l'],
  ['', 'c', '', '', 'r', '', '', ''],
  ['', 'h', '', '', 'h', '', '', ''],
  ['', 'o', '', '', 'o', '', '', ''],
  ['', 'n', '', '', 'u', '', '', ''],
  ['', 'd', '', '', 's', '', '', ''],
  ['', 'r', '', '', 'e', '', '', ''],
  ['', 'i', '', '', '', '', '', ''],
  ['', 'a', '', '', '', '', '', '']
];

console.log(arrAdder(exampleArr));

*/