
$(document).ready(function () {

  $('.hamburgerMenu').click(function (e) {
    e.preventDefault();
    $('.mobileMenu').slideToggle(600);
  });

  $('.mobileMenu li a').click(function () {

    //收起來
    $('.mobileMenu').slideUp(600);
  });


});