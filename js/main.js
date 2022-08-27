$(document).ready(function (){
    
    window.onload = function(){
        setTimeout (function(){
            scrollTo(0,0);
        },100);
    }
    
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
        $("nav").slideUp(200);
        $("header .btn-nav").removeClass("on");
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
        } else if(i === 2){
            var sectionTop = $(".vans-wrap").offset().top - 171;
            $("html, body").animate({
                "scrollTop" : sectionTop
            }, 350);
        } else if(i === 3){
            var sectionTop = $(".aesop-wrap").offset().top - 171;
            $("html, body").animate({
                "scrollTop" : sectionTop
            }, 350);
        }
    });
    
});