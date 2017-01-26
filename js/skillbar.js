$(document).ready(function(){

	// gotta make sure this only renders once.
	var doneAnimation = false;

	if ((window.pageYOffset + window.innerHeight) > ($(".skillbar:first").offset().top+150)) {
		$('.skillbar').each(function(){
			$(this).find('.skillbar-bar').animate({
				width:$(this).attr('data-percent')
			},2000);
			doneAnimation = true;
		});
	}

	$(document).on('scroll', function() {
		if (((window.pageYOffset + window.innerHeight) > ($(".skillbar:first").offset().top+150)) && doneAnimation === false) {
			$('.skillbar').each(function(){
				$(this).find('.skillbar-bar').animate({
					width:$(this).attr('data-percent')
				},2000);
				doneAnimation = true;
				
			});
		}
	});
});