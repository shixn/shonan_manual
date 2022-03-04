(function($) {

  
  /***** easing settings *****/
  jQuery.extend( jQuery.easing, {
    easeOutCubic: function (x, t, b, c, d) {
      return c*((t=t/d-1)*t*t + 1) + b;
    },
  });

}(jQuery));