$(function () {
  $('.menu-burger').fancybox({
  	type : 'inline',
  	padding : 0
  });

  $('.menu-burger__close').on('click', function(e) {
    e.preventDefault();
    $.fancybox.close();
  });
});

