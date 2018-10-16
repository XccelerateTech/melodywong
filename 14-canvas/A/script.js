const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//draw rectangle
$(function(){
function drawRect(ctx,start,dimension,color){
    ctx.fillStyle= 'red';
    ctx.fillRect(start[0],start[1],dimension[0],dimension[1]);
}
    drawRect(20,20,50,80)

})

//draw lines
$(function(){
    function drawLine(ctx,start,end){
        ctx.beginPath();
        ctx.moveTo(start[0],start[1]);
        ctx.lineTo(end[0],end[1]);
        ctx.stroke();
    }
  
    drawLine(ctx,[50,100],[50,300]) 
    drawLine(ctx,[50,300],[250,300]) 
    drawLine(ctx,[250,100],[250,300]) 

})

//draw curves
$(function(){
    function drawQuadraticCurve(ctx,start,cp1,end){
        ctx.setLineDash([]); // Set it to an empty array to return to solid.
        ctx.strokeStyle = 'black';
        ctx.beginPath();
        ctx.moveTo(start[0],start[1]);
        ctx.quadraticCurveTo(cp1[0],cp1[1],end[0],end[1]);
        ctx.stroke();
    }
  
    drawQuadraticCurve(ctx,[50,100],[150,0],[250,100]) 
     

})
