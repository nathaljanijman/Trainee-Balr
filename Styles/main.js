$(document).ready(function() {
  $('.carousel-inner').addClass('zoom');
});

$(document).ready(function() {
$("#menu-toggle").click(function(e) {
      e.preventDefault();
      $(".wrapper, .sidebar-wrapper, body").toggleClass("active");
  });
});
