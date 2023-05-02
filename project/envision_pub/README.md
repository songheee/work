# 01. [CHECKIE] 퍼블리싱가이드


퍼블리싱 작업환경
---
node.js + express + ejs 환경

퍼블리싱 특이사항
---
- 기본폰트 : Noto Sans KR(숫자:Gmarket Sans)
- 앱으로 변활될 페이지로 Mobile first 작업(pc로도 사용될 경우를 대비하여 최대 1024까지 작업)
  단, 디자인은 모바일 기준 레이아웃만 나와서 모바일 레이아웃 기준으로 작업 진행
  
- mediaQuery 분기사이즈
    - mobile : ~ 360
    - tablet : 361 ~ 768
    - pc : 769 ~ 1024


퍼블리싱 산출물 디렉토리 구조
---
    /root

    ├ /dev : 신규 css를 위한 sass 폴더

    │　└ /css_dev : 신규 css를 위한 sass 폴더

    │　　├ /base : layout 및 페이지 기본 요소에 관련한 scss

    │　　├ /pages : 페이지별 scss

    │　　├ /utils : scss mixin 관련 scss

    │　　└ frontend.scss : 모든 pages에서 사용하는 scss

    ├ /dist : html 로 변환된 퍼블 산출물

    ├ /markup-list : html 로 변환된 퍼블 산출물(고객 확인용)

    ├ /static : 퍼블 static 소스

    │　├ /css : 신규 css

    │　├ /fonts : 신규 font

    │　├ /js : 신규 js

    ├ /views : ejs 관련 파일

    │　└ /common : page 별 include ejs 파일

    │　└ /pages : page 별 ejs 파일

    │　└ /popup : 레이어 팝업 관련 파일

    ├ app.js : express 관련 파일

    └ package.json : node.js 관련 파일


테스트 기기
---
ios, Android 환경의 휴대폰 혹은 패드


퍼블리싱 작업 최종 확인 페이지
---
https://idrpubadmin.github.io/idr_envision_pub/markup-list/markup-list.html