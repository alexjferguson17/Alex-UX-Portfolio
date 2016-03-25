$(document).ready(function(){
	$('.scroll').click(function() {
    $('html,body').animate({
        scrollTop: $('.viewWork').offset().top},
        'slow');
	});
});