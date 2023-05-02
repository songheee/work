const livereload = require('livereload');
const livereloadMiddleware = require('connect-livereload');
const path = require('path');
const fs = require('fs');
const axios = require('axios');

const http = require('http');
const express = require("express"); // express 모듈 요청
const ejs = require("ejs"); // ejs 모듈 요청
const { Console } = require('console');

const app = express(); // app을 express 프레임워크로 킨다
const server = http.createServer(app);

const hostname = '127.0.0.1';
const port = 3000;

app.set("view engine", "ejs"); // app에 view engine을 설치, ejs를 템플릿으로
app.set('views', './views');

//app.engine("html", require("ejs").renderFile);// "ejs"로 변경 후 "html" 파일로 열 수 있게 렌더링
app.use(express.static(__dirname + '/')); // views 폴더 경로는 프로젝트 폴더.(__dirname이 폴더 위치)
app.use(livereloadMiddleware());

const pageData =
    [
        {"url":"/", "renderurl":"markup-list", "fileurl":"./dist/markup-list.html"},
        {"url":"/pages/index", "renderurl":"./pages/index", "fileurl":"./dist/index.html"},

        {"url":"/pages/register/login", "renderurl":"./pages/register/login", "fileurl":"./dist/register/login.html"},
        {"url":"/pages/register/find-id", "renderurl":"./pages/register/find-id", "fileurl":"./dist/register/find-id.html"},
        {"url":"/pages/register/find-id-result", "renderurl":"./pages/register/find-id-result", "fileurl":"./dist/register/find-id-result.html"},
        {"url":"/pages/register/find-pw", "renderurl":"./pages/register/find-pw", "fileurl":"./dist/register/find-pw.html"},
        {"url":"/pages/register/find-pw-reset", "renderurl":"./pages/register/find-pw-reset", "fileurl":"./dist/register/find-pw-reset.html"},
        {"url":"/pages/register/register", "renderurl":"./pages/register/register", "fileurl":"./dist/register/register.html"},
        {"url":"/pages/register/register-info", "renderurl":"./pages/register/register-info", "fileurl":"./dist/register/register-info.html"},
        {"url":"/pages/register/register-complete", "renderurl":"./pages/register/register-complete", "fileurl":"./dist/register/register-complete.html"},

        {"url":"/pages/check/check-list", "renderurl":"./pages/check/check-list", "fileurl":"./dist/check/check-list.html"},
        {"url":"/pages/check/check-detail", "renderurl":"./pages/check/check-detail", "fileurl":"./dist/check/check-detail.html"},
        {"url":"/pages/check/check-detail-faulty", "renderurl":"./pages/check/check-detail-faulty", "fileurl":"./dist/check/check-detail-faulty.html"},

        {"url":"/pages/notice", "renderurl":"./pages/notice", "fileurl":"./dist/notice.html"},

        {"url":"/pages/my-info/my-page", "renderurl":"./pages/my-info/my-page", "fileurl":"./dist/my-info/my-page.html"},
        {"url":"/pages/my-info/my-confirm-info", "renderurl":"./pages/my-info/my-confirm-info", "fileurl":"./dist/my-info/my-confirm-info.html"},
        {"url":"/pages/my-info/my-revision-basic", "renderurl":"./pages/my-info/my-revision-basic", "fileurl":"./dist/my-info/my-revision-basic.html"},
        {"url":"/pages/my-info/my-revision-belong", "renderurl":"./pages/my-info/my-revision-belong", "fileurl":"./dist/my-info/my-revision-belong.html"},
        {"url":"/pages/my-info/my-revision-pw", "renderurl":"./pages/my-info/my-revision-pw", "fileurl":"./dist/my-info/my-revision-pw.html"},

        {"url":"/pages/popup-list", "renderurl":"./pages/popup-list", "fileurl":"./dist/popup-list.html"}

    ];

pageData.forEach(function(e) {
    app.get(e.url, (req, res) => {
            res.render(e.renderurl,
                {},
                (err, html) => {
                    fs.writeFileSync(e.fileurl, html);
                    res.send(html);
                });
        }
    );
})

app.listen(3000, function(){
    console.log("실행중...");
});


setTimeout(function(){

    const infoPages = [ "index", "notice", "popup-list" ];
    const infoRegister = [ "find-id", "find-id-result", "find-pw", "find-pw-reset", "login", "register", "register-complete", "register-info" ];
    const infoCheck = [ "check-list", "check-detail", "check-detail-faulty" ];
    const infoMy = [ "my-page", "my-confirm-info", "my-revision-basic", "my-revision-belong", "my-revision-pw", "my-page"];

    infoPages.forEach(function(e) {
        axios.get("http://127.0.0.1:3000/pages/"+e).then((res)=>{
            console.log("http://127.0.0.1:3000/pages/"+e);
        })
    });

    infoRegister.forEach(function(e) {
        axios.get("http://127.0.0.1:3000/pages/register/"+e).then((res)=>{
            console.log("http://127.0.0.1:3000/pages/register/"+e);
        })
    });

    infoCheck.forEach(function(e) {
        axios.get("http://127.0.0.1:3000/pages/check/"+e).then((res)=>{
            console.log("http://127.0.0.1:3000/pages/check/"+e);
        })
    });

    infoMy.forEach(function(e) {
        axios.get("http://127.0.0.1:3000/pages/my-info/"+e).then((res)=>{
            console.log("http://127.0.0.1:3000/pages/my-info/"+e);
        })
    });

    },1000);

