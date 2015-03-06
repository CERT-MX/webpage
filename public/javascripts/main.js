$(document).ready(function() {
  function set_height() {
    var width = $(window).width(),
        height = $(window).height();

    $('#home').css('height', height);
  }

  set_height();

  $(window).resize(function() {
    set_height();
  });
});
