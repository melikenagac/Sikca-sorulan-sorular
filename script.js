$(document).ready(function() {
  $('.accordion-header').click(function() {
    $(this).toggleClass('active');
    $(this).next('.accordion-content').slideToggle();
    $('.accordion-header').not(this).removeClass('active');
    $('.accordion-header').not(this).next('.accordion-content').slideUp();
  });
});