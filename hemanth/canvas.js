function drawOnCanvas(){
    var c=document.getElementById("c");
    var ctx = c.getContext("2d");
    ctx.fillStyle="#00FF00";
    ctx.fillRect(50,50,200,150);
    ctx.moveTo(50,50);
    ctx.lineTo(250,200);

    ctx.moveTo(250,50);
    ctx.lineTo(50,200);

    ctx.strokeStyle = "#FF0000";
    ctx.stroke();



    
}