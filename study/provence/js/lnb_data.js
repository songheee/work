"use strict";

/* subPage breadcrumb */
var gnbNavData = {
    gnb_d1: [
        {
        num: "gnb1", txt: "프로방스", url: "", state: "",
        gnb_d2:[
            {num: "gnb1_01", txt: "프로방스 소개", url: "", state: ""},
            {num: "gnb1_02", txt: "단지안내도", url: "", state: ""},
            {num: "gnb1_03", txt: "오시는길", url: "", state: ""}
        ]
        },{
        num: "gnb2", txt: "마을동", url: "", state: "",
        gnb_d2:[
            {num: "gnb2_1", txt: "식당&카페", url: "", state: ""},
            {num: "gnb2_2", txt: "패션", url: "", state: ""},
            {num: "gnb2_3", txt: "홈리빙", url: "", state: ""},
            {num: "gnb2_4", txt: "체험", url: "", state: ""}
        ]
        },{
		num: "gnb3", txt: "주차타워", url: "", state: "",
		gnb_d2:[
			{num: "gnb3_1", txt: "주차타워", url: "", state: ""},
			{num: "", txt: "", url: "", state: ""}
		]
		},{
		num: "gnb4", txt: "힐링테마", url: "", state: "",
		gnb_d2:[
			{num: "gnb4_1", txt: "포토존", url: "", state: ""},
			{num: "gnb4_2", txt: "비디오존", url: "", state: ""},
			{num: "gnb4_2", txt: "SNS리뷰", url: "", state: ""}
		]
		},{
		num: "gnb5", txt: "고객센터", url: "", state: "",
		gnb_d2:[
			{num: "gnb5_1", txt: "공지사항", url: "", state: ""},
			{num: "gnb5_2", txt: "이벤트", url: "", state: ""},
			{num: "gnb5_3", txt: "자주묻는질문", url: "", state: ""}
		]
		}
    ]
};



// WorksNav
var WorksNav_v2 = WorksNav_v2 || {};
WorksNav_v2 = (function(doc, global) {
	// ELEMENTS INITIALIZE
	let obj = {},
		body = doc.querySelector('body'),
		container = doc.querySelector('#container'),
		gnbD1 = doc.querySelector('.nav-menu'),
		lnbD1 = doc.querySelector('.lnb_d1_wrap');

	obj.checkCurrentLnbNav = function(gnb_d1,gnb_d2) {
		setTimeout(function(){
			if(gnb_d1) {
				for (var i = 0; i < gnbNavData.gnb_d1.length; i++) {
					if (gnbNavData.gnb_d1[i].num == gnb_d1) {
						lnbD1.querySelector('.d1_li .txt').innerHTML = gnbNavData.gnb_d1[i].txt;
						if(gnb_d2) {
							for (var r = 0; r < gnbNavData.gnb_d1[i].gnb_d2.length; r++) {
								//console.log(gnbNavData.gnb_d1[i].gnb_d2[1].num)
								if (gnbNavData.gnb_d1[i].gnb_d2[r].num == gnb_d2) {
									lnbD1.querySelector('.d2_li .txt').innerHTML = gnbNavData.gnb_d1[i].gnb_d2[r].txt;
								}
							}
						}
					}
				}
			}
		},100);
	}

	return obj;
})(document, window);