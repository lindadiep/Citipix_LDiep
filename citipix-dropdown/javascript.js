$(document).ready( function(){

// create array for the dropdown
var index;
var cities = ["NYC", "SF", "LA", "ATX", "SYD"];
	
	// add dropdown to html
	for (index=0; index < cities.length; ++index) {
	$("#city-type").append("<option>" + cities[index] + "</option>"); 
	}

	// user selects city from scroll menu
	var selection = $('option').val();
	
	// selection is submitted
	$('#city-type').change(function() {
		// background changes, voila!
	    $('body').css('background-image', 'url("images/austin.jpg")');
	
	});
});	

//		if (selection == cities[i=0]) {
//		    $('body').css('background-image', 'url("images/nyc.jpg")');
//			}

//		else if (selection == cities[i=1]) {
//	    	$('body').css('background-image', 'url("images/sf.jpg")');
//			}

//		else if (selection == cities[i=2]) {
//	    	$('body').css('background-image', 'url("images/la.jpg")');
//			}

//		else if (selection == cities[i=3]) {
//	    	$('body').css('background-image', 'url("images/austin.jpg")');
//			}

//		else if (selection == cities[i=4]) {
//	    $('body').css('background-image', 'url("images/sydney.jpg")');
//			}
