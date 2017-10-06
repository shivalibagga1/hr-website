$(document).ready(function(){
	$('.collapse-menu').on("click",function(e){
        e.preventDefault();
		$('#nav a:not(:first)').toggle();
	});
    
	// $('.ui.dropdown').dropdown();
});