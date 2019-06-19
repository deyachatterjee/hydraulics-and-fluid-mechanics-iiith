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
