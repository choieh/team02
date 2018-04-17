$(document).ready(function() {
  
  $(window).scroll(function(){
    if($(this).scrollTop()>200){
      $(".position_up").fadeIn();
    }else{
      $(".position_up").fadeOut();
    }
  });

  $(".position_up").on('click',function(){
    var ht = $(window).scrollTop();
      $('html,body').stop().animate({'scrollTop':0},500);
  });

});
