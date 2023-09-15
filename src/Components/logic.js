import $ from "jquery";

$(document).ready(function () {
  $(".navbar-toggler").click(function () {
    $("#navbar_supported").toggleClass("show");
  });
});
$(document).ready(function() {
  $('.nav-link.dropdown-toggle').on('click', function(e) {
    e.preventDefault(); 
    $('.services_d').toggle();
  });
});
