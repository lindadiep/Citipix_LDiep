/*
 * Hi Linda!  I am adding feedback about your code in Javascript comments like this on.
 * 
 * Overall, great job!  The page functions just like it should.  
 * One comment about code style - make sure you watch how you indent your code and be sure
 * to indent consistently.
 * 
 * Fantastic use of comments throughout the code.  More feedback below!
 */


$(document).ready(function() {

	// user clicks button

    // Very nice use of an anonymous function here!  :)
	$('form').submit(function(event){
		event.preventDefault();

    // user enters city into input
    var city = $('#city-type').val();
    //console.log(city);

    // ^^ Nice use of console.log() - I'm assuming you were using that to debug?

		// background changes

        // The if-else statement looks fantastic!
		if (city == 'NYC' || city == 'New York City' || city == 'New York') {

            /* Using the attr() jQuery function is definitely a great way to change the
             * class here.  As an alternative, you could also use the addClass() function
             * to add the appropriate class and the removeClass() function to remove any other
             * classes that may have been on the body element before, like this:
             *
             * $('body').removeClass().addClass('nyc');
             *
             * Nothing wrong with using attr() to do this; it is probably more efficient, in fact,
             * since you are only using 1 function instead of 2.  Just wanted to make sure
             * you know about the alternative.  :)
             */

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


	
