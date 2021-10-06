$(function(){
  $('.slider__items').slick({
    slidesToShow: 5,
    slidesToScroll: 2,
    dots: true,
    nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="assets/images/arrow_right.svg" alt=""></button>',
    prevArrow: '<button type=""button class="slick-arrow slick-prev"><img src="assets/images/arrow_left.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 1470,
        settings: {
          slidesToShow: 4,
        }
      },
  
      {
        breakpoint: 1140,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
        }
      },
      {
        breakpoint: 860,
        settings: {
            slidesToShow: 2,
        }
      },
      {
        breakpoint: 676,
        settings: {
            slidesToShow: 1,
        }
      }
  
    ]
  })
})

window.onload = function(){

  var scrolled;
  var timer;

  let btnUpTo = document.querySelector('.footer__buttonUp')
  btnUpTo.onclick = function(){
    scrolled = window.pageYOffset;
    scrollToTop();
  }

  function scrollToTop(){
    console.log(scrolled)
    if(scrolled > 0){
      window.scrollTo(0, scrolled)
      scrolled = scrolled - 5;
      timer = setTimeout(scrollToTop, 5)
    }else{
      clearTimeout(timer)
      window.scrollTo(0,0)
    }
  }
}