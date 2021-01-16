/*------------------------------------ Slider Rows Product Featured */
$('.rows-product-featured').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
      }
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
/*------------------------------------ Slider Rows Product Categories */
$('.rows-product-categories').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true,
      }
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
var mzOptions = {
  zoomMode:true,
  onExpandClose: function(){MagicZoom.refresh();}
};
/*------------------------------------ Slider Post Home */
$('.row-product-related').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
/*------------------------------------ Single Product */
(function ($) {
  $('.slider-thumbnail-navigation').slick({
    dots: false,
	  infinite: false,
	  speed: 300,
	  slidesToShow: 4,
	  slidesToScroll: 4,
    vertical: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          vertical: false,
          slidesToShow: 4,
          slidesToScroll: 4
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
})(jQuery);
/*------------------------------------ Center Pagination */
$(function(){
  $('.box-pagination ul').addClass('justify-content-center');
  $('.box-pagination ul li').addClass('page-item');
  $('.box-pagination ul li a').addClass('page-link');
});
