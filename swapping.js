//Take input from the user
const original = Number(prompt("Enter a Three Digit Number"));
let origString = original.toString();

//Start a for loop to separate out the digits

for(i=0; i<= 2; i++) {

    if(i===0){
        var h = origString[i];
    
    }

    else if (i===1){
        var u = origString[i];
    
    }

    else {
    var t = origString[i];

    }

}
let numUnit = Number(u);
let numTen = Number(t);
let numHun = Number(h);

let newNum = (numHun*100 ) + (numTen*10) + numUnit;


console.log("Hello Friend! Look at the Magic");
console.log("Your original number was "+ original);
console.log("I have changed that to "+ newNum );
