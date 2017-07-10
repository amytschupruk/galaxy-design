'use strict';

$(document).ready(function () {
  //hamburger menu
  $('#nav-icon').click(function () {
    $(this).toggleClass('open');
    $('.hamburger-menu').toggleClass('show');
  });
  $('.hamburger-menu a').click(function () {
    $('#nav-icon').removeClass('open');
    $('.hamburger-menu').removeClass('show');
  });
  // Isotope grid masonry isotope plugin
  var $grid = $('.portfolio--gallery__container').isotope({
    // customized options...
    itemSelector: '.portfolio--gallery__cell',
    percentPosition: true,
    masonry: {
      // use element for option
      columnWidth: '.grid-sizer'
    }
  });

  //Smooth Scroll Plugin
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

  //Masonry Isotope plugin
  // layout Isotope after each image loads
  $grid.imagesLoaded().progress(function () {
    $grid.isotope('layout');
    //isotope filter functions
    $('#filters').on('click', 'button', function () {
      var filterValue = $(this).attr('data-filter-value');
      $grid.isotope({ filter: filterValue });
    });
  });
  //default isotope filter to be on "logos"
  $('.portfolio--gallery__container').isotope({ filter: '.logo' });

  //Fancybox plugin to view individual images
  $("a.single_image").fancybox({});

  //flickity plugin for Clients Section
  $('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true
  });

  //Sticky nav jQuery
  $(window).scroll(function () {
    if ($(this).scrollTop() > 550) {
      $('nav').addClass('sticky-top');
      //hamburger menu positioning
      $('nav').css('position', 'fixed');
    } else {
      $('nav').removeClass('sticky-top');
      //hamburger menu positioning
      $('nav').css('position', 'relative');
    }
  });
});