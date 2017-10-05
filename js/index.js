$(document).ready(function(){
	$('.collapse-menu').on("click",function(e){
        e.preventDefault();
		$('#nav a:not(:first-child)').toggle();
	});
    
	// $('.ui.dropdown').dropdown();
});