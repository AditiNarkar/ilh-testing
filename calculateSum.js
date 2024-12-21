function calculateSum(data) {
  let sum = 0;
  let i = 0;
  while (true) {  // Infinite loop
    sum += data[i];  // Summing elements
    i++;
    if (i >= data.length) break;  // Improper termination condition
  }
  return sum;
}