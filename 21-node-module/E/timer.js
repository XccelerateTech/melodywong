
const EventEmitter = require('events');

class Timer extends EventEmitter {
    constructor() {
        super();
        this.intervalTimer;
        this.startTime;
    }

    start(data) {
        var remain=data;
        this.startTime=data;
        const that=this;

        //count every second
        this.intervalTimer=setInterval(function() {
            remain=remain-1;
            that.emit('tick',remain)  
        }, 1000);
    
    }

    pause(data,time){
        var when=data;
        var t=time;
        var start=this.startTime;
        const that=this;
        var remain=start-t-when;
        
        //stop counting
        setTimeout(function(){
                clearInterval(that.intervalTimer);
            }, (when*1000+1000));

        /*
        //count but no show
        setTimeout(function(){
            var intervalTimer=setInterval(function() {
                console.log('paused')
            }, 1000);
            setTimeout(function(){
                clearInterval(intervalTimer);
            }, (t*1000+1000));
        }, (when*1000))
        */
 

        //count from where was paused
        setTimeout(function(){
            that.intervalTimer=setInterval(function() {
                remain=remain-1;
                that.emit('tick',remain);
            }, 1000);
        }, ((when+t)*1000))

    }

    stop(data){
        const that=this;
           //stop counting
        function turnOffTap(data){
            setTimeout(function(){
                clearInterval(that.intervalTimer);
            }, (data*1000+1000));
        }
        turnOffTap(data);
    }
}

module.exports=Timer;
/*
var perform=new Timer();
perform.start(8);
perform.pause(2,2)
perform.stop(6);
*/