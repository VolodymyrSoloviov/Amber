 $(function () {
	$('.featured-dishes__list').owlCarousel({
			items: 4,
			loop: true,
			nav: true,
			dots: true,
			autoWidth: true,
			responsive: {
			0: {
				items : 2
			},
			460: {
				items: 2,
				autoWidth: false
			},
			730: {
				items : 3
			},
			950: {
				items: 4
			}
		}
	});
});