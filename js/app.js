$(document).ready(function(){

	new WOW().init();

	$('.scroll').click(function() {
    $('html,body').animate({
        scrollTop: $('.viewWork').offset().top},
        'slow');
	});
});