export const initial = () => {
  const nthPrime = (num: number) => {
    let primes = [2, 3, 5, 7, 11, 13];
    let starter = 17;
    while (primes.length < num) {
      let primeCheck = true;
      for (let i = 0; i < primes.length; i++) {
        if (starter % primes[i] == 0) {
          primeCheck = false;
          break;
        }
      }
      if (primeCheck) {
        primes.push(starter);
      }
      starter += 2;
    }
    return primes[num - 1];
  };

  console.log(nthPrime(10));
  console.log(nthPrime(20));
  console.log(nthPrime(30));
  console.log(nthPrime(100));
};
