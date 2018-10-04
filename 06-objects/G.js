//Create a function that takes an array as parameter.   
//The array consist of three numbers.   
//Return the index of the number that lies between the other two numbers.
var input;

function middle(input){
    //find max
    var a=Math.max.apply(Math,input);
   
    //find min
    var b=Math.min.apply(Math,input);

    //compare middle num with array[i]

        /*for(var i=0;i<3;i++){
            if(input[i]!=a&&input[i]!=b){
                console.log(i)
            }
        }*/

        var c=0;
        input.forEach(function(order){
            
            if(order!=a&&order!=b){
                console.log(c) ;
            }else{
                c++;
            }

        })


    }
    


middle([2,3,1]) // 0 -> 2 at index 0 lies between 3 and 1
middle([88, 7, 55]) // 2 -> 55 lies between 7 and 88