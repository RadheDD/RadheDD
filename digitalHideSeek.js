
//Define a Function hide that takes in a string as an argument

function hide(x){
    const hideLocation = x;
    function seek(){
    return hideLocation;    
    }
    return seek;
}


const startGame = hide("Vrindavan");
console.log("I am hiding in "+startGame()); 
//Concept of Closure: a variable declared in a function is accessible to another function enclosed within. 
//Here we can see that hidelocation was declared within the hide function.
//When hide function is called and a string is provided as an arguement. Hide function returns seek function
//This string is however accessible by seek function 



console.log(hideLocation); //Otput Error, variable not defined
//scope: variable hideLocation is defined only within hide function.
//The scope of this variable is limited to the function within which it has been defined as well as the nested function.
// It is important to note that hideLocation was defined using "let" declaration. 
//Had it been declared using "var" declaration then the variable would have had a global scope. 
//This means it would have remained defined. result of loggin it would not have been an error.
//Use of 'var' to declare a variable is not appreciated any more.

