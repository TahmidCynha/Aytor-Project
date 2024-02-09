// *NAVBAR FIXED START 
$(function (){
  $(window).scroll(function () { 
    let scroll = $(window).scrollTop()
    if (scroll > 699) {
      $("#navbar").addClass("fixed")
    }else{
      $("#navbar").removeClass("fixed")
    }
  });
})
// *NAVBAR FIXED END 
// *PROGRESS BAR START
  $(function(){
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
  })
 // *PROGRESS BAR END 
  // *BANNER SLIDER START
 $(function(){
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
      autoplaySpeed: 500
    });
    $('.slideLg').slick({
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear' ,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 500
    });
  })
  // *BANNER SLIDER END
  // *PRODUCT SLIDER START
  $(function(){
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
  })
  // *PRODUCT SLIDER END
    
  // *COUNTDOWN JS
  $(function(){
    $('.countDown').countdown("2025/01/13,12:00:00" ,function(e){
      $('.countDown .days').html(e.strftime('%D'))
      $('.countDown .hour').html(e.strftime('%H'))
      $('.countDown .min').html(e.strftime('%M'))
      $('.countDown .sec').html(e.strftime('%S'))
    });
  })
  // *COUNTDOWN JS END

  // *VENOBOX VIDEO START 
  $(function(){
    new VenoBox({
      selector: '.myBeautyVideo',
    });   
  })
  // *VANOBOX VIDEO END

  // *DEALS SLIDER BANNER START
  $(function(){
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
  })
  // *DEALS SLIDER BANNER END 

  // *NEWS BLOG START HERE
  $(function(){
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
  })
  // *NEWS BLOG END  HERE

  //* BOOTSTRAP TOOLTIPS START
  $(function(){
   const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
    );
    const tooltipList = [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    );
  })
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

  // *CART SLIDER STAR HERE 
  $(function(){
    $('.cartImgSlide').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      dots: false,
      asNavFor: '.navSlider'
    });
    $('.navSlider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.cartImgSlide',
      dots: false,
      centerMode: true,
      focusOnSelect: true,
      prevArrow: `.leftArrow`,
      nextArrow: `.rightArrow`,
      
    });
  })
  // *CART SLIDER END HERE 

  // *RESPONSIVE DEAL SLIDER 
  $(function(){
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
  })
  // *RESPONSIVE DEAL SLIDER END 
  // *CART SIZE OPTION START 
  $(function(){
    const optionMenu = document.querySelector(".select-menu"),
    selectBtn = optionMenu.querySelector(".select-btn"),
    options = optionMenu.querySelectorAll(".option"),
    sBtn_text = optionMenu.querySelector(".sBtn-text");
    
    selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       
    
    options.forEach(option =>{
    option.addEventListener("click", ()=>{
     let selectedOption = option.querySelector(".option-text").innerText;
     sBtn_text.innerText = selectedOption;
    
     optionMenu.classList.remove("active");
    })
    })
  })
  // *CART SIZE OPTION END

  // *CART COLOR OPTION OPTION START 
  $(function(){
    const optionMenu2 = document.querySelector(".select-menu2"),
    selectBtn2 = optionMenu2.querySelector(".select-btn2"),
    options2 = optionMenu2.querySelectorAll(".option2"),
    sBtn_text2 = optionMenu2.querySelector(".sBtn-text2");
    
    selectBtn2.addEventListener("click", () => optionMenu2.classList.toggle("active"));       
    
    options2.forEach(option2 =>{
    option2.addEventListener("click", ()=>{
     let selectedOption2 = option2.querySelector(".option-text2").innerText;
     sBtn_text2.innerText = selectedOption2;
    
     optionMenu2.classList.remove("active");
    })
    })
  })
  // *CART COLOR OPTION OPTION END

  // *CART OPTION INCREMENT DECREMENT START
  $(function(){
    const quantityInc = document.querySelector(".quantityInc"),
    quantityDec = document.querySelector(".quantityDec"),
    quantityShow = document.querySelector(".quantityShow");
    
    let a = 1;
    
    quantityInc.addEventListener("click", ()=>{
      a++;
      a = (a < 10) ? "0" + a : a;
      quantityShow.innerText = a;
    });
    
    quantityDec.addEventListener("click", ()=>{
      if(a > 1){
        a--;
        a = (a < 10) ? "0" + a : a;
        quantityShow.innerText = a;
      }
    }); 
  })
  // *CART OPTION INCREMENT DECREMENT END


  // *COUNTER 2 PRODUCT START 
  $(function(){
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
  })
  // *COUNTER 2 PRODUCT END 

  // *COUNTER 2 SELLER START 
  $(function(){
    const counterUp2 = window.counterUp.default
  
    const callback2 = entries => {
      entries.forEach( entry => {
        const el = entry.target
        if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
          counterUp2( el, {
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
  })
  // *COUNTER 2 SELLER END 

  // *COUNTER 2 CUSTOMER ACTIVE START 
  $(function(){
    const counterUp3 = window.counterUp.default
    
    const callback3 = entries => {
    	entries.forEach( entry => {
    		const el = entry.target
    		if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
    			counterUp3( el, {
    				duration: 2000,
    				delay: 16,
    			} )
    			el.classList.add( 'is-visible' )
    		}
    	} )
    }
    
    const IO3 = new IntersectionObserver( callback3, { threshold: 1 } )
    
    const el3 = document.querySelector( '.counterCount3' )
    IO3.observe( el3 ) 
  })
  // *COUNTER 2 CUSTOMER ACTIVE END 

  // *COUNTER 2 ANNUAL GROSS START 
  $(function(){
    const counterUp4 = window.counterUp.default
    
    const callback4 = entries => {
    	entries.forEach( entry => {
    		const el = entry.target
    		if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
    			counterUp4( el, {
    				duration: 2000,
    				delay: 16,
    			} )
    			el.classList.add( 'is-visible' )
    		}
    	} )
    }
    
    const IO4 = new IntersectionObserver( callback4, { threshold: 1 } )
    
    const el4 = document.querySelector( '.counterCount4' )
    IO4.observe( el4 ) 
  })
  // *COUNTER ANNUAL GROSS 2 END 

  // *VENOBOX JS START 
  $(function(){
    new VenoBox({
      selector: '.myCustomVideo',
    }); 
  })
      
  // *VENOBOX JS END
  // *LEADER SHIP SLIDER START
  $(function(){
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
  })
  // *LEADER SHIP SLIDER END
  
  // *ABOUT TESTIMONIAL SLIDER 
  $(function(){
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
  })
  // *ABOUT TESTIMONIAL SLIDER END
  
  // *ABOUT INSTA SLIDER START
  $(function(){
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
  })
  // *ABOUT INSTA SLIDER END
  // *RELETED PRODUCT SLIDER START HERE
  $(function(){
    $('.reProduct').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: `.leftArrow`,
      nextArrow: `.rightArrow`,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
      ]
    });
  })
  // *RELETED PRODUCT SLIDER END HERE
  








