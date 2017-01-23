
/**
 * PART 06: robustSum()
 *
 * Modify your simpleSum function so that if either of its
 * inputs is not a number, it will return the boolean `false`
 */

 var robustSum = function(num1,num2){
   if ((typeof num1) !== "number" || (typeof num2) !== "number") {
     return false;
   } else {
     return num1 + num2;
   }
 }


//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

console.assert( robustSum(867, 5309)   === 6176);
console.assert( robustSum('867', 5309) === false);
console.assert( robustSum(5, true)     === false);
