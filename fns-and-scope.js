//Once you complete a problem, open up Chrome and check the answer in the console.



//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.
function isTyler(name) {
  return (name === "Tyler");
 }

console.log (isTyler("Smith"));

//OR 
var isTyler = function(name) {
  return (name === "Tyler");
   
};

console.log (isTyler("Tyler"));

//OR 
var isTyler = function(name){
    if (name === "Tyler") {
        console.log(true);
    }
    else if (name != "Tyler"){
        console.log (false);
          
    }
};

//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.

var getName = prompt("What is your name?");

alert(getName);

//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

var getName = prompt("What is your name?");

var welcome = getName;

alert("Welcome, " + getName);


//Next problem




//What is the difference between arguments and parameters?

// Nothing. They mean the same thing.


//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //NaN , 0, undefined, null, "", false



//Next Problem



//Create a function called myName that returns your name

var myName = "Kellie";
    console.log(myName);
  


//Now save the function definition of myName into a new variable called newMyName

 var newMyName = "Kellie";

//Now alert the result of invoking newMyName

alert(newMyName);


//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

  function outerFn() {
  
  return function() {
    return "Kellie Tyler";
  };
}


//Now save the result of invoking outerFn into a variable called innerFn.

  var innerFn = outerFn();
   

//Now invoke innerFn.
 console.log(innerFn());