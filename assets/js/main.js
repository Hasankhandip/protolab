"use strict";
// wow.js start
new WOW().init();
// navbar menu js start 
$('.menu-trigger').on('click', function(){
  $('.navbar-area').addClass('active');
  $('.page-content-wrapper').addClass('active');
});
$('.navbar-closer').on('click', function(){
  $('.navbar-area').removeClass('active');
  $('.page-content-wrapper').removeClass('active');
});
// page-content-left js start
$(window).on("scroll", function(){
  if ($(this).scrollTop() > 50 ) {
    $(".page-content-left").addClass("active");
    $(".page-content-right").addClass("active");
  } else {
    $(".page-content-left").removeClass("active");
    $(".page-content-right").removeClass("active");
  }
});