/*
	1. Author : Lim, song
	2. Comment : common.js
	3. Modify : 주석 샘플 - 오픈되어 있는 o-lightbox 내에 html 가져오기 or 배송지 수정, 삭제 버튼 클릭이벤트 or 영문으로 간단한 js 키워드
*/
window.addEventListener('DOMContentLoaded', function()
{
    /* aside menu -햄버거 메뉴 클릭시 메뉴슬라이드 s */
    let isOpened = false;
    if(document.getElementById('aside-menu-wrap')) {
        let menu, menuButton, closeButton, menuBody;
        let scrollObject = {};
        // Set Elements
        menuButton = document.getElementById('aside-nav');
        menu = document.getElementById('aside-menu-wrap');
        closeButton = document.getElementById('close');
        menuBody = document.querySelector('body');
        // MenuButton
        menuButton.addEventListener('click', function (e) {
            e.preventDefault();
            menu.classList.add('open');
            scrollObject = {
                x: window.pageXOffset,
                y: window.pageYOffset
            }
            setTimeout(function () {
                menuBody.classList.add('overflow-hidden');
                isOpened = true;
            }, 450);
        });
        // Close Menu
        closeButton.addEventListener('click', function (e) {
            if (isOpened) {
                isOpened = false;
                e.preventDefault();
                menu.classList.remove('open');
                menuBody.classList.remove('overflow-hidden');

                window.scrollTo(scrollObject.x, scrollObject.y);
                // menu accordion close
                if (document.getElementsByClassName('panel on').length != 0) {
                    menuAsideTab = document.querySelector('.panel.on');
                    menuAsideTab.classList.remove('on')
                }
            }
        });
    }
    /* aside menu - 햄버거 메뉴 클릭시 메뉴슬라이드 e */

    /* aside menu, 공지사항 - accordion click event s */
    function initAccordion(accordionElem) {
        function handlePanelClick(event) {
            showPanel(event.currentTarget);
        }

        function showPanel(panelHeader) {
            let isActive,
                panel = panelHeader.parentNode,
                panelBody = panelHeader.nextElementSibling,
                expandedPanel = document.querySelector('.panel.on');

            isActive = (expandedPanel && panel.classList.contains('on')) ? true : false;

            if(expandedPanel) {
                expandedPanel.querySelector('.dep-content').style.height = null;
                expandedPanel.classList.remove('on');
            }
            if(panel && !isActive) {
                panelBody.style.height = panelBody.Height + 'px';
                panel.classList.add('on');
            }
        }
        let allPanelElements = document.querySelectorAll('.panel');

        for(let i = 0; i < allPanelElements.length; i++) {
            allPanelElements[i].querySelector('.dep-inner').addEventListener('click', handlePanelClick);
        }
        showPanel(allPanelElements);
    }

    initAccordion(document.getElementsByClassName('accordion'));
    /* aside menu, 공지사항 - accordion click event e */

    /* 점검 항목 리스트, dashboard - tab click event s */
    //dashboard
    const tabMenu = document.querySelectorAll('.tab-menu a'),
    tabContent = document.querySelectorAll('.tab-content > .view-section');

    for(i=0; i<tabMenu.length; i++){
        tabMenu[i].addEventListener('click',function(e){
            e.preventDefault();
            for(x=0; x<tabMenu.length; x++){
                tabMenu[x].classList.remove('active');
            }
            this.classList.add('active');
            const target = this.getAttribute('href');

            for(y=0; y<tabContent.length; y++){
                tabContent[y].style.display = 'none';
            }
            document.querySelector(target).style.display='block';
        });
    }
    //dashboard

    // 점검항목
    const tabMenu1 = document.querySelectorAll('.check-tab-menu');
    const tabContent1 = document.querySelectorAll('.check-tab-content');

    tabMenu1.forEach(function(liElement) {
        let aList = liElement.querySelectorAll('li a');

        aList.forEach(function(aEliment) {
            aEliment.addEventListener('click',function(e){
                e.preventDefault();

                aList.forEach(function(removeElement) {
                    removeElement.classList.remove('is-visible');
                });
                aEliment.classList.add('is-visible');

                const target = aEliment.getAttribute('href');

                document.querySelector(target).parentElement.querySelectorAll(".list-section").forEach(function(ee) {
                    ee.style.display = 'none';
                });
                document.querySelector(target).style.display='block';
            });
        });
    });
    /* 점검 항목 리스트, dashboard - click event e */

    /* 점검 항목 리스트 - accordion s */
    const accordion = document.getElementsByClassName('content-btn');

    for(i =0; i<accordion.length; i++){
        accordion[i].addEventListener('click', function(e){
            e.preventDefault()
            this.classList.toggle('active');
        })
    }
    /* 점검 항목 리스트 -accordion e */

    /* popup modalTriggers s */
    const modalTriggers = document.querySelectorAll('.popup-trigger')
    const modalCloseTrigger = document.querySelectorAll('.popup-modal-close, .popup-modal-cancel')
    const bodyBlackout = document.querySelector('.body-blackout')

    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const { popupTrigger } = trigger.dataset
            const popupModal = document.querySelector(`[data-popup-modal="${popupTrigger}"]`)

            popupModal.classList.add('is-visible')
            bodyBlackout.classList.add('is-blacked-out')

            bodyBlackout.addEventListener('click', () => {
                // TODO: Turn into a function to close modal
                popupModal.classList.remove('is-visible')
                bodyBlackout.classList.remove('is-blacked-out')
            })

            for(let i = 0; i < modalCloseTrigger.length; i++){
                modalCloseTrigger[i].addEventListener('click',()=> {
                    popupModal.classList.remove('is-visible')
                    bodyBlackout.classList.remove('is-blacked-out')
                })
            }
        })
    })
    /* popup modalTriggers e */
});



