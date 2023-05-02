# Solves Pub
***
- [Index Page](https://idrpubadmin.github.io/idr_solves_pub/index_markup_list.html)

### 퍼블리싱 작업환경
 - node.js + gulp.js 환경
 - sass 사용해서 css작업

### 퍼블리싱 산출물 디렉토리 구조
```markdown
IDR_SOLVES_PUB
      ├ assets : 정적 파일 소스
      │  ├  css  : css폴더
      │  │   ├ display.css
      │  ├  font : font폴더
      │  ├  images : images폴더
      │  ├  js : js폴더 (동작관련)
      │  ├  plugin : plugin폴더
      ├ dev : 퍼블작업을 위한 폴더(퍼블리셔 전용)
      │  ├  /css_dev : 신규 css를 위한 sass폴더
      │  │      ├ /base : 기본 속성, 공통을 위한 sass
      │  │      ├ /display : 컴포넌트를 위한 sass
      │  │      ├ /layout : 레이아웃을위한 sass
      │  │      ├ /pages : index페이지 sass
      │  │      ├ /utils : css mixin 관련 sass
      │  ├  /page_dev : 퍼블 static 소스
      │  ├  /page_include : 퍼블 include 소스
      │  ├  layout_template.html : 산출물 페이지 template html
      ├  pages : html 로 변환된 퍼블 산출물
      ├  index : 페이지별 link
```

### mediaQuery 분기사이즈
  - pc : 2560 ~1360
  - mobile : ~ 360

### 파일명 관련
  - 폴더명 : 단어간 구분 언더바 _ 으로 표기
  - class명 : 단어간 구분 언더바 _ 으로 표기
  - image명 : 단어간 구분 하이픈 - 으로 표기

### 폰트사이즈 반응형 작업
  - 사이즈 단위 : rem
  - 기본폰트 : NaverNanumSquareNeo

