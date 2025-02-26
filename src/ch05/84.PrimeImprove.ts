export const initial = () => {
  const isPrime = (n: number) => {
    if (n == 1) {
      return false;
    }

    let starter = 2;
    while (starter <= n ** 0.5) {
      if (n % starter == 0) {
        return false;
      }
      starter++;
    }
    return true;
  };

  console.log(isPrime(91)); // false
  console.log(isPrime(101)); // true
  console.log(isPrime(1001)); // false, 1001 = 11 * 91

  const nthPrime = (num: number) => {
    let primes = [2, 3, 5, 7, 11, 13];
    let starter = 17;
    while (primes.length < num) {
      let primeCheck = true;
      for (let i = 0; i < primes.length; i++) {
        if (primes[i] > starter ** 0.5) {
          break;
        }
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

  // n >= 2, n is either a prime number or a product of primes
  // 17
  // 2, 3, 4, ..., 16
  // 2, 3, 5, 7, 11, 13
};
