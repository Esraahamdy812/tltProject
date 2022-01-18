$(document).ready(function () {
    $('.owl-3').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: true,
        autoplay: true, // time for slides changes
        autoplayTimeout:3000 ,
        smartSpeed: 500, // duration of change of 1 slide
    
        responsiveClass:true,
        navText : ["<span aria-label='Previous' aria-hidden='true'></span>","<span aria-label='Next' aria-hidden='true'></span>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    })
    $('.owl-2').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: true,
        autoplay: true, // time for slides changes
        autoplayTimeout:3000 ,
        smartSpeed: 500, // duration of change of 1 slide
    
        responsiveClass:true,
        navText : ["<span aria-label='Previous' aria-hidden='true'></span>","<span aria-label='Next' aria-hidden='true'></span>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    })

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 50,
        nav: true,
        dots: true,
        autoplay: true, // time for slides changes
        autoplayTimeout:3000 ,
        smartSpeed: 500, // duration of change of 1 slide
    
        responsiveClass:true,
        navText : ["<span aria-label='Previous' aria-hidden='true'></span>","<span aria-label='Next' aria-hidden='true'></span>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            767: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })


});

// nav bar //
$(window).scroll(function(){
    $('nav').toggleClass('scrolled',$(this).scrollTop()>500);
});
//--navbar //

 var scrollButton = $("#scroll-top");
$(window).scroll(function () {
    'use strict'
    $(this).scrollTop() >= 100 ?  scrollButton.show(): scrollButton.hide(); 
    });
    scrollButton.click(function () {
        $("html,body").animate({ scrollTop: 0 }, 1000)

});

window.scroll=function(){
    'use strict';
    console.log(window.pageYOffset)
}

$(document).ready(function(){
    $(".icon").click(function(){
        $(".icon").toggleClass("active");
    })
});
$(document).ready(function(){
    $(".icon2").click(function(){
        $(".icon2").toggleClass("active");
    })
});

//Get the button
var mybutton = document.getElementById("scroll-top");

// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}