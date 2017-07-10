
// Closure example that involves an argument
var printNumberThree = getPrintNumberFunction(3);
var printNumberFive = getPrintNumberFunction(5);

// YOUR CODE HERE ------------------------
function getPrintNumberFunction(num){
  var num;
  return function(){
    console.log(num);
  }
}


// ---------------------------------------

printNumberThree(); // 3
printNumberFive(); // 5
