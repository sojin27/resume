$(document).ready(function (){

    var windowHeight = $(window).height();

    var fixStart = $(".portfolio .wrap").offset().top - 61;
    var leftOffset = $(".portfolio .wrap").offset().left - 300;

    $(window).on("scroll", function(){
        var scrollPoisition = $(this).scrollTop();

        if(scrollPoisition >= fixStart){
            $(".control-box").css({
                "position" : "fixed",
                "top" : 121,
                "left" : leftOffset
            });
        } else {
            $(".control-box").css({
                "position" : "absolute",
                "top" : "0",
                "left" : "-300px"
            });
        }
    });

    $("header .btn-nav").on("click", function(){
        $(this).toggleClass("on");
        $("header nav").slideToggle(400);
    });

    $("nav li").on("mouseover", function(){
        $(this).addClass("on");
    }).on("mouseout", function(){
        $(this).removeClass("on");
    });
    
    $("nav li").on("click", function(){
        var i = $(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        if(i === 0){
            var sectionTop = $(".home").offset().top;
            $("html, body").animate({
                "scrollTop" : sectionTop
            },350);
        } else if(i === 1){
            var sectionTop = $(".stacks").offset().top;
            $("html, body").animate({
                "scrollTop" : sectionTop
            },350);
        } else if(i ===2){
            var sectionTop = $(".portfolio").offset().top;
            $("html, body").animate({
                "scrollTop" : sectionTop
            },350);
        }
    });

    var swiper = new Swiper(".stacks-swiper", {
        slidesPerView: 3,
        spaceBetween: 25,
        pagination: {
          el: ".stacks-swiper-pagination",
          type: "progressbar",
          clickable: true,
        },
        loop: true,
        autoplay: {
            delay: 1200,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        }
    });

    $(".portfolio .control-box li").on("click", function(){
        var i = $(this).index();
        if(i === 0){
            var sectionTop = $(".aladin-wrap").offset().top - 171;
            $("html, body").animate({
                "scrollTop" : sectionTop
            }, 350);
        } else if(i === 1){
            var sectionTop = $(".leica-wrap").offset().top - 171;
            $("html, body").animate({
                "scrollTop" : sectionTop
            }, 350);
        }
    });


});