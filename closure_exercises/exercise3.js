
// Multiple arguments!

var sandwiches = 2,
    burgers = 3;

var theUsual = getUsualOrderFunction(2, 3);
// YOUR CODE HERE ------------------------
function getUsualOrderFunction(sandwiches, burgers) {
  var sandwiches = 2;
  var burgers = 3;
  return function(){
    console.log('We\'ll get ' + sandwiches + ' and ' + burgers + ' burgers.');
  }
}


// ---------------------------------------

theUsual(); // We'll get 2 sandwiches and 3 burgers.
sandwiches = 0;
burgers = 1;
theUsual(); // We'll get 2 sandwiches and 3 burgers.
