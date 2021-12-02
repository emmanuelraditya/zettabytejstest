// Expected Result = 55
// Direction : Return sum of array
const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(input) {
  let sum = 0;

  for (i = 0; i < input.length; i++) {
    sum += input[i];
  }

  console.log(sum);
}

console.log(result(input));
