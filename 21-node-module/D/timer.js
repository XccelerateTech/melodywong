
const EventEmitter = require('events');

class Timer extends EventEmitter {
    constructor() {
        super();
    }

    countdown(data) {
        var remain=data;
        var intervalTimer;
        const that=this;

        //count every second
        intervalTimer=setInterval(function() {
            remain=remain-1;
            that.emit('tick',remain)  
        }, 1000);
        
        
        //stop counting
        function turnOffTap(data){
            setTimeout(function(){
                clearInterval(intervalTimer);
            }, (data*1000+1000));
           
        }
        turnOffTap(data);
    }
}

module.exports=Timer;