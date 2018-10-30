var number=require('./number');

var letter=function(n){
    var arrNum=number(n)
    var arrLet=[]
    for(var i=0;i<n;i++){
        var numLet=arrNum[i]+96;
        numLet=String.fromCharCode(numLet);
        arrLet.push(numLet);
    }
    return arrLet;
}

module.exports=letter;