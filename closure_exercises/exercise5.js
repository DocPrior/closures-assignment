
// Generate another function that requires arguments.
// This time you'll have to set up the flyTo variable yourself.

var personToVisit = "best friend";
// YOUR CODE HERE ------------------------
var flyTo = getSetDestinationFunction(personToVisit)
function getSetDestinationFunction(personToVisit){
  var personToVisit = 'best friend';
  return function(destination){
    console.log('Enjoy your visti to ' + destination + ' to visit your ' + personToVisit + '.');
  }
}


// ---------------------------------------

flyTo("Shanghai");
// Enjoy your visit to Shanghai to visit your best friend.
personToVisit = "Toronto"; // (has no effect on next method call)
flyTo("Lagos");
// Enjoy your visit to Lagos to visit your best friend.
