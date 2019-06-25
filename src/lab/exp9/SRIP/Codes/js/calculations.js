//script to calculate various parameters in channels expt

//avg velocity
function getAvgVel() {
    var rad = document.getElementById('radius').value;
	var s_val = document.getElementById('s').value;
	var n_val=document.getElementById('n').value;
    return Number(Math.pow(rad,(2/3))*Math.pow(s,(1/2))) / n_val;
}

function get_b_value()
{
	var big_h_val = document.getElementById('height').value; //whole water height H
	var small_h_val = document.getElementById('el_height').value; //element height h
	 var theta = document.getElementById('angle').value;
	//var s_val = document.getElementById('s').value;
	return 2*(big_h_val-small_h_val)*Math.tan(theta/2);
}



function get_el_area()  //hatched element area delA
{
 var del_area = calculate_area_sg();  //.value?
	var del_h = document.getElementById('delta_h').value;
	return get_b_value.value*del_h;
}
//sluice gate
function calculate_area_sg() {
    var area;
    try {
        var diameter = Number(document.getElementById('radius').value);
        diameter = Math.abs(diameter);
        area = (1 / 4) * Math.PI * diameter * diameter;
        return area;
    } catch (error) {
        throw error;
    }
}

const den = 1 / 10; // converting 10 mm to cm
const g = 914; //gravity

function discharge_vel()
{
return Math.sqrt(2*g*den);
}
//actual discharge Qa
function calculate_Qa() {
    try {
        var a_val = Number(document.getElementById('a').value);
        var h_val = Number(document.getElementById('h').value);
		var tm_val = document.getElementById('tm').value;
        var Qa = a_val*h_val*tm_val*1000;
        return Qa;
    } catch (error) {
        throw (error);
    }

}

function cal_q()
{
var cod_val = Number(document.getElementById('cod').value);
var theta = document.getElementById('angle').value;
	var big_h_val = document.getElementById('height').value; //whole water height H
	return Math.tan(theta/2)*(8/15)*cod_val*Math.sqrt(2*g)*Math.pow(big_h_val,(5/2);
}

//force exerted on the jet
function force_jet() {
    try {
		var area = calculate_area_sg();
        var discharge = calculate_Qa();
        
        var velocity = discharge / area;
        force = den * g * vel * vel;
        return force;
    } catch(error) {
        throw error;
    }
    
}
	
	//graphs
	 function plotGraph(vh1, vh2, ph1, ph2, th1, th2) {
  var chart = new CanvasJS.Chart("chartContainer", {


    title: {

      text: "",


    },
    axisY: [{
        title: "",
       // lineColor: "#C24642",
       // tickColor: "#C24642",
       // labelFontColor: "#C24642",
       // titleFontColor: "#C24642",

      },
      {
        title: "",
        //lineColor: "#369EAD",
       // tickColor: "#369EAD",
      //  labelFontColor: "#369EAD",
       // titleFontColor: "#369EAD"

      }
    ],

    toolTip: {
            </div>
          </div>
        </form>
      </div>
		
    </div>

/*
function displayResult() {
    try {
        var force = force_jet();
        var forcee = forcee_jet();
        var error = error_jet(force, forcee);
        alert('Force of JET = '+ force + ' ' + 'Partial Force of JET= ' + forcee + ' Error Percentage= ' + error);
    } catch(error) {
        alert(error);
    }
}
*/
function calculate()
	{
	if (velocity == null || area == null, discharge == null || diameter == null) {
    alert("All inputs are not filled. Please check!");
    return false;
  }

  try {
 
    if (velocity <= 0 || area <= 0 || discharge < 0 || diameter < 0) {
      throw ("Invalid input(s).");
    }

    else {

      get_avg_vel();
      get_b_val();
    }

    //    plotGraph(velocityHead, velocityHead2, pressureHead, pressureHead2, totalHead, totalHead2);
      //  alert("Average Total Head is " + avgTotalHead + " cm");

  catch (e) {
    alert("Error: " + e);
  }
}
	}
