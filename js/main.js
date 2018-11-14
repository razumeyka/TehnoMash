$(document).ready(function(){
    
    $('.fancybox').fancybox();
    
//mobile_menu
    
    $('.burger').click( function() { 
        $('header .menu').slideToggle(300);
        $('.burger').toggleClass( 'burger_active' ); 
    });

// sub-menu 
  
    $('.menu li.menu-item-has-children>a').click(function(e){
		e.preventDefault();
		if(window.innerWidth>1279)return ;
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
     
	$('.advantages').viewportChecker({
		classToAdd: 'advantages_visible',
		offset: 10
	}); 

	$('.steps').viewportChecker({
		classToAdd: 'steps_visible',
		offset: 50
	});

// mask
    
    $(".wpcf7-tel").mask("8 (999) 999-99-99");
    
// product-slider
        
    var navBtnId = 0;    
    $('.slider__item').click(function() {
        $('.slider__item').removeClass('slider__item_active');
        navBtnId = $(this).index();
        $('.slider__inner').css('margin-left','-'+navBtnId+'00%'); 
        $(this).addClass('slider__item_active');
    });
    
// select 
        
    $('.select__field').click(function(){
		$('.select').not($(this).closest('.select')).removeClass('active').find("ul").fadeOut(200);
		$(this).closest('.select').toggleClass('active').find("ul").fadeToggle(200);
	})
	
	$('.select li').click(function(){
		$(this).closest('.select').find('input').val($(this).data('value'));
		$(this).closest('.select').find('.select__field').html($(this).html());
		$(this).closest('.select').toggleClass('active').addClass('select_changed');
        $(this).closest(".select ul").fadeOut(200); 
	})
      
// input-border
    
    $('.questionnaire__field_input').focusin(function() {       
        $(this).addClass('questionnaire__field_active');
    });
    
    $('.questionnaire__field_input').focusout(function() {     
        $(this).removeClass('questionnaire__field_active');
    });
    
    $('.questionnaire__field').change(function() {  
        if($(this).find(".wpcf7-form-control").val() == '') {                                        $(this).closest(".questionnaire__field-wr").removeClass('questionnaire__field-wr_changed');
        } else {            $(this).closest(".questionnaire__field-wr").addClass('questionnaire__field-wr_changed');
        }
    });
    
// checkbox

    $('.questionnaire__field_checkbox input').change(function() {  
        $(this).closest(".questionnaire__checkbox").toggleClass('changed');
    });
    
// input[type="file"]

	$('input[type="file"]').change(function(){
		if($(this).val()==''){
			$(this).next().html('Прикрепить файлы');
			return;
			}
		//console.log(.files);
		var ar=[];
		for (var i = 0; i < $(this)[0].files.length; i++) {
			ar.push($(this)[0].files[i].name);
		}
		$(this).next().html(ar.join(', '));
	});
    
    
});