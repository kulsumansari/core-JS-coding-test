/* 
Count the frequency of a vowels in a given string. 
1. The function should take a string input and return an object with keys a,e,i,o,u
2. The value corresponding to each key should have the frequency of vowels that appear 
   in the string
3. In case numbers are passed it shoul throw an error with message "Invalid Input"
*/

const frequencyCounter = (str) => {
   if(!isNaN(str)){
      throw new Error('Invalid Input');
   }
   let obj ={}

   let Vowels=['a','e','i','o','u'];

   Vowels.forEach((item)=>{
      let freq = ()=>{
         let count =0;
         for(char in str){
            if(str[char]=== item){
               count += 1;
            }
         }
         return count;
      };

      obj[item] = freq();
   });
   
   return obj;
};


module.exports = frequencyCounter;
