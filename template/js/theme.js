// back to top
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $(".block-header-bottom").addClass("fixed-header");
    } else {
        $(".block-header-bottom").removeClass("fixed-header");
    }
});

$(document).ready(function() {
    // icon grid and list
    $(".collection-view > div").click(function() {
        $(".collection-view > div").removeClass("checked");
        $(this).addClass("checked");
    });
    // grid and list
    $("#list").click(function(event) {
        event.preventDefault();
        $(".right-column-product .product-item").addClass("list-item");
    });
    $("#grid").click(function(event) {
        event.preventDefault();
        $(".right-column-product .product-item").removeClass("list-item");
    });
});
var header = $(".wsmobileheader");
$(window)["resize"](function() {
    if ($(window)["width"]() < 991) {
        $("body").scroll(function() {
            var scroll = $("body").scrollTop();
            if (scroll >= 200) {
                header.addClass("fixed-header");
            } else {
                header.removeClass("fixed-header");
            }
        });
    }
});

function collapse() {
    var category = $(".product-category-content");
    var category_one = $(".product-category-content:eq(0)");
    if ($(window).width() < 991) {
        category.addClass("collapse");
        category_one.removeClass("collapse").addClass("collapse show");
    } else {
        category.removeClass("collapse");
    }
}
$(window).resize(function() {
    collapse();
});