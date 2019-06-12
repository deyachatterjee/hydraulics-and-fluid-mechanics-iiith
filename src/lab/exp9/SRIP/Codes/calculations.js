
//script to calculate various parameters in channels expt

//avg velocity
function getAvgVel() {
    var rad = document.getElementById('radius').value;
	var s_val = document.getElementById('s').value;
	var n_val=document.getElementById('n').value;
    return Number(Math.pow(rad,(2/3))*Math.pow(s,(1/2))) / n_val;
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

const den = 1 / 10; // converting 10 mm to cm
const g = 914; //gravity

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
