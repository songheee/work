"use strict";


/*-------------------------------------------------------------------------------
 * 	 gnb
 *------------------------------------------------------------------------------*/

function gnb() {

  const burger = document.querySelector('.mo_hamburger');
  const sub = document.querySelector('.sub_menu');
  const bgOn = document.querySelector('.bg_gray');

  burger.addEventListener('click', () => {
    burger.classList.toggle('toggle');
    sub.classList.toggle('mo_menu_on')
    bgOn.classList.toggle('mo_bg_on')
    document.body.classList.toggle('no_scroll')
  })

}

/*------------------------------------------------------------------------------
 * 	 scrollTop
 *----------------------------------------------------------------------------*/

function scrollTop() {

  const btn = document.querySelector('.btn_top')

  window.addEventListener('scroll', () => {
    if (document.querySelector('html').scrollTop > 100) {
      btn.classList.remove('dn');
      btn.classList.add('db');
    } else {
      btn.classList.remove('db');
      btn.classList.add('dn');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  })

}

/*-----------------------------------------------------------------------------------
 * 	 headerFixed
 *----------------------------------------------------------------------------------*/

function headerFixed() {

  const header = document.querySelector("header");
  const headerHeight = header.offsetHeight;

  window.onscroll = function() {
    const windowTop = window.scrollY;
    if (windowTop >= headerHeight) {
      header.classList.add("drop");
    }
    else {
      header.classList.remove("drop");
    }
  };

}

/*-----------------------------------------------------------------------------------
 * 	 Podcast.html - categoryOn, classOn
 *---------------------------------------------------------------------------------*/

function categoryOn() {
  const itemTab = document.querySelector('.category_podcasts')
  const item = document.querySelectorAll('.page_podcast .data li')
  const btn = document.querySelectorAll('.page_podcast .cate_pod')

  if(itemTab){
    itemTab.addEventListener('click', (e) => {
      const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
      if (filter == null) {
        return;
      }
      item.forEach((item) => {
        if (filter === '*' || filter === item.dataset.type) {
          item.style.display = "block";
        } else {
          item.style.display = "none";

        }
      });
    });
  }

}

function classOn() {

  const btns = document.querySelectorAll('.page_podcast .cate_pod')

  if(btns){
    Array.from(btns).forEach(item => {
        item.addEventListener("click", () => {
          var selected = document.getElementsByClassName("on");
          selected[0].className = selected[0].className.replace(" on", "");
          item.className += " on";
      });
    });
  }

}

/*-----------------------------------------------------------------------------------
 * 	 darkmode
 *----------------------------------------------------------------------------------*/


function darkMode(){
  const checkBox = document.querySelector('.dark_mode');
  const chgSnsTag = document.querySelectorAll('.sns li a');
  const chgLogo = document.querySelector(".logo_img");
  const chgRolling = document.querySelector('.light_ver');
  const chgRolling2 = document.querySelector('.dark_ver');

  checkBox.addEventListener('click', e=> {
    for(var i = 0; i < chgSnsTag.length; i++){
      var item = chgSnsTag.item(i);
      if (e.target.checked) {
        document.documentElement.setAttribute('color-theme', 'dark');
          item.classList.add("chg_img");
          chgLogo.src = "../assets/images/logo/logo_w.svg";
          chgRolling.classList.add('dark_hide');
          chgRolling2.classList.remove('dark_hide');
      } else {
        document.documentElement.setAttribute('color-theme', 'light');
          item.classList.remove("chg_img");
          chgLogo.src = "../assets/images/logo/logo.svg";
          chgRolling.classList.remove('dark_hide');
          chgRolling2.classList.add('dark_hide');
      }
    }
  });
}

/*-----------------------------------------------------------------------------
 * 	 home swiper
 *----------------------------------------------------------------------------*/

var swiperOne = new Swiper(".custom_swiper", {
  slidesPerView: 3,
  spaceBetween: 16,
  slidesPerGroup: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  variableWidth: true,
  breakpoints: {
    360: {
      slidesPerView: 1,
    },
    425: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    820: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
  }
});

var swiperTwo = new Swiper(".tImgSwiper", {
  spaceBetween: 30,
  effect: "fade",
  autoplay: {
    delay: 3500
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});

/*--------------------------------------------------------------------------------
 * 	meet our team swiper
 *------------------------------------------------------------------------------*/

var swiperThr = new Swiper(".meetTeamSwiper", {
  slidesPerView: 4,
  spaceBetween: 16,
  autoplay: true,
  pagination: {
    el: ".team-pagination",
    clickable: true,
  },
  variableWidth: true,
  breakpoints: {
    360: {
      slidesPerView: 1,
    },
    425: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2.4,
    },
    820: {
      slidesPerView: 2.5,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
  }
});

/*-------------------------------------------------------------------------------
 *-----------------------------------------------------------------------------*/

window.onload = function() {
  gnb();
  scrollTop();
  headerFixed();
  darkMode();
  categoryOn();
  classOn();
}



