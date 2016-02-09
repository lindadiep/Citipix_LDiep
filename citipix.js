// html code
//              <form>
//                  <input type="text" id="city-type" placeholder="Enter a city name...">
//                  <input type="submit" value="Update" id="submit-btn">
//              </form>


$(document).ready(function() {

	// user clicks button
	$('form').submit(function(event){
		event.preventDefault();

    // user enters city into input
    var city = $('#city-type').val();
    //console.log(city);

		// background changes

		if (city == 'NYC' || city == 'New York City' || city == 'New York') {
			$('body').attr('class','nyc');
    	} 

    	else if (city == 'SF' || city == 'San Francisco' || city == 'Bay Area') {
    		$('body').attr('class','sf');	
    	}

    	else if (city == 'LA' || city == 'Los Angeles' || city == 'LAX') {
    		$('body').attr('class','la');	
    	}

    	else if (city == 'ATX' || city == 'Austin') {
    		$('body').attr('class','austin');	
    	}

      	else if (city == 'SYD' || city == 'Sydney') {
    		$('body').attr('class','sydney');	
    	}

	});
});


	
