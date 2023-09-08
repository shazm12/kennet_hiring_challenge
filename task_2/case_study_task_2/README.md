# getPrimesInRange Stats Web App

- The following web app marks whether a number is a prime or not in a given range (inclusive).
- Deployed [here](https://64faf38f7c8f09654b0d40e0--getprimesinrangestats.netlify.app/).
- The Web app also gives performance statistics like:
  - Total time taken to run all instances
  - Average time taken to determine if a single number is prime in front of each number
  - Average time taken to determine if a single number is prime in front of prime numbers
  - Table depicting the time taken to run isPrime function for all numbers.
  - Table depicting the time taken to run isPrime for prime numbers.

I have used `performance.now()` instead of `console.time()` as `console.time()` is generally used for debugging purposes so it would not be very accurate but `performance.now()` is specifically designed to provide us with the most accurate time a module takes to run in the DOM environment as specified in MDN Docs.
