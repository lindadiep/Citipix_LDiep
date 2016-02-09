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
	
	$('#city-type').change(function() {

		// selection is submitted
		if (selection == cities[i=0]) {

			// background changes
			$('body').attr('class', 'nyc');
			}

		else if (selection == cities[i=1]) {
			$('body').attr('class', 'sf');
			}

		else if (selection == cities[i=2]) {
			$('body').attr('class', 'la');
			}

		else if (selection == cities[i=3]) {
			$('body').attr('class', 'atx');
			}

		else if (selection == cities[i=4]) {
			$('body').attr('class', 'syd');
			}
	});
});	