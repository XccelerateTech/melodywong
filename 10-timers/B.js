/*
Write a function ‘drippingTap’ that console logs “drop” every second. Write another function called ‘turnOffTap’ that stops the dripping.
*/

var intervalTimer;

function drippingTap(){
    intervalTimer = setInterval(function() {
        console.log("drop");
    }, 1000);

}

function turnOffTap(){
    setTimeout(function(){
        clearInterval(intervalTimer);
    }, 8000);
   
}

drippingTap();
turnOffTap();