var x=8;
var y=3;

var a=(x == y);
var b=(x && y < 10);
var c=(x <= 8 || y <= 8);
var d=(y === '3');
var e=(!(x == 5));

console.log('x == y: '+a);
console.log('x && y < 10: '+b);
console.log('x || y =< 8: '+c);
console.log('y === \'3\': '+d);
console.log('!(x == 5): '+e);