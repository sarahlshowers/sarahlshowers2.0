$(function() {

  //page scroll behavior
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });


  $(window).scroll(function() {
    if ($(this).scrollTop() > 20){
      $('nav').addClass('sticky');
    } else {
      $('.main-header, nav').removeClass('sticky');
    }

  });

});

/*******************************
Check for touch devices
*******************************/
function is_touch_device() {
  try {
    document.createEvent('TouchEvent');
    return true;
  } catch (e) {
    return false;
  }
}

var htmlEl = document.querySelector('html');

if (is_touch_device()) {
  htmlEl.classList.add('touch');
} else {
  htmlEl.classList.add('no-touch');
}