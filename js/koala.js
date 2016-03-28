var Koala = {
  init: function() {
    Koala.initBackgroundEffect();
    Koala.initNiceScrolling();
    Koala.initNavBar();
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
  },

  initNavBar: function() {
    // jQuery to collapse the navbar on scroll
    $(window).scroll(function() {
      if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        // $(".intro .intro-body .brand-heading").addClass("collapsed");
      } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        // $(".intro .intro-body .brand-heading").removeClass("collapsed");
      }


    });



  }
};

$(document).ready(function() {
  Koala.init();
});
