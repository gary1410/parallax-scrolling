$(document).ready(function(){
  $(window).on('scroll', function(e) {
    parallax();
  });
});

function parallax(){
  var scrollPosition = $(window).scrollTop();
  $('#grid').css('top', (0 - (scrollPosition * .20))+'px' );
  // scrollPosition will be negative, or compared to when you scroll down
}