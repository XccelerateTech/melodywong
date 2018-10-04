//Move every letter in the provided string forward 10 letters through the alphabet. 
//If it goes past ‘z’, start again at ‘a’.

function move(input){
//split string into charcter
    input=input.split("");

//turn character into corresponding number
    input=input.map(function(number){
        number=number.charCodeAt(0);
        number-=97;
        return number;
    },[])

//convert number into character
    input=input.reduce(function(a,b){
        //add 10 to number
        b=(b+10)%26;
        b=b+97;
        b=String.fromCharCode(b);
        a=a+b;
        return a;
    },[])
console.log(input);

}

move('dog') // the result should be 'nyq' as 'd' -> 'n' and so forth
move('xyz')