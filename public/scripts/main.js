'use strict';

// Isotope grid
var $grid = $('.portfolio--gallery__container').isotope({
  // customized options...
  itemSelector: '.portfolio--gallery__cell',
  percentPosition: true,
  masonry: {
    // use element for option
    columnWidth: '.grid-sizer'
  }
});

$("a").on('click', function (event) {
  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();
    // Store hash
    var hash = this.hash;
    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function () {
      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  } // End if
});

// layout Isotope after each image loads
$grid.imagesLoaded().progress(function () {
  $grid.isotope('layout');
  //isotope filter functions
  $('#filters').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter-value');
    $grid.isotope({ filter: filterValue });
  });
});

$("a.single_image").fancybox({});

$('.main-carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true
});