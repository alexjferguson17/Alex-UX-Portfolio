$(document).ready(function(){

	if (typeof WOW !== 'undefined') {
		new WOW().init();
	}
	

	$('.scroll').click(function() {
	    $('html,body').animate({
	        scrollTop: $('.viewWork').offset().top},
	        'slow');
	});

	$('.scrollSection').click(function() {
	    $('html,body').animate({
	        scrollTop: $('.secondSection').offset().top},
	        'slow');
	});
});