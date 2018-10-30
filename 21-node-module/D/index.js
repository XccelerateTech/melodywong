var constructor=require('./timer')

var timer=new constructor();
timer.on('tick', function(remain) {
    if (remain==0){
        console.log('kaboom');
    }else{
        console.log("Time remaining: "+remain);
    }
});
timer.countdown(5);