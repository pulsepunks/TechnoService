$(function () {
    //-------HEADER__ABOUT---------
    $('.header__slider-box').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        dotsClass: 'header__slider-dots',
    });
    let $headerDots1 = $('#slick-slide-control00');
    let $headerDots2 = $('#slick-slide-control01');
    let $headerDots3 = $('#slick-slide-control02');
    let $headerDots4 = $('#slick-slide-control03');
    let $headerDots5 = $('#slick-slide-control04');
    $headerDots1.html('О нас');
    $headerDots2.html('Наша команда');
    $headerDots3.html('История');
    $headerDots4.html('Материальная база');
    $headerDots5.html('Кейсы');
    //-------CASES---------
    $('.cases__info-slider').slick({
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 6,
        arrows: false,
        dots: false,
        asNavFor: '.cases__slider',
    });
    $('.cases__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        asNavFor: '.cases__info-slider',
        focusOnSelect: true,
    });
    //-------SERVICES---------
    $('.services__slider').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        dotsClass: 'services__slider-dots',
        responsive: [
            {
                breakpoint: 1032,
                settings: {
                    infinite: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                },
            },
            {
                breakpoint: 710,
                settings: {
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                },
            },
        ],
    });
});
