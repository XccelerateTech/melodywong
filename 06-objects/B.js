//Write a function that receives a number and returns it in an array with the digits in reverse order.
var input;

function reverse(input){

//turn number into a string
    var n=input.toString();

//separate string into an array of characters
    var arr=n.split("");

//turn each character into number
    for(var i=0;i<arr.length;i++){
        arr[i]=Number(arr[i]);
    }

//order
    arr.sort();
    //reverse sort
    arr.sort(function(first, second){
        return second > first;
    });
    console.log(arr);
}

reverse(12345) // [5,4,3,2,1]