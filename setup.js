/*
 * @author Josh GIbbs - uPaymeiFixit@gmail.com
*/

window.onresize=setup;
var ctx,_WIDTH,_HEIGHT;
window.onload=function(){
	ctx=document.getElementById("canvas").getContext("2d");
	setup();
	setInterval('main()',1000/60);
};
function setup(){
	_WIDTH=window.innerWidth;
	_HEIGHT=window.innerHeight;
	ctx.canvas.width=_WIDTH;
	ctx.canvas.height=_HEIGHT;
}
function drawCircle(o){
	ctx.fillStyle=o.color;
	ctx.beginPath();
	ctx.arc(o.x+_WIDTH/2,_HEIGHT-(o.y+_HEIGHT/2),o.radius,0,6.2832,true);
	ctx.fill();
}
function drawRectangle(o){
	ctx.fillStyle = o.color;
	ctx.beginPath();
	ctx.fillRect(o.x+_WIDTH/2,_HEIGHT-(o.y+_HEIGHT/2),o.width,o.height);
	ctx.fill();
}
function drawText(t){
	ctx.fillStyle='000';
	ctx.fillText(JSON.stringify(t),10,10);
}
function erase(){
	ctx.clearRect(0,0,_WIDTH,_HEIGHT);
}
function draw(o){
	ctx.font = "20pt Calibri";
	ctx.textAlign = "center";
	if (o.text) {
		ctx.fillStyle='000';
		ctx.fillText(o.text,o.x+_WIDTH/2,_HEIGHT-(o.y+_HEIGHT/2),_HEIGHT-(o.y+_HEIGHT/2));
	}
	ctx.fillStyle=o.color;
	ctx.beginPath();
	if (o.radius) {
		ctx.arc(o.x+_WIDTH/2,_HEIGHT-(o.y+_HEIGHT/2),o.radius,0,6.2832,true);
	} else {
		ctx.fillRect(o.x+_WIDTH/2,_HEIGHT-(o.y+_HEIGHT/2),o.width,o.height);
	};
	ctx.fill();
}