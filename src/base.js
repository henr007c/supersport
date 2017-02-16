jQuery(document).ready(function() {
    jQuery('select').material_select();

    jQuery(".button-collapse").sideNav();
	
  	jQuery('.slider').slider({
  		height: 650
  	});
  	
  	// Pause slider
	jQuery('.slider').slider('pause');
	// Start slider
	jQuery('.slider').slider('start');
	// Next slide
	jQuery('.slider').slider('next');
	// Previous slide
	jQuery('.slider').slider('prev');


});