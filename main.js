$(document).ready(function() {
    // Collapse all other accordions when a new one is opened
    $('.faq-acc .card-one').on('show.bs.collapse', function() {
      $('.faq-acc .card-one .collapse.show').collapse('hide');
    });
  });