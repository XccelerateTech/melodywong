/*
* ask the user for a timeframe in seconds from 1-60 seconds
* only allow 1-60 seconds input, if anything else ask again and inform about the error
* set an alarm based on the time the user gave
* when the alarm is called, console log "Alarm ringing at [Current Time]"
*/

function alarm(seconds){
    if (seconds<1||seconds>60){
        console.log("Error: should be 1-60 seconds")
    }else{
        setTimeout(function(){
            var d = new Date();
            var n = d.toLocaleTimeString();
            console.log("Alarm ringing at "+n);
        }, (1000*seconds));
        
    }
}

alarm(2);