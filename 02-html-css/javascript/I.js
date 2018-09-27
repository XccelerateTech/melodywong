var number=0;
for (var n=0;n<30;n++){
    //add 1 to number
    number=number+1;
    //if divisible by 3&&5
    if (number%3===0 && number%5==0){
        console.log("Hong Kong");
    } else if(number%3===0) {
    //if divisible by 3
        console.log("Hong");
    } else if(number%5===0){
    //if divisible by 5
        console.log("Kong");
    } else{
    //if not divisible
        console.log(number);
    }

}