$(document).ready(function(){


	$(".down>a").on("click",function(e){
			e.preventDefault();

			var ht = $(".row").height();
			var qr = $("#menu>li:last").index();
			var nowTop = ht*qr;

			$('html, body').stop().animate({"scrollTop":nowTop},500);
		});


$("#menu li").on("click",function(e){
		e.preventDefault();

		var ht = $(".row").height();
		var i = $(this).index();
		var nowTop = i *(ht);

		$('html, body').stop().animate({"scrollTop":nowTop},500);
	});

	$(window).on('scroll',function(){

		var ht = $(".row").height();
		var scroll = $(window).scrollTop();

		for(var i=0;i<6;i++){
			if(scroll>=ht*i && scroll<ht*(i+1)){
				$('#menu li').removeClass();
				$('#menu li').eq(i).addClass('on');
			}
		}
	});



});












//
