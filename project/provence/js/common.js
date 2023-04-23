/** ========================================================= */

// file   : common.js

/* ========================================================== */
/*----------------------------------------------------------- */

/*---- tower tab_1 -----*/
function floors_select(ulEl, liEl){
    Array.from(ulEl.children).forEach(
        v => v.classList.remove('active')
    )
    if(liEl) liEl.classList.add('active');
}
/*---- //tower tab_1 -----*/


(function() {
    /* 'use strict'; */

    /*------- menu hover dropdown -------*/
    document.addEventListener('DOMContentLoaded',  () => {
        const toggleBtns = document.querySelectorAll('.nav-menu>li');

        toggleBtns.forEach(function(navItem,idx,list){

            let navItem1d = navItem.querySelector('.nav-menu>li>a');
            let navItem2d = navItem.querySelector('.sub-menu');

            // 1depth mouse hover show
            navItem.addEventListener('mouseover', function () {
                navItem2d.classList.add('active');
                navItem1d.classList.add('on');

            })
            navItem.addEventListener('mouseout', function () {
                navItem2d.classList.remove('active');
                navItem1d.classList.remove('on');
            })
        });
    });
    /*-------// menu hover dropdown -------*/

    /*---- tower tab_1 -----*/
    const towerTab = document.querySelector('.floors > ul');
    if(towerTab){
        towerTab.addEventListener('click', e => {
            const selected = e.target;
            floors_select(towerTab, selected);
        })
    }

    /* ----//tower tab_1 -----*/

    /*------ tower tab_2 ------*/
    const tabMenu = document.querySelectorAll('.content .tower_tab > li > a'),
    tabContent = document.querySelectorAll('.content .tab_off');

    for(i=0; i<tabMenu.length; i++){
        tabMenu[i].addEventListener('click',function(e){
            e.preventDefault();
            for(x=0; x<tabMenu.length; x++){
                tabMenu[x].classList.remove('on');
            }
            this.classList.add('on');
            const target = this.getAttribute('href');

            for(y=0; y<tabContent.length; y++){
                tabContent[y].style.display = 'none';
            }
            document.querySelector(target).style.display='flex';
        });
    }
    /* -----// tower tab_2 -----*/

    /*----- qna page accordion -----*/
    const acc = document.querySelectorAll('.acc_tit');

	for (var i = 0; i < acc.length; i++) {
        acc[i].onclick = function() {
            for (var j = 0 ; j<acc.length; j++){
                if (this!==acc[j]) {
                    acc[j].nextElementSibling.style.maxHeight = null;
                }
            }
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight){
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        }
	}

    /*-----// qna page accordion -----*/

    /*------ 햄버거메뉴 클릭시 ------*/
    const open_menu = document.querySelector('.mo-menu-btn');
    const header = document.querySelector('.nav');
    const conBg =document.querySelector('.sub_wrap');
    const footer = document.querySelector('.footer');

    open_menu.addEventListener('click', click);

    function click(){
        header.classList.toggle('menu-on');
        conBg.classList.toggle('menu-on');
        footer.classList.toggle('menu-on');
    }

    const gnbacc = document.querySelectorAll('.nav-menu .menu > a');

    for (var i = 0; i < gnbacc.length; i++) {
        gnbacc[i].onclick = function() {
            for (var j = 0 ; j<gnbacc.length; j++){
                if (this!==gnbacc[j]) {
                    gnbacc[j].nextElementSibling.style.maxHeight = null;
                }
            }
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight){
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        }
    }
    /* ---// 햄버거메뉴 클릭시  -----*/




})()





/* ready e --------------------------------------------------
/*----------------------------------------------------------- */