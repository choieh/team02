// const dot = document.querySelector('.dot');
// const dotRadius = dot.clientHeight;

/*
window.addEventListener('mousemove', e => {
  TweenMax.to(dot, 1.5, {
    x: e.pageX ,
    y: e.pageY ,
    ease: Power3.easeOut
  })
});
*/

$('.kimDetail_1').mouseover(function(){
  $(this).css({cursor: 'none'});
});

$(document).on('mousemove', function(e){
  $('#cursor').css({
    left:  e.pageX,
    top:   e.pageY
  });
});
