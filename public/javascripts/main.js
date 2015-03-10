$(document).ready(function() {
  var shown = false;

  function set_height() {
    var width = $(window).width(),
        height = $(window).height();

    $('#home').css('height', height);
  }

  set_height();

  $(window).resize(function() {
    set_height();
  });

  $(window).scroll(function() {
    if ($(window).scrollTop() > $('#home').height()) {
      $('#menu').css('position', 'fixed');
    } else {
      $('#menu').css('position', 'relative');
    }
  });

  $('.show-menu').click(function (e) {
    e.preventDefault();

    if(!shown) {
      $('#menu').css('height', 'auto');
      $('#menu .link').css('display', 'block');
      $('#menu .socials').css('display', 'block');
      shown = true;
    } else {
      $('#menu').css('height', '80px');
      $('#menu .link').css('display', 'none');
      $('#menu .socials').css('display', 'none');
      shown = false;
    }
  });
});
