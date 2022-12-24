function draw(){
    var canvas = document.getElementById("startbtn");;
    if(!canvas.getContext) return;
      var ctx=canvas.getContext("2d");
      ctx.beginPath();
      ctx.arc(150,150,140,0,2*Math.PI);
      ctx.lineWidth = 0.5;
      ctx.strokeStyle='#ffffff';
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(150,150,100,0,2*Math.PI);
      ctx.fillStyle='#ffffff';
      ctx.fill();
}
draw();