// 歐基里德算法是一種用於計算兩個數的最大公因數的算法。 歐基里德算法的基本原理是，兩個數的最大公因數等於其中一個數除以另一個數的餘數的最大公因數。 這個過程一直持續到餘數為0為止。 例如，計算36和48的最大公因數：
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
