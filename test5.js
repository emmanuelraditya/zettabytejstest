// Expected Result : 6
// Direction : Get the total of "1" in binary value of number input
const number = 221;

function result(num) {
  for (let i = 0; i < num.length; i++) {
    let char= num.charCodeAt(i)-97;
    console.log(char);
}
}

console.log(result(number));