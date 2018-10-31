var siteNameLineHeight = $('.nav-logo svg').height() + 'px';
$('.nav-logo h1.site-name').css('line-height',siteNameLineHeight);

// slick slider
$(document).ready(function(){
  $('.slider-region').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });
});

// print current year for footer
var dteNow = new Date();
var intYear = dteNow.getFullYear();

$('.year').text(intYear);
