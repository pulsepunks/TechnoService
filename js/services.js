$(function () {
    //---------CASES---------------
    $('.cases__center-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        dotsClass: 'cases__center-slider-dots',
        prevArrow:
            '<button type="button" class="cases__center-slider-arrow-previous"><img class="cases__center-slider-arrow-previous-image" src="/img/Services/03Cases/Link-arrow-grey.svg" alt="Arrow right"></button>',
        nextArrow:
            '<button type="button" class="cases__center-slider-arrow-next"><img class="cases__center-slider-arrow-next-image" src="/img/Services/03Cases/Link-arrow-white.svg" alt="Arrow left"></button>',
    });
    let $cases1 = $('#slick-slide-control00');
    let $cases2 = $('#slick-slide-control01');
    let $cases3 = $('#slick-slide-control02');
    let $cases4 = $('#slick-slide-control03');
    let $cases5 = $('#slick-slide-control04');
    $cases1.html('Кейс номер в 2<br> длинных  строки');
    $cases2.html('Кейс номер 2');
    $cases3.html('Кейс номер 3');
    $cases4.html('Кейс номер 4');
    $cases5.html('Кейс номер 5');
    //-------SERVICES---------
    $('.cases__works-slider').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        dotsClass: 'cases__works-slider-dots',
        responsive: [
            {
                breakpoint: 1028,
                settings: {
                    infinite: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                },
            },
            {
                breakpoint: 699,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
});
