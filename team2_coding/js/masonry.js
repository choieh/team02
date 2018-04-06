// init Masonry
var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  percentPosition: true,
  columnWidth: '.grid-sizer',
});


$(document).ready(function() {

  $(".grid-item").hover(function() {
    console.log($(this).find('img').attr("alt"));
  });

  $('.grid-item').find('img').on("click", function() {
    var imgSrc = $(this).attr("src");
    var imgAlt = 'tetet';
    $('#page-mask').addClass('show');
    console.log(imgSrc);
    $('.img-box').addClass('show');
    $('#img-box').addClass('show').html('<img src="' + imgSrc + '"/><div class="img-detail">' + imgAlt + '</div>');
  });

  $('.close-btn').click(function() {
    $('.img-box').removeClass('show');
    $('#page-mask').removeClass('show');
  });


});
