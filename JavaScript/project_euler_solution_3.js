/*
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143.
*/

num = 100;
//STORE FACTORS OF NUMBER
var factorsArray = [];

//CHECK FOR FACTORS OF NUMBER
for (var i = 1; i < num; i++) {
  if (num % i == 0) {
    factorsArray.push(i);
  }
}

console.log(factorsArray) //[1, 2, 4, 5, 10, 20, 25, 50]

var primeFactors = [];
//LOOP THROUGH EACH FACTOR
for(var i = 0; i < factorsArray.length; i++) {
  var factors = [];
  //CHECK FOR FACTORS OF NUMBER
  for (var n = 1; n <= factorsArray[i]; n++) {
    if (factorsArray[i] % n == 0) {
      factors.push(n);
    }
  }
  //CHECK IF IT'S PRIME
  if (factors == [1, factorsArray[i]]) {
    primeFactors.push(factorsArray[i])
  }

}
console.log(primeFactors)


if (factorsArray[1] == [1]) {
    console.log();
}
