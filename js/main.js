$(document).ready(function(){

	$('.steps__icon').viewportChecker({
		classToAdd: 'steps__icon_visible',
		offset: 50
	});
    
    $('.steps__group').viewportChecker({
		classToAdd: 'steps__group_visible',
		offset: 100
	});
    
    $('.advantages__icon').viewportChecker({
		classToAdd: 'advantages__icon_visible',
		offset: 10
	});
    
    $('.advantages__advantage_delivery').viewportChecker({
		classToAdd: 'advantages__advantage_visible',
		offset: 10
	});
    
    
});