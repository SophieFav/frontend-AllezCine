$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 520) {
	    $(".navbartop").css("background" , "#111");
	  }

	  else{
		  $(".navbartop").css("background" , "transparent");  	
	  }
  })
})