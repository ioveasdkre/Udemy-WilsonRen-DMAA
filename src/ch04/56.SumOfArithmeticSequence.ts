export const initial = () => {
  // const add = (n: number): number => {
  //   let sum = 0;
  //   for (let i = 1; i <= n; i++) {
  //     sum += i;
  //   }
  //   console.log(sum);
  //   return sum;
  // };

  // add(10); // 55
  // add(100); // 5050

  const add2 = (n: number): number => {
    if (n === 0) return 0;

    return n + add2(n - 1);
  };

  console.log(add2(10)); // 55
  console.log(add2(100)); // 5050
};
