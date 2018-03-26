$(document).ready(function(){

$("#menu ul li").on("click",function(e){
		e.preventDefault();

		var ht = $(window).height();
		var i = $(this).index();
		var nowTop = i * ht;

		$('html, body').stop().animate({"scrollTop":nowTop},500);
	});

	$(window).on('scroll',function(){

		var ht = $(window).height();
		var scroll = $(window).scrollTop();

		for(var i=0;i<6;i++){
			if(scroll>=ht*i && scroll<ht*(i+1)){
				$('#menu ul li').removeClass();
				$('#menu ul li').eq(i).addClass('on');
			}
		}
	});

});












//
