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

    $('.others').each(function (index) {
        var imagePos = $(this).offset().top;

        if(imagePos <= bottomOfWindow && imagePos >= topOfWindow){
            // $(this).addClass('visible').delay();
            var $this = $(this);
            setTimeout(function () { $this.addClass("visible"); }, index * 500);
        }else{
            // $(this).removeClass('visible');
        }
    });
});

// var vid = document.getElementById("bgvid");
// var pauseButton = document.querySelector("#polina button");

// if (window.matchMedia('(prefers-reduced-motion)').matches) {
//     vid.removeAttribute("autoplay");
//     vid.pause();
//     pauseButton.innerHTML = "Paused";
// }

// function vidFade() {
//   vid.classList.add("stopfade");
// }

// vid.addEventListener('ended', function()
// {
// // only functional if "loop" is removed 
// vid.pause();
// // to capture IE10
// vidFade();
// }); 


// pauseButton.addEventListener("click", function() {
//   vid.classList.toggle("stopfade");
//   if (vid.paused) {
//     vid.play();
//     pauseButton.innerHTML = "Pause";
//   } else {
//     vid.pause();
//     pauseButton.innerHTML = "Paused";
//   }
// })

