$(document).ready(function(){
  var abc = $(window).height();
  $(".main").height(abc);

  $('h1').mousemove(function(e){
      var rXP = (e.pageX - this.offsetLeft-$(this).width()/2);
      var rYP = (e.pageY - this.offsetTop-$(this).height()/2);
      $('h1').css('text-shadow', +rYP/10+'px '+rXP/80+'px rgba(227,6,19,.8), '+rYP/8+'px '+rXP/60+'px rgba(255,237,0,1), '+rXP/70+'px '+rYP/12+'px rgba(0,159,227,.7)');
    });
  $('#header').hover(function(){
    $('#button').addClass('font-effect-neon')
      // $('#button').removeClass('font-effect-neon')
    });
});
