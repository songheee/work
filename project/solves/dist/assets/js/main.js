"use strict";
const PAGE_MAIN = "page_main";



function gnb() {
  const burger = document.querySelector('.mo_hamburger');
  const sub = document.querySelector('.sub_menu');

  burger.addEventListener('click', () => {
    burger.classList.toggle('toggle');
    sub.classList.toggle('mo_menu_on')
  })
}

function headerLogo(){
  const headLogo = document.querySelector(".logo_img");

  if(wrapper.classList == PAGE_MAIN){
    headLogo.src = "./assets/images/logo-w.png";
  }
}

function headerFixed() {
  const header = document.querySelector("header");
  const headerHeight = header.offsetHeight;
  const chgLogo = document.querySelector(".logo_img");


  window.onscroll = function() {
    const windowTop = window.scrollY;
    if (windowTop >= headerHeight) {
      header.classList.add("drop");
      if(wrapper.classList == PAGE_MAIN){
        chgLogo.src = "./assets/images/logo-b.png";
      }
    }
    else {
      header.classList.remove("drop");
      if(wrapper.classList == PAGE_MAIN){
        chgLogo.src = "./assets/images/logo-w.png";
      }
    }
  };
}

var swiperTwo = new Swiper(".tImgSwiper", {
  spaceBetween: 30,
  effect: "fade",
  autoplay: {
    delay: 8500
  }
});

AOS.init({
  disable: false, // 'phone', 'tablet', 'mobile'
});

function tabList(){
  const tabItem = document.querySelectorAll('.tab_menu .tab_list li')
  const tabInner = document.querySelectorAll('.tab_cont')

  tabItem.forEach((tab, idx)=> {
      tab.addEventListener('click', function(){
          tabInner.forEach((inner)=> {
              inner.classList.remove('is_on');
          });
          tabItem.forEach((item)=> {
              item.classList.remove('is_on');
          });
          tabItem[idx].classList.add('is_on');
          tabInner[idx].classList.add('is_on');
          AOS.refresh();
      })
  })
}

function gnbIsOn(idx){
  const menuLi = document.querySelectorAll('.menu li');
  const mainTxt = document.getElementById('skip_navi');

  menuLi[idx].querySelector('a').classList.add('is_on')
  mainTxt.querySelector('a span').classList.add('on')
}

function checkActTab(){
  const urlStr = window.location.search;
  const urlParams = new URLSearchParams(urlStr);

  if(urlParams.has('tabNum')){
    const values = urlParams.get('tabNum');
    console.log(values);

    const tabItem = document.querySelectorAll('.tab_menu .tab_list li')
    tabItem.forEach((inner)=> {
      inner.classList.remove('is_on');
    });
    tabItem[values].classList.add('is_on')

    const tabInner = document.querySelectorAll('.tab_cont')
    tabInner.forEach((inner)=> {
      inner.classList.remove('is_on');
    });
    tabInner[values].classList.add('is_on')
  }
}

window.onload = function() {
  gnb();
  headerLogo()
  headerFixed();
  tabList();
}