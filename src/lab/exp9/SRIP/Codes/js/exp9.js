//buttons

//1. start button

var startButton=document.getElementById("start")
//1. reset button

var resetButton=document.getElementById("reset")
startButton.onclick=function() {
	
	toggleAnim();
	setTimeout(function()
	{ 	alert('Simulation Complete.');
		location.reload();
	},10000) 
	}

resetButton.onclick = function() {
	location.reload();
}

function core_exp()
{
var tankLeft = DRAW.polyline([
    [200, 200],
    [220, 220],
    [220, 450],
    [400, 450],
    [400, 220],
    [420, 200]
  ]).fill('none').stroke({
    width: 3,
  })

  var incomingPipe = DRAW.polyline([
    [300, 250],
    [300, 150],
    [150, 150],
    [150, 170],
    [280, 170],
    [280, 250]
  ]).fill('none').stroke({
    width: 3
  })


  var ductLower = DRAW.polygon([
    [400, 425],
    [460, 405],
    [650, 405],
    [710, 425],
    [710, 380],
    [400, 380]
  ]).fill('none').stroke({
    width: 3,

  })
var sluice_gate=draw.polyline([[690,200],[710,220],[710,450],[890,450],[890,220],[910,200]]).fill('none').stroke ({ 
    	width: 3
	});

var hjump_notch=draw.polyline([[690,200],[710,220],[710,450],[890,450],[890,220],[910,200]]).fill('none').stroke ({ 
    	width: 3
	});
var duct1=draw.polyline([[690,200],[710,220],[710,450],[890,450],[890,220],[910,200]]).fill('none').stroke ({ 
    	width: 3
	});
duct1.animate(4600,'',2500).size(307,23)
	
duct2 = draw.polygon([[401,404],[401,433],[401.1,401]]).attr ({ 
		'fill': '#00B0EA'
	});
duct3 = draw.polygon([[650.5,401],[652.1,400],[652.1,406.5]]).attr ({
		'fill':'#00B0EA'
	});

duct2.animate(1000,'',2500).size(70,21.5);
duct3.animate(920,'',6210).size(57.8,23.3);
	
<canvas id="canvas" width="640" height="480"></canvas>

var c = document.getElementById("myCanvas");
var cursor = c.getContext("2d");
var tank =c.getContext("2d");

var cylinder =c.getContext("2d"); cylinder.save();
cylinder.beginPath();
drawCylinder(cylinder ,300,250,70,25);
cylinder.fillStyle="black";  cylinder.fill();
cylinder.beginPath();
cylinder.rect(200,150,70,25); 
cylinder.fillStyle= "brown";  cylinder.fill();
drawCylinder(cylinder ,300,250,70,25);
cylinder.restore();
cursor.save();
cursor.moveTo(20,70);
cursor.lineTo(350,90);
cursor.stroke();
cursor.restore();

cursor.save();
cursor.moveTo(150,30);
cursor.lineTo(180,30);
cursor.stroke();
cursor.restore();

cursor.save();
cursor.moveTo(170,60);
cursor.lineTo(170,130);
cursor.stroke();
cursor.restore();
cursor.save();
cursor.moveTo(68,70);
cursor.lineTo(430,85);
cursor.stroke();
cursor.restore();
var rct = c.getContext("2d");
tank.save();
tank.beginPath();
tank.rect(68, 70, 15, 90);//side
tank.fillStyle = "#cae2e7";
tank.fill();
tank.restore();

cursor.rotate(1* Math.PI / 180);
cursor.beginPath();
cursor.rect(160,50, 25,5);
cursor.fillStyle = "red"; 
cursor.fill();

var tank = c.getContext("2d");
tank.save();
tank.rotate(2* Math.PI / 180);
tank.beginPath();
tank.rect(33,100, 400, 62);//water
tank.fillStyle = "blue";
tank.fill();
tank.restore();
var front=c.getContext("2d");
front.save();
front.rotate(-5* Math.PI / 180);
front.beginPath();
front.rect(200,150,70,25);
front.fillStyle ="black";
front.fill();
front.restore();  front.save();

	
	
}

window.onload=function() {
	core_exp();   }
	
draw_line(195, 300, 410, 300);
draw_line(410, 300, 410, 200);
draw_line(416, 200, 416, 300);
draw_line(416, 300, 510, 300);
draw_line(510, 300, 510, 200);
draw_line(516, 200, 516, 300);
draw_line(516, 300, 810, 300);
draw_line(195, 425, 810, 425);
draw_line(460, 300, 460, 355);
draw_line(470, 300, 470, 355);
draw_line(460, 355, 470, 355);
draw_line(460, 425, 460, 380);
draw_line(470, 425, 470, 380);
draw_line(460, 380, 470, 380);

var sluice_gate= draw.rect(0.01,18).attr ({
		'fill': '#00B0EA',
		x: 891 ,
		y: 391 
	});
	
	var pipe2 = draw.rect(18,0.01).attr ({
		'fill': '#00B0EA',
		x: 981 ,
		y: 409
	});
	var pipe2 = draw.rect(18,0.01).attr ({
		'fill': '#00B0EA',
		x: 981 ,
		y: 409
	});
	
	pipe1.animate({delay: '5s'}).size(108,18);
	pipe2.animate({delay: '6s'}).size(110,20);

//form for calculations
function openForm() {


  document.getElementById("myForm").style.display = "block";
	
	}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

//add code for calculations in separate file

<script src="calculations.js">  </script>
