// Original issue: Calculate the sum of a large dataset
function calculateSum(data) {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i]; // Summing each element
  }
  return sum;
}
