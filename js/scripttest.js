
var x = 0, y = 0;

function keyIsPressed(event){
	switch (event.keyCode){
		case 37:
			x = x-3;
			break;
		case 39:
			x = x+3;
			break;
		case 38:
			y = y-3;
			break;
		case 40:
			y = y+3;
			break;
		case 39,38:
			x = x+3;
			y = y-3;
			break;
		case 38,37:
			y = y-3;
			x = x-3;
			break;
		case 37,40:
			x = x-3;
			y = y+3;
			break;
		case 40,39:
			y = y+3;
			x = x+3;
			break;
	}
}

function draw(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var bulletImg = new Image();

    bulletImg.onload = function(){
		ctx.clearRect(0,0,500,500);
		ctx.drawImage(this, x, y);
    }
    bulletImg.src = "bullet2.png";
	window.addEventListener('keydown', keyIsPressed, true);
    requestAnimationFrame(draw);
}