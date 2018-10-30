var number=function(n){
    var arr=[];
    for(var i=0; i<n; i++){
        var ranNum=Math.floor((Math.random() * 26) + 1);
        arr.push(ranNum);
    }
    return arr
}

module.exports=number;