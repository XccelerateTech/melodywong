//The function takes an array as parameter, return the average of the array rounded down to its nearest integer.
var studentScore=[
    {score: 88},
    {score: 51},
    {score: 67},
  
   ];


var total=studentScore.reduce(function(sum,all){
    return sum+all.score
},0)

var average=total/(studentScore.length);

average=Math.floor(average);

console.log(average);