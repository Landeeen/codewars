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

// get string of numbers backwards into array

function digitize(n) {
  
  let string = n.toString()

  let arr = []
  
  for (let i = 0; i <= (string.length - 1); i++) {
    let num = string.charAt(i)
    arr.unshift(number(num))
    
  }
  return arr
}

// better option

function digitize(n) {
  return String(n).split('').map(Number).reverse()
}

// return amount of water needed to drink if you need to drink 0,5 l in an hour

function litres(time) {
  let water = Math.floor(time / 2)
  return water
  
}
const litres = time => Math.floor(time * 0.5);