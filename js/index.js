$(document).ready(function(){
	$('.collapse-menu').on("click",function(e){
        e.preventDefault();
		$('#nav a').toggle();
	});
    
	$('.ui.dropdown').dropdown();
});