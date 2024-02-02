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
  // *PROGRESS BAR START
  let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient( #FF6F61 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  };
  
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;
// *PROGRESS BAR END 
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
    // *VENOBOX VIDEO START 
    new VenoBox({
      selector: '.myBeautyVideo',
    });   
    // *VANOBOX VIDEO 

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

   //* BOOTSTRAP TOOLTIPS START
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
      );
      const tooltipList = [...tooltipTriggerList].map(
        (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
      );
    //* BOOTSTRAP TOOLTIPS END
// *PRODUCT GRID & LIST START 
$(function (){
  var li_links = document.querySelectorAll(".links ul li");
  var view_wraps = document.querySelectorAll(".view_wrap");
  var list_view = document.querySelector(".list-view");
  var grid_view = document.querySelector(".grid-view");
  
  li_links.forEach(function(link){
  	link.addEventListener("click", function(){
  		li_links.forEach(function(link){
  			link.classList.remove("active");
  		})
  
  		link.classList.add("active");
  
  		var li_view = link.getAttribute("data-view");
  
  		view_wraps.forEach(function(view){
  			view.style.display = "none";
  		})
  
  		if(li_view == "list-view"){
  			list_view.style.display = "block";
  		}
  		else{
  			grid_view.style.display = "block";
  		}
  	})
  })

})
// *PRODUCT GRID & LIST END 


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

// *ABOUT PAGE START 

// *COUNTER 2 START 
const counterUp = window.counterUp.default

const callback = entries => {
	entries.forEach( entry => {
		const el = entry.target
		if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
			counterUp( el, {
				duration: 2000,
				delay: 16,
			} )
			el.classList.add( 'is-visible' )
		}
	} )
}

const IO = new IntersectionObserver( callback, { threshold: 1 } )

const el = document.querySelector( '.counterCount1' )
IO.observe( el ) 
// *COUNTER 2 END 

// *COUNTER 2 START 
const counterUp2 = window.counterUp.default

const callback2 = entries => {
	entries.forEach( entry => {
		const el = entry.target
		if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
			counterUp( el, {
				duration: 2000,
				delay: 16,
			} )
			el.classList.add( 'is-visible' )
		}
	} )
}

const IO2 = new IntersectionObserver( callback2, { threshold: 1 } )

const el2 = document.querySelector( '.counterCount2' )
IO2.observe( el2 ) 
// *COUNTER 2 END 

// *COUNTER 2 START 
const counterUp3 = window.counterUp.default

const callback3 = entries => {
	entries.forEach( entry => {
		const el = entry.target
		if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
			counterUp( el, {
				duration: 2000,
				delay: 16,
			} )
			el.classList.add( 'is-visible' )
		}
	} )
}

const IO3 = new IntersectionObserver( callback2, { threshold: 1 } )

const el3 = document.querySelector( '.counterCount3' )
IO3.observe( el3 ) 
// *COUNTER 2 END 

// *COUNTER 2 START 
const counterUp4 = window.counterUp.default

const callback4 = entries => {
	entries.forEach( entry => {
		const el = entry.target
		if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
			counterUp( el, {
				duration: 2000,
				delay: 16,
			} )
			el.classList.add( 'is-visible' )
		}
	} )
}

const IO4 = new IntersectionObserver( callback2, { threshold: 1 } )

const el4 = document.querySelector( '.counterCount4' )
IO4.observe( el4 ) 
// *COUNTER 2 END 


// *VENOBOX JS START 
new VenoBox({
  selector: '.myCustomVideo',
});     

// *VENOBOX JS END

// *LEADER SHIP SLIDER START
$('.headshotSlider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: `.leftArrow`,
  nextArrow: `.rightArrow`,
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}); 
// *LEADER SHIP SLIDER END

// *ABOUT TESTIMONIAL SLIDER 
$('.testslider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  fade: true,
  cssEase: 'linear' ,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1000,
  dotsClass : "testiDots" ,
});
// *ABOUT TESTIMONIAL SLIDER END


// *ABOUT INSTA SLIDER START
$('.instaslide').slick({
  slidesToShow: 6,
  slidesToScroll: 3,
  dots: true,
  arrows: false,
  dotsClass : "instaDots" ,
  autoplay: true,
  autoplaySpeed: 1000,
  infinite:true,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]

});

// *ABOUT INSTA SLIDER END






