// ----------Slicker----------
$(function () {
    $('.burger').on('click', function () {
        $('.burger__line').toggleClass('active');
        $('.header__menu').toggleClass('active');
    });
});
