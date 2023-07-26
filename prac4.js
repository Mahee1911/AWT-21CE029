function fact(num) {
    function calculate_fact(num) {
      if (num === 0 || num === 1) {
        return 1;
      } 
      else {
        return num * calculate_fact(num - 1);
      }
    }
  
    return calculate_fact(num);
  }
  
  const num = 3;
  console.log(`Factorial of ${num} is: ${fact(num)}`);

var global = 10;

function glvar() {
  var local = 20;

  console.log("global variable:", global);
  console.log("local variable:", local);
}
glvar()