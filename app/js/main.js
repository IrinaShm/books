var mySwiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  speed: 900,
  navigation: {
    nextEl: '.button-arrow.button-arrow--next',
    prevEl: '.button-arrow.button-arrow--prev',
  }
})

$(function() {
$('.menu__btn').on('click', function() {
  $('.menu__list').slideToggle();
});

$('.search-books__tabs-item').on('click', function(e) {
  e.preventDefault();

  $('.search-books__tabs-item').removeClass('search-books__tabs-item--active');
  $('.search-books__content-item').removeClass('search-books__content-item--active');

  $(this).addClass('search-books__tabs-item--active');
  $($(this).attr('href')).addClass('search-books__content-item--active');
});
});