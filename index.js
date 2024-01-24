//How to check the Euler's totient function ϕ of a number
let nIsPrime = (num) => { //Case:1 When a number is prime
  if(num <= 1) return false;//num is less than 2 is not prime
  for(let i = 2; i <= Math.sqrt(num); i++){//loop continue till i is <= num*num
    if(num % i === 0) return false;//if num modulo i is zero then return false 
  }
  return true;//if no factor other than 1 and itself then return true
}// below is //Case:2 When a num isn't prime but a product of two prime numbers 
let primeFactors = (num) => {//using an arrow function with num as parameter and storing it
let factors = []; //defining factors as an empty array 
for(let j = 2; j <= num; j++){//iterate through 2 to num
  while(num % j === 0 && nIsPrime(j)){//while j is prime factor of num
    factors.push(j);//adding j to list of prime factors in factors
    num /= j; //then dividing num by j
  }
}
return factors; // return the list of prime factors in an array
}//below is //Case:3 when a num has many prime factors & we have to calculate the distinct prime factors
//in the function below we sorted out all duplicate element in array using new set function
let distinctPrimeFactors = (num) => Array.from(new Set(primeFactors(num)));
const phi = (num) => {//an arrow function with parameter num in a variable phi
if (nIsPrime(num)) {//checks if num is prime/checks condition 1
  return num - 1; //if true then subtracts 1 from the num
} else {//if num is not prime then let move forward
  const factors = primeFactors(num);//checking the prime factor of num
  //in next line we check condition 2 = if both prime factor are prime numbers 
  if (factors.length === 2 && nIsPrime(factors[0]) && nIsPrime(factors[1])) {
    return (factors[0] - 1) * (factors[1] - 1);//formula = phi(num)=(Prime1-1)(Prime2-1)
    //if the condition is met we subtract 1 each from both factor and muliply them
  } else {//if the condition is not met then let move forward
    let distinctFactors = distinctPrimeFactors(num);//calling the distincPrimFunction
    let result = num; // storing the distinct prime factors
    //iterating through the distinct prime factors & apply phi func to each factor
    for(let k=0; k<distinctFactors.length;k++){//iterating and applying phi func to each factor
      result *= (1 - 1 / distinctFactors[k]);//phi(num)={result(1-1/p1)(1-1/p2)}
    }
    return Math.round(result);//no decimal point and anything after that 
  }
}
}
console.log(phi(800));//you can check with your own input
