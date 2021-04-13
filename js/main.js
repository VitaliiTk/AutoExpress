$(function () {
    $('.carousel__inner').slick({
        infinite: true,
        slidesToShow: 3,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    
    // Маска телефона
    $('[name=phone]').mask('0 (999) 99-99-99');

    // mail.php
    $('.contacts__form').submit(function(e) {
        e.preventDefault();
        // Проверка формы, чтобы была заполнена===============
        // if (!$(this).valid()) {
        //     return;
        // }
        // ===================================================
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            // alert('Спасибо за заявку');
            $('.overlay').fadeIn();
            $('.contacts__form').trigger('reset');/*Очистить поля после отправки*/
        });
        return false;
    });

    // появление, исчезновение картинки вверх при скролле страницы
    const up = $('.up-arrow');
    $(window).scroll(function () {
        if ($(this).scrollTop()>300){
            up.fadeIn();
        } else {
            up.fadeOut();
        }
    });
    // плавный скролл вверх
    up.click(function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, 500)
    });


    // плавный скролл по ссылкам
    $('a').click(function() {
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 500);
        return false;
    });

    $('.overlay').click( function () {
        $('.overlay').fadeOut();
    })
});