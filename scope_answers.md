Exercise 1

var lastWord = 'welcome';
console.log(lastWord);
lastWord = 'goodbye';

log returns welcome because it lastWord is declared above;


var message = "Up here!";

function shout() {
  console.log(message);
}

shout();

returns a log of "Up here!" because message is declared outside the function but is still accessible to the function because of its 'gloabl' scope

var message = "Up here!";

function shout(message) {
  console.log(message);
}

shout("Down below!")

shout returns "Down below" becasue message is also being declared as arguement (place holder) in the function regardless of what var message is set to outside the function; the function returns the string passed to it becasue arguement message is in the scope of the funtion only here and is local to the function even though it has the same name as the varible declared above it.

var muffins = 'two dozen';
var purchasedMuffins;

function getMuffins() {
  return muffins;
}
purchasedMuffins = getMuffins();
console.log(purchasedMuffins);

will return in 'two dozen' because muffins and purchasedMuffins are both declared outside the function. getMuffins is assgined to the varibale purchasedMuffins. console logging purchasedMuffins returns the value returned by getMuffins which returns the vaule of muffins which is declared outside the function and is of higher scope than the function

var chore = 'laundry';

function doChores() {
  var chore = 'sneak out';

  function reportActivity() {
    console.log(chore);
  }

  reportActivity();
}

doChores(); // calling doChores(), which then calls reportActivity()

the job of the function is to declare chore again so the value of chore is now sneack out becauses declearing chore inside the function makes the variable into a local varibale of that function rather than global, calling the function returns sneak out

var letter;
var contents = 'Looking for gold';

function getMail() {

  function changeContents() {
    var contents = 'Struck it rich!';
  }

  changeContents();
  return contents;
}

letter = getMail();
console.log(letter);

 the value of contents declared inside of changeContents is not avaible to getMail because changeContentss is nested inside it; thus when it returns contents it returns the global variable value of contents as 'looking for gold'; in other words getMail can't access variables inside changeContents

 var decision;

function firstIdea() {
  var decision = 'Buy a new car';
  return decision;
}

function secondIdea() {
  console.log(decision);
}

firstIdea();
secondIdea();

firstIdea returns the value of its local variable of decisions but secoundIdea returns undefined beacuse it can't access the value fo decision as its being declared inside firstIdea; these functions are on the same 'level' so can't access eachothers local variables; and the gobal varibale of decision is undefined
