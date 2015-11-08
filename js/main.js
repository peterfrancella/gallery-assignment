$('.galimg').each(function(e){
	

	var imgheight = $(currentimg).height();
	var imgwidth = $(currentimg).width();

	if ( height > width ) {
		$(currentimg).addClass("portrait");
	}

	else if ( width > height ) {
		$(currentimg).addClass("landscape");
	}
});


