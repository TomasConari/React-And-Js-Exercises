/*
Description:
Format any integer provided into a string with "," (commas) in the correct places.
Example:
numberFormat(100000); // return '100,000'
numberFormat(5678545); // return '5,678,545'
numberFormat(-420902); // return '-420,902'

https://www.codewars.com/kata/565c4e1303a0a006d7000127
*/
const numberFormat = (number) => {

    let finalNumber = 0;
    if(number < 0){
        finalNumber = number * -1;
    }else{
        finalNumber = number;
    };
    const numberString = finalNumber.toString();
    let formattedString = "";
  
    for(let i = numberString.length - 1; i >= 0; i -= 1){
      const digit = numberString[i];
      formattedString = digit + formattedString;
  
      if((numberString.length - i) % 3 === 0 && i !== 0) {
        formattedString = "," + formattedString;
      };
    };
  
    if(number < 0){
      formattedString = "-" + formattedString;
    };
  
    return formattedString;
};

console.log(numberFormat(-100000));