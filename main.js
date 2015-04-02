/*
 * @author Jon GIbbs - BakePortals@gmail.com
*/





var robot = new Array()

robot[0] = new Object()
robot[0].x = -50
robot[0].y = 100
robot[0].radius = window.innerWidth / 4
robot[0].color = 'gray'
robot[0].text = 'I AM BORED'

var frame = 0

var text = "hello my name is josh and I am testing the split method . . . LIKE DIS IF U CRY EVERYTIM . . . I am really bored and It's time to go to bed . . . so goodnight . . . 31 30 29 28 27 26 25 24 23 22 21 20 19 18 17 16 15 14 13 12 11 10 09 08 07 06 05 04 03 02 01 . . .".split(' ');
//var text = '31 30 29 28 27 26 25 24 23 22 21 20 19 18 17 16 15 14 13 12 11 10 09 08 07 06 05 04 03 02 01'.split(' ');
var t = '';
for (var i = 0; i < text.length; i++) {
	t += text[i] + '\n \n';
};
text = t.split(/\n/);
function main() {

	frame+= 0.007

	robot[0].text = text[Math.floor(frame*10)%text.length]
	robot[0].x = Math.cos(frame) * robot[0].radius
	robot[0].y = Math.sin(frame) * robot[0].radius
	robot[0].color = 'rgba(' + hsvToRgb(frame/(2*Math.PI) + 0.5, 1, 1) + ',' + 0.03 + ')';
	//erase()
	draw(robot[0])




};


function hsvToRgb(h, s, v){
	var r, g, b;

	var i = Math.floor(h * 6);
	var f = h * 6 - i;
	var p = v * (1 - s);
	var q = v * (1 - f * s);
	var t = v * (1 - (1 - f) * s);

	switch(i % 6){
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
	};

	return [Math.floor(r * 255), Math.floor(g * 255), Math.floor(b * 255)];
};