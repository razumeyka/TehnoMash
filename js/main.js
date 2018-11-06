$(document).ready(function(){

//mobile_menu
    
    $('.burger').click( function() { 
        $('header .menu').slideToggle(300);
        $('.burger').toggleClass( 'burger_active' ); 
    });

// sub-menu 

     $('.menu li').click(function(e){
        e.preventDefault();
        $(this).find('.sub-menu').slideToggle(300);
    });  
  
    $('.menu li.menu-item-has-children>a').click(function(e){
		e.preventDefault();
		$('.sub-menu').not($(this).closest('li').find('.sub-menu')).slideUp('300');
		$(this).closest('li').find('.sub-menu').slideToggle('300');
    }); 

    
// slider   
    
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
    
// animation   
    
    if ( window.innerWidth > 1023 ) {
        $('.advantages').viewportChecker({
            classToAdd: 'advantages_visible',
            offset: 10
        });
    }

	$('.steps').viewportChecker({
		classToAdd: 'steps_visible',
		offset: 50
	});

    
// mask
    
    $(".wpcf7-tel").mask("8(999) 999-99-99");
    
});