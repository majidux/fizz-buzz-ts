function fizzBuzz(n: number): string {
  let result = '';
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) result += 'FizzBuzz \n';
    else if (i % 3 === 0) result += 'Fizz \n';
    else if (i % 5 === 0) result += 'Buzz \n';
    else result += `${i} \n`;
  }
  return result;
}
