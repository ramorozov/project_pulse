$(document).ready(function () {
    $('.carousel__inner').slick({
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.png" alt="left"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.png" alt="right"></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                arrows: false
              }
            }
        ]
    });
});