$(document).ready(function(){
	$('.collapse-menu').on("click",function(e){
        e.preventDefault();
		$('#nav a:not(:first)').toggle();
	});
    
	// $('.ui.dropdown').dropdown();
});


$(window).scroll(function () {
    var topOfWindow = $(window).scrollTop(),
        bottomOfWindow = topOfWindow + $(window).height();

    $('.others').each(function () {
        var imagePos = $(this).offset().top;

        if(imagePos <= bottomOfWindow && imagePos >= topOfWindow){
            $(this).addClass('visible');
        }else{
            $(this).removeClass('visible');
        }
    });
});