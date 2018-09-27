var number;
var result=0;
function Multiply (number){
//if number <0 or =0 or not number
    if(number<=0 || isNaN(number)===true){
//return error
        console.log("Error")

//if number>1000000 
    }else if (number>1000000){
//return number
        console.log(number)

    }else {
//for number<=1000000
        result=number;
        for (var n=0; result<1000000; n++){
//multiply *10
            result=result*10;
        }
//return number
        console.log(result)
    }
}

Multiply('a');
Multiply(1111111111);
Multiply(5);
Multiply(1);