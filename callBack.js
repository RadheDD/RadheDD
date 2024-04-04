// Code here for the callbacks task

// Setting variables to hold the intervalID
// and also a counter
let intervalID;
let counter = 0;

let startCounter = function() {
    if(!intervalID){
        intervalID = setInterval(counterLog, 1000);
    }
        // Create the logic needed in the setInterval() function for
        //incrementing the counter and outputting to the console
}
function counterLog(){
    counter = counter + 1;
    console.log(counter);
}

function stopCounter() {
    clearInterval(intervalID);
    intervalID=null;
    // add the logic required to stop the counter
    // using clearInterval()
}

let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');

// The event listener below is missing a callback function argument;
// this button should start the outputting of the counter to the console
startButton.addEventListener("click", startCounter );

// The event listener below is missing a callback function argument;
// this button should the counter from outputting to the console
stopButton.addEventListener("click", stopCounter );

