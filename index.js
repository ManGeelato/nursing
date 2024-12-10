let navbar = document.querySelector('.header .navbar');
// let searchForm = document.querySelector('.header .search-form');
// let loginForm = document.querySelector('.header .login-form');
let contactInfo = document.querySelector('.contact-info');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
//    searchForm.classList.remove('active');
//    loginForm.classList.remove('active');
};

document.querySelector('#search-btn').onclick = () =>{
//    searchForm.classList.toggle('active');
   navbar.classList.remove('active');
//    loginForm.classList.remove('active');
};

document.querySelector('#login-btn').onclick = () =>{
//    loginForm.classList.toggle('active');
   navbar.classList.remove('active');
//    searchForm.classList.remove('active'); 
};

document.querySelector('#info-btn').onclick = () =>{
   contactInfo.classList.add('active');
}

document.querySelector('#close-contact-info').onclick = () =>{
   contactInfo.classList.remove('active');
}

window.onscroll = () =>{
   navbar.classList.remove('active');
//    searchForm.classList.remove('active');
//    loginForm.classList.remove('active');
   contactInfo.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
   loop:true,
   grabCursor:true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".reviews-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".blogs-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".logo-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      450: {
         slidesPerView: 2,
       },
      640: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1000: {
        slidesPerView: 5,
      },
   },
});


function openEmailClient() {
    var emailLink = "mailto:?";
  
    // Check if Gmail is available, if so, use it
    if (navigator.userAgent.indexOf("Gmail") !== -1) {
      emailLink += "subject=My subject for Gmail&body=My body for Gmail";
    } 
    // If Gmail is not available, check for Outlook
    else if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      emailLink = "mailto:?subject=My subject for Outlook&body=My body for Outlook";
    }
    // If neither Gmail nor Outlook is available, fallback to regular mailto link
    else {
      emailLink += "subject=My subject&body=My body";
    }
  
    // Open email client
    window.location.href = emailLink;
}