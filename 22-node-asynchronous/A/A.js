//Write the processArray function, which takes an array and a callback function as parameters. The callback function can be, for example, a mathematical function that will be applied on each element of this array.


var myArray = [4, 8, 2, 7, 5];

function callback(val){
    val=val*2;
    return val;
}

const newArr=myArray.map(callback);

console.log(newArr);
console.log("after")

// [ 8, 16, 4, 14, 10 ]


