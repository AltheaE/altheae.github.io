$(document).ready(function () {
$(function() {
    var selectedClass = "";
    $(".btn--filter").click(function(){
    selectedClass = $(this).attr("data-rel");
$("#portfolio").fadeTo(100, 0.1);
    $("#portfolio a").not("."+selectedClass).fadeOut();
setTimeout(function() {
  $("."+selectedClass).fadeIn();
  $("#portfolio").fadeTo(500, 1);
}, 500);
    
});
});
  });