var mySwiper = new Swiper('.swiper-container', {
  autoplay: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination'
  },
  on: {
    slideNextTransitionEnd: function() {
      change(this.realIndex);
    }
  }
});

function change(index) {
  $('.tab li')
    .eq(index)
    .addClass('on')
    .siblings()
    .removeClass('on');
}

$('.tab li').on('click', function() {
  $(this)
    .addClass('on')
    .siblings()
    .removeClass('on');
  mySwiper.slideTo($(this).index() + 1, 1000, false);
});
