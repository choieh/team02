$(document).ready(function(){


$(".down>a").on('click',function(e){
	e.preventDefault();//anchor이벤트의 기본동작을 막는다.
	var thisTarget = $(this).attr("href");
	$(window).scrollTop($(thisTarget).offset().top);
});

$("#menu li").on("click",function(e){
		e.preventDefault();

		var ht = $(".menu-con>div").height();
		var i = $(this).index();
		var nowTop = i *(ht);

		$('html, body').stop().animate({"scrollTop":nowTop},500);
	});

	$(window).on('scroll',function(){

		var ht = $(".menu-con>div").height();
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
