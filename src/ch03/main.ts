function ticketPrice(age: number, price: number, welfare: boolean = false): string | number {
  if (0 <= age && age <= 11) return 0;
  else if ((12 <= age && age <= 18) || welfare) return price * 0.75;
  else if (19 <= age && age <= 120) return price;
  else return 'Invalid age input';
}

console.log(ticketPrice(15, 200)); // 150
console.log(ticketPrice(60, 100, true)); // 75
console.log(ticketPrice(14, 200, true)); // 150
console.log(ticketPrice(4, 100, true)); // 0
console.log(ticketPrice(150, 300)); // Invalid age input
