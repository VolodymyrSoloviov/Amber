// $(function () {
//   $('.menu-burger').fancybox({
//   	type : 'inline',
//   	padding : 0
//   });

//   $('.menu-burger__close').on('click', function(e) {
//     e.preventDefault();
//     $.fancybox.close();
//   });
// });

$(function() {
	$('#menu-icon').click(function() {
		if ($('#mobile-menu').is(':visible'))
			$('#mobile-menu').hide();
		else 
			$('#mobile-menu').show();
	});

	// $(document).scroll(function () {
	// 	if ($(document).width() > 768) {
	// 		if ($(document).scrollTop() > $('.header').height())
	// 			$('.header').addClass('fixed-menu');
	// 		else 
	// 			$('.header').removeClass('fixed-menu');
	// 	}
	// });

	window.onresize = function(event) {
		$('#mobile-menu').hide();
	};
});
