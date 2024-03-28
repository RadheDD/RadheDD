console.log("This program will test if a word is palindrome or not.");
// Ask for a user input
let testWord = prompt("Enter a Word ");
// Find the length of the word 
let length = testWord.length; 
let i=0;
// Start a while loop to check if the first letter is same as the last and likewise.

while(i<= length/2){
    if (testWord[i] !== testWord[length-1-i] ){
// Here we are using length - 1 -i because the first letter of the string is numbered 0         
    console.log(testWord+" is not a palindrome.");    
// if the condition is met, the loop will break. 
break;  
    }
    else {
    console.log(testWord+ " is a Palindrome.");
    }
i++;    
}


