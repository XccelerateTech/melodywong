var decode={
    1:'a',
    2:'b',
    3:'c',
    4:'d',
    5:'e',
    6:'f',
    7:'g',
    8:'h',
    9:'i',
    0:'j'
}

//Given a string of numbers, sort it from smallest to biggest.   
    //number to string
    var input;
    function transform(input){
    //string split to array 
    var arr=input.split("");
    //string to number (map)
    arr=arr.map(function(num){
        return Number(num)
    })
    //sting sort
    arr=arr.sort();
      //->array of number in asceing order
    
//Then transform the numbers into their corresponding letter in the alphabet
    //make new array: array[i]=decode[array[i]]
    
    arr=arr.reduce(function(code, where){
        code=code+decode[where]
        return code;
    },[])
    
    /* Using map
    var i=0;
    arr=arr.map(function(code){
        code=decode[arr[i]];
        i++;
        return code
    })
    arr=arr.join("")
    */
    
//return the new string.
   console.log(arr);
    }

transform('213') // abc