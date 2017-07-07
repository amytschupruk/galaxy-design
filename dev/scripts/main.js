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
// layout Isotope after each image loads
$grid.imagesLoaded().progress( function() {
  	$grid.isotope('layout');
  	//isotope filter functions
	$('#filters').on( 'click', 'button', function() {
	  var filterValue = $(this).attr('data-filter-value');
	  $grid.isotope({ filter: filterValue });
	});
});

$("a.single_image").fancybox({
});

$('.main-carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true
});






