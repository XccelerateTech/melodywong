var timer=require('./timer')

var perform=new timer();

perform.on('tick', function(remain) {
    if (remain==0){
        console.log('kaboom');
    }else{
        console.log("Time remaining: "+remain);
    }
});


perform.start(10);
//pause(when to start pause, how long to pause)
perform.pause(3,3);
//stop after how many seconds
perform.stop(10);