$(".slideshow-container").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
});
$(".tab-product").slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ],
});
// $(".manufacture-content").slick({
//     slidesToShow: 6,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
// });
$(".manufacture-content").slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 4,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ],
});
$(".product-detail-zoom").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".product-detail-list",
});
$(".product-detail-list").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".product-detail-zoom",
    dots: false,
    centerMode: false,
    focusOnSelect: true,
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
        $("#slidetop").fadeIn(500);
    } else {
        $("#slidetop").fadeOut(500);
    }
});
$("#slidetop").click(function(e) {
    e.preventDefault();
    $("html, body").animate({
            scrollTop: 0,
        },
        800
    );
});
$("#product-tab a").on("click", function(e) {
    e.preventDefault();
    $(this).tab("show");
    $(".tab-product").slick("refresh");
});
// custom accordion
$("#accordion").on("hide.bs.collapse show.bs.collapse", (e) => {
    $(e.target).prev().find("i:last-child").toggleClass("fa-minus fa-plus");
});