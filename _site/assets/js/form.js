jQuery(document).ready(function ($) {
  $('#contact-form').one('submit', function() {
    $('.form-call__header').text('Obrigado!');
    $('.form-call__paragraph').text('Em breve entraremos em contato.');
  });
});
