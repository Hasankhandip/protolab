"use strict";
// wow.js start
new WOW().init();
// navbar menu js start 
$('.menu-trigger').on('click', function(){
  $('.navbar-area').addClass('active');
});
$('.navbar-closer').on('click', function(){
  $('.navbar-area').removeClass('active');
});