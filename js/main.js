$(document).ready(function(){
    $(".slide-image").each(function(){
        var bg = $(this).data("bg");
        var pos = $(this).data("kenburn-start");

        $(this).css({
            "background-image":"url("+bg+")",
            "transform-origin": pos
        });
    });

    $(".kenburn-slider").flexslider({
        slideshow: true,
        slideshowSpeed : 5000,
        animationSpeed : 1000,
        controlNav: false,
    });
    
    $('.flexslider').flexslider({
        animation: "slide"
      });

	$('.steps__illustrated').viewportChecker({
		classToAdd: 'steps__illustrated_visible',
		offset: 50
	});
    
    $('.steps__group').viewportChecker({
		classToAdd: 'steps__group_visible',
		offset: 100
	});
    
    $('.advantages__advantage').viewportChecker({
		classToAdd: 'advantages__advantage_visible',
		offset: 10
	});
    
    
});