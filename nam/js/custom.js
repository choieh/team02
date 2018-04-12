$(document).ready(function(){
  var abc = $(window).height();
  $(".main").height(abc);

  $('h1').mousemove(function(e){
      var rXP = (e.pageX - this.offsetLeft-$(this).width()/2);
      var rYP = (e.pageY - this.offsetTop-$(this).height()/2);
      $('h1').css('text-shadow', +rYP/10+'px '+rXP/80+'px rgba(227,6,19,.8), '+rYP/8+'px '+rXP/60+'px rgba(255,237,0,1), '+rXP/70+'px '+rYP/12+'px rgba(0,159,227,.7)');
    });

  $(window).on("scroll", function(){
    var list = $(this).index();
    var nowTop = list*abc;
    var scroll = $(window).scrollTop();
    var height=$(".main").height();
    $(".ani-txt").removeClass("on");
    if(scroll >= height*0 && scroll < height*1){
      $(".fa").css("color", "#fff");
      $(".nav_list>li:nth-child(1)").find(".ani-txt").addClass("on");
      $(".nav_list>li:nth-child(1)").find(".change").css("color", "purple");
    } else if(scroll >= height*1 && scroll < height*2) {
      $(".fa").css("color", "#fff");
      $(".nav_list>li:nth-child(2)").find(".ani-txt").addClass("on");
      $(".nav_list>li:nth-child(2)").find(".change").css("color", "purple");
    } else if(scroll >= height*2 && scroll < height*3){
      $(".fa").css("color", "#fff");
      $(".nav_list>li:nth-child(3)").find(".ani-txt").addClass("on");
      $(".nav_list>li:nth-child(3)").find(".change").css("color", "purple");
    } else if(scroll >= height*3 && scroll < height*4){
      $(".fa").css("color", "#fff");
      $(".nav_list>li:nth-child(4)").find(".ani-txt").addClass("on");
      $(".nav_list>li:nth-child(4)").find(".change").css("color", "purple");
    } else if(scroll >= height*4 && scroll < height*5){
      $(".fa").css("color", "#fff");
      $(".nav_list>li:nth-child(5)").find(".ani-txt").addClass("on");
      $(".nav_list>li:nth-child(5)").find(".change").css("color", "purple");
    }
  });

  $(".nav_list>li").on('click',function(e){
    e.preventDefault();

    var list = $(this).index();
    var nowTop = list*abc;
    $('html, body').stop().animate({"scrollTop":nowTop},1000);
    if(list==0){
      $(".change").css("color", "#fff");
      $(".nav_list>li:nth-child(1)").find(".change").css("color", "purple");
    } else if(list==1) {
      $(".fa").css("color", "#fff");
      $(".nav_list>li:nth-child(2)").find(".change").css("color", "purple");
    } else if(list==2){
      $(".fa").css("color", "#fff");
      $(".nav_list>li:nth-child(3)").find(".change").css("color", "purple");
    } else if(list==3){
      $(".fa").css("color", "#fff");
      $(".nav_list>li:nth-child(4)").find(".change").css("color", "purple");
    } else if(list==4){
      $(".fa").css("color", "#fff");
      $(".nav_list>li:nth-child(5)").find(".change").css("color", "purple");
    }

  });

  $("html,body").stop().animate({"scrollTop":0});
  $(".main").addClass("on");










});
