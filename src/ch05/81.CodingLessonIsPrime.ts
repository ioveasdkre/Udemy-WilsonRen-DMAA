// 歐基里德算法是一種用於計算兩個數的最大公因數的算法。 歐基里德算法的基本原理是，兩個數的最大公因數等於其中一個數除以另一個數的餘數的最大公因數。 這個過程一直持續到餘數為0為止。 例如，計算36和48的最大公因數：
export const initial = () => {
  const isPrime = (n: number): boolean => {
    if (n === 1) return false;

    let starter = 2;
    while (starter < n) {
      if (n % starter === 0) return false;
      starter++;
    }

    return true;
  };

  console.log(isPrime(91)); // false
  console.log(isPrime(21)); // false
  console.log(isPrime(6252)); // false
  console.log(isPrime(101)); // true
};
