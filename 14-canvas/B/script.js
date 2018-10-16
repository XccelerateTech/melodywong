const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
var dragging = false;

context.strokeStyle = "#df4b26";
context.lineJoin = "round";
context.lineWidth = 5;
$('#canvas').mousedown(function(e){
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    context.beginPath();
    context.moveTo(mouseX,mouseY);
    dragging = true;
});
$('#canvas').mousemove(function(e){
    if(dragging){
        
 
    }
});
$('#canvas').mouseup(function(e){
    dragging = false;
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    context.lineTo(mouseX,mouseY);
    context.closePath();
    context.stroke();

});
$('#canvas').mouseleave(function(e){
    dragging = false;
});

function draw(x,y){
    context.lineTo(x,y);
    context.moveTo(x,y);
    context.closePath();
    context.stroke();
}