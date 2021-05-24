$(function () {

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  var filter__1 = document.querySelector('[data-ref="filter-1"]');
  var filter__2 = document.querySelector('[data-ref="filter-2"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(filter__1, config);
  var mixer2 = mixitup(filter__2, config);
})