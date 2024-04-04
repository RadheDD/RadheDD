//declare variables to be used in functions
let sum =0;
let diff=0;
let divid=0;

//Define a function fndSum that adds the elements of an array
function findSum(Arr){

    for(i=0; i<Arr.length; i++){
    sum= sum + Arr[i];
    }
return sum;
}

//Define a function subtractNumbers that subtracts the second number from the first number
function subtractNumbers(x,y){
    diff = x - y;
    return diff;
}

//Define a function multiplyNumbers that multiplies two numbers
let multiplyNumbers = (x,y) => x*y;


//Define a function divideNumbers that divides the first number by the second number

function divideNumbers(x,y){
     divid = x/y;
     if(y===0){
        return console.log("Anything divided by zero is infinity");
     }
     else{
        return divid;
     }
}

//Create an Array of three digits
let numAnalysis = [16,20, 77];

//Solution to the Tasks assigned
console.log("Sum of Array Elements is "+findSum(numAnalysis));
console.log ("First element minus second element "+subtractNumbers(numAnalysis[0], numAnalysis[1]));
console.log("Product of third element and first element "+multiplyNumbers(numAnalysis[2], numAnalysis[0]));
console.log("Result of division of sum of the elements and the third element "+divideNumbers(findSum(numAnalysis), numAnalysis[2]));
console.log(divideNumbers(7,0));

