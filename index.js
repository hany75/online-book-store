searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

let loginForm=document.querySelector('.login-form-container');

document.getElementById('login-btn').onclick=()=>{
    loginForm.classList.toggle('active')
}
 document.querySelector('#close-login-btn').onclick=()=>{
    loginForm.classList.remove('active')
 }





window.onscroll = () =>{

    searchForm.classList.remove('active');

    if(window.scrollY > 80){
        document.querySelector('header .header-2').classList.add('active')
    }else{
        document.querySelector('.header .header-2').classList.remove('active')
    }

}

window.onload = () =>{
    if(window.scrollY > 80){
        document.querySelector('header .header-2').classList.add('active')
    }else{
        document.querySelector('.header .header-2').classList.remove('active')
    }
fadeOut()
}

function loader(){
    document.querySelector('.loader-container').classList.add('active')
}
function fadeOut(){
    setTimeout(loader(),400000)
}


// Books Slider
var booksSwiper = new Swiper(".books-slider", {
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  
  // Featured Slider
  var featuredSwiper = new Swiper(".featured-slider", {
    loop: true,
    centeredSlides: true, // Corrected from centeredslide to centeredSlides
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });
  
  // Arrivals Slider
  var arrivalsSwiper = new Swiper(".arrivals-slider", {
    loop: true,
    centeredSlides: true, // Corrected from centeredslide to centeredSlides
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  
  // Reviews Slider
  var reviewsSwiper = new Swiper(".reviews-slider", {
    loop: true,
    grabCursor: true,
    centeredSlides: true, // Corrected from centeredslide to centeredSlides
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  
  // Blogs Slider
  var blogsSwiper = new Swiper(".blogs-slider", {
    loop: true,
    grabCursor: true,
    centeredSlides: true, // Corrected from centeredslide to centeredSlides
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  

