
var x = 50, y = 50;

function keyIsPressed(event){
		if (window.event.keyCode == 37) {x = x-3;};
		if (window.event.keyCode == 39) {x = x+3;};
		if (window.event.keyCode == 38) {y = y-3;};
		if (window.event.keyCode == 40) {y = y+3;};
	}

function draw(){

    var canvas = document.getElementById("playerCanvas");
    var ctx = canvas.getContext("2d");
    var bulletImg = new Image();
     for (var h=0; h<32; h++) {
     for (var i=0; i<24; i++) {
       ctx.fillStyle = "rgba(" + 0 + "," + i*12 + "," + 8*h + ",0.5)";
       ctx.fillRect (20*h, 20*i, 20, 20);
   }
}

    bulletImg.onload = function(){
		ctx.clearRect(0,0,640,480);
		ctx.drawImage(this, x, y);
    }
    bulletImg.src = "img/player.png";
	window.addEventListener('keydown', keyIsPressed, true);
	requestAnimationFrame(draw);
}
