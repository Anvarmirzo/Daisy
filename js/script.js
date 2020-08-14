$(document).ready(function () {
    function navbg() {
        var scroll = $(this).scrollTop();
        if (scroll > 100) {
            $('.header-nav').addClass('bg-nav');
        }
        else {
            $('.header-nav').removeClass('bg-nav');
        }
    }
    function scrolling() {
        var scroll = $(this).scrollTop();
        if (scroll > 400) {
            $('#top').fadeIn();
        }

        else {
            $('#top').fadeOut();
        }
    }
    function scrolled() {
        var scroll = $(this).scrollTop();
        $('.header-nav-li__item').each(function () {
            var attr = $(this).attr('href');
            var position = $(attr).offset().top - 191;
            if (scroll >= position) {
                $('.header-nav-li__item').removeClass('active');
                $(this).addClass('active');
            }
        })
    }
    $(window).on('scroll', function () {
        scrolling(); navbg(); scrolled();
    });

    $('#top').click(function () {
        $('html').animate({
            scrollTop: 0
        }, 700)
    })

    $('.header-nav-li__item').click(function (e) {
        e.preventDefault();
        $('.header-nav-li__item').removeClass('active');
        $('html').animate({
            scrollTop: $($(this).addClass('active').attr('href')).offset().top - $('.header-nav').innerHeight()
        }, 800)
    })
    $('.logo-img').click(function (e) {
        e.preventDefault();
        $('html').animate({
            scrollTop: $($(this).attr('href')).offset().top - $('.header-nav').innerHeight()
        }, 800)
    })
    function filterColor(color) {
        $('.all').filter(color).show().css('opacity', 0).animate({
            opacity: 1,
        }, 700);
        $('.all').not(color).hide();
    }

    $('.portfolio-menu__link').click(function (e) {
        e.preventDefault();
        filterColor('.' + $(this).attr('data-target'));
    })
    $('.slider').slick({
        adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
});