// 歐基里德算法是一種用於計算兩個數的最大公因數的算法。 歐基里德算法的基本原理是，兩個數的最大公因數等於其中一個數除以另一個數的餘數的最大公因數。 這個過程一直持續到餘數為0為止。 例如，計算36和48的最大公因數：
export const initial = () => {
  const gcd = (a: number, b: number): number => {
    while (b != 0) {
      let r = a % b;
      a = b;
      b = r;
    }

    console.log(a);
    return a;
  };

  gcd(420, 66); // 6
  gcd(101, 43); // 1
};
