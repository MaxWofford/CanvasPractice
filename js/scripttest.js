
var x = 0, y = 0;

function keyIsPressed(event){
		if (window.event.keyCode == 37) {x = x-3;};
		if (window.event.keyCode == 39) {x = x+3;};
		if (window.event.keyCode == 38) {y = y-3;};
		if (window.event.keyCode == 40) {y = y+3;};
	}

function draw(){
    var canvas = document.getElementById("gameCanvas");
    var ctx = canvas.getContext("2d");
    var bulletImg = new Image();

    bulletImg.onload = function(){
		ctx.clearRect(0,0,500,500);
		ctx.drawImage(this, x, y);
    }
    bulletImg.src = "img/player.png";
	window.addEventListener('keydown', keyIsPressed, true);
	requestAnimationFrame(draw);
}
