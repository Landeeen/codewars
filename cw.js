// return reverse string

function solution(str){
    return str.split("").reverse().join("");
}

// return sum of positives

function positiveSum(arr) {
  return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}

// find the smallest number in array
class SmallestIntegerFinder {
  findSmallestInt(args) {
    var sorted = args.slice().sort(function(a, b) {
  return a - b;
});

var smallest = sorted[0]                   
return smallest
  }
}

// remove first and last characters

function removeChar(str){

  return str.slice(1,-1)
 
 };
 
//  repeat string

function repeatStr (n, s) {
  return  s.repeat(n)
   
 }

//  summation of number

var summation = function (num) {
  let total = 0
  for(let i = 0; i <= num; i++){
    total += i
  }
  return total
    
}

// or shorter

const summation = n => n * (n + 1) / 2;