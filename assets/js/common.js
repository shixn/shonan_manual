(function($) {

  $('a').on('click', function() {
    const href = $(this).attr('href');
    if (href.includes('#')) {
      const target = href.split('#')[1];
      const offset = $('#' + target).offset().top;
      $('body, html').animate({scrollTop: offset}, 400, 'easeOutCubic');
    }
  });
  
  /*
   * easing settings 
   */
  jQuery.extend( jQuery.easing, {
    easeOutCubic: function (x, t, b, c, d) {
      return c*((t=t/d-1)*t*t + 1) + b;
    },
  });

}(jQuery));