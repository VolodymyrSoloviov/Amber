$(function() {



	var div = $('.dishes__list'),
			content = $('.menu__btn-text'),
			icon = $('.menu__btn-icon');

	$('.menu__btn-link').on('click', function(e){
		e.preventDefault();

		if(!div.hasClass('dishes__list_active')) {
			div.addClass('dishes__list_active');
			content.text("less");
		}	else {
			div.removeClass('dishes__list_active');
			content.text("load more");
			
		}

		if(!icon.hasClass('fa-angle-up')) {
			icon.addClass('fa-angle-up');
		} else {
			icon.removeClass('fa-angle-up');
		}

		
	});
});