$(document).ready(function() {
  $('.carousel-inner').addClass('zoom');
});

$(document).ready(function() {
$("#menu-toggle").click(function(e) {
      e.preventDefault();
      $(".wrapper, .sidebar-wrapper, body").toggleClass("active");
  });
});

$(document).ready(function() {
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                $('.balr').animate({'opacity':'1', 'margin-top':'0', 'margin-bottom':'30px'},1000);
                $('.courses').delay(500).animate({'opacity':'1', 'margin-top':'0', 'margin-bottom':'30px'},1000);
                $('.github').delay(1000).animate({'opacity':'1', 'margin-top':'0', 'margin-bottom':'30px'},1000);
            }
        });
    });
});
