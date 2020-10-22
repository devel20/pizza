// burger **************************************************
document.getElementById("header__burger").onclick = function() {
  open()
};

function open() {
  document.getElementById("header__burger").classList.toggle("active");
  document.getElementById("header__menu").classList.toggle("active");
  document.getElementById("body").classList.toggle("lock");
}

jQuery(document).ready(function($) {
  let link = $('a[href]');
    $(link).click(function(){
    $('.header__burger, .header__menu').removeClass('active');
    $('body').removeClass('lock');
  });
});

// плвный переход к якорю ***************************************
$(document).ready(function(){
$(".header__menu").on("click","a", function (event) {
//отменяем стандартную обработку нажатия по ссылке
event.preventDefault();

//забираем идентификатор бока с атрибута href
var id = $(this).attr('href'),

//узнаем высоту от начала страницы до блока на который ссылается якорь
top = $(id).offset().top;

//анимируем переход на расстояние - top за 1000 мс
$('body,html').animate({scrollTop: top}, 1000);
});
});

// scroll Top ***************************************************
jQuery(document).ready(function($) {
$(window).scroll(function() {
        if ($(this).scrollTop() > 400) {
            $('.scroll-top').css({opcity: 1}).fadeIn('slow');
        } else { $('.scroll-top').stop(true, false).fadeOut('fast'); }
    });
    $('.scroll-top').click(function() {
        $('html, body').stop().animate({scrollTop : 0}, 300);
    });
});