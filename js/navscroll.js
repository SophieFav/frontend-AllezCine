$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 520) {
	    $(".navbartop").css("background" , "#333");
	  }

	  else{
		  $(".navbartop").css("background" , "transparent");  	
	  }
  })
})