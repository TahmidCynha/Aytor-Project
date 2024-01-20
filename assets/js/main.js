$(function (){
  // *NAVBAR FIXED START 
  $(window).scroll(function () { 
    let scroll = $(window).scrollTop()
    if (scroll > 699) {
      $("#navbar").addClass("fixed")
    }else{
      $("#navbar").removeClass("fixed")
    }
  });
  // *NAVBAR FIXED END 
  // *BANNER SLIDER 
    $('.slide').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear' ,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        dotsClass : "container sliderDots"

      });
      $('.slideSm').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear' ,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 500,
      });
      $('.slideMd').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear' ,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 500,

      });
      $('.slideLg').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear' ,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 500,

      });
      // *BANNER SLIDER END

      // *PRODUCT SLIDER START
      $('.productSlider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: `.leftArrow`,
        nextArrow: `.rightArrow`,
        responsive: [
          {
            breakpoint: 2100,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          }
        ]
      });
        
      // *PRODUCT SLIDER END

    })
    
    // *COUNTDOWN JS
    $('.countDown').countdown("2025/01/13,12:00:00" ,function(e){
      $('.countDown .days').html(e.strftime('%D'))
      $('.countDown .hour').html(e.strftime('%H'))
      $('.countDown .min').html(e.strftime('%M'))
      $('.countDown .sec').html(e.strftime('%S'))
    });
    // *COUNTDOWN JS END

    // *DEALS SLIDER BANNER
    $('.dealsBanner').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      dots: true,
      arrows: false,
      dotsClass : "counterDots" ,
      autoplay: true,
      autoplaySpeed: 1000,

      responsive: [
        {
          breakpoint: 2100,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });
    // *DEALS SLIDER BANNER END 


    // *RESPONSIVE DEAL SLIDER 
    $('.dealSm').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      dotsClass : "counterSmDots" ,
      autoplay: true,
      autoplaySpeed: 1000,
    });

    // *RESPONSIVE DEAL SLIDER END 

    // *NEWS BLOG START HERE
    $('.newsPost').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 2,
      dots: true,
      arrows: false,
      dotsClass : "newsDots" ,
      autoplay: true,
      autoplaySpeed: 1000, 
      
      responsive: [
        {
          breakpoint: 2100,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });
// *NEWS BLOG END  HERE





//* BOOTSTRAP TOOLTIPS
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// *TOP 
e(".scrollToTop").each((function() {
  e(this).on("click", (function(t) {
      return t.preventDefault(),
      e("html, body").animate({
          scrollTop: 0
      }, s / 3),
      !1
  }
  ))
}
))