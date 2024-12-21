function calculateSum(data) {
  let sum = 0;
  let index = 0;
  while (index < data.length) {
    sum += data[index];  // Alternative while loop summation
    index++;
  }
  return sum;
}
