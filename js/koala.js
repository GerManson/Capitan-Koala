var Koala = {
  init: function() {
    Koala.initBackgroundEffect();
    Koala.initNiceScrolling();
  },

  initBackgroundEffect: function() {
    if($(window).width() > 991) {
		  $('.intro').mousemove(function(e){
			  var x = -(e.pageX + this.offsetLeft) / 20;
			  var y = -(e.pageY + this.offsetTop) / 20;
			  $(this).css('background-position', x + 'px ' + y + 'px');
		  });
    }
  },

  initNiceScrolling: function() {
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
    });
  }
};

$(document).ready(function() {
  Koala.init();
});
