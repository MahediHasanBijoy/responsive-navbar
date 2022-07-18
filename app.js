$(document).ready(function(){

	// adding icon after the sub-menu name
	$('ul li ul').parent().children('a').append(' <i class="fa-solid fa-angle-down"></i>');

	// screen width
	var width = parseInt($(window).innerWidth());

	if(width < 768){
		$('.open').show();
		$('.close').hide();
		$('.menu').hide();
	}else{
		$('.open').hide();
		$('.close').hide();
		$('.menu').show();
	}


	$('.open').click(function(){
		$('.open').hide();
		$('.close').show();
		$('.menu').show();
	});

	$('.close').click(function(){
		$('.open').show();
		$('.close').hide();
		$('.menu').hide();
	});

	$('.menu ul li').mouseenter(function(){
		$(this).children('ul').slideDown();
	});

	$('.menu ul li').mouseleave(function(){
		$(this).children('ul').slideUp();
	});

	// fixed nav at top 
	$(document).scroll(function(){
		var scrollPosition = $(document).scrollTop();

		if(scrollPosition > 333){
			$('nav').addClass('fixed');
			$('.top').show();
		}else{
			$('nav').removeClass('fixed');
			$('.top').hide();
		}
	});


	$('.top').click(function(){
		$('html').animate({scrollTop: '0'}, 1000);
	})
	
});


