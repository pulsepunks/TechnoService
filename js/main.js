$(function () {
    //---------HEADER-------------
    var headerMargin =
        parseInt($('.container-reference').css('margin-right')) + 20;
    $('.header__features').css('right', headerMargin + 'px');

    //---------CUSTOMERS-----------
    $('.customers__top-slider-box').slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1147,
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
    //---------CASES---------------
    $('.cases__slider-box').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
    });
    let $cases1 = $('#slick-slide-control10');
    let $cases2 = $('#slick-slide-control11');
    let $cases3 = $('#slick-slide-control12');
    $cases1.html('Кейс номер 1');
    $cases2.html('Кейс номер 2');
    $cases3.html('Кейс номер 3');
});
