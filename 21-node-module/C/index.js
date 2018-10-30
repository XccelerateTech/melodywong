var text=require('./letter');

function generate(n){
    var arr=text(n);
    arr=arr.join('');
    console.log(arr);
}

generate(5)