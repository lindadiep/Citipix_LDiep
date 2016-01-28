// user enters city into input
// user clicks button
// background changes

/* 

$(document).ready(function(){ 

	var n = $("#example div").length;

	if (n < 2) {
		$("body").css("background", "green");
	} 
	else {
		$("body").css("background", "orange");
	}
});

*/


var city = $('#city-type').val();
	// console.log(city);

$('#submit-btn').submit(changeBackground);

	function changeBackground(event) {
		event.preventDefault();

		if (city === 'new york') {
			$('body').css('background','blue');
		}

	}
