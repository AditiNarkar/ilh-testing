function calculateSum(data) {
  let sum = 0;
  let i = 0;
  while (i < data.length) {
    sum += data[i];  // Using while loop for summation
    i++;
  }
  return sum;
}