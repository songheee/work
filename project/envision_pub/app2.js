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

// 각 개인 폴더 위치별로 경로 설정
// const pagesdir = 'C:/Users/Admin/WebstormProjects/idr_envision_pub/views/pages/';(sample)
const pagesdir = '각 개인 폴더 위치별로 경로 설정/WebstormProjects/idr_envision_pub/views/pages/';
const depth1 = [];
const depth2 = [];
const pageData = [];
const pageDataKeys = ['url','renderurl','fileurl'];

pageData.push({"url":"/", "renderurl":"markup-list", "fileurl":"./dist/markup-list.html"});
fs.readdirSync(pagesdir).forEach(file => {

    const fileVal = file;
    const fileLength = fileVal.length;
    const fileDot = fileVal.lastIndexOf(".");
    const fileName = fileVal.substring(0,fileDot);
    const fileType = fileVal.substring(fileDot+1, fileLength).toLowerCase();

    if(fileDot == -1){ //하위 폴더아래 있는 ejs

        const childrenFolder = fileVal;

        fs.readdirSync(pagesdir+"/"+childrenFolder).forEach(file2 => {
            const fileVal2 = file2; // filename.ejs
            const fileLength2 = fileVal2.length; // filename.ejs 의 길이
            const fileDot2 = fileVal2.lastIndexOf("."); // .위치
            const fileName2 = fileVal2.substring(0,fileDot2); // none ejs

            const fileType2 = fileVal2.substring(fileDot2+1, fileLength2).toLowerCase();
            if(fileType2 == 'ejs'){
                depth2.push(childrenFolder+"/"+fileName2);
                const pageDataValues = [];
                const pageDataObj = [];

                pageDataValues.push("/pages/"+childrenFolder+"/"+fileName2);
                pageDataValues.push("./pages/"+childrenFolder+"/"+fileName2);
                pageDataValues.push("./dist/"+childrenFolder+"/"+fileName2+".html");

                for(let i = 0; i < pageDataKeys.length; i++){
                    pageDataObj[pageDataKeys[i]] = pageDataValues[i];
                }

                pageData.push(pageDataObj);
            }

        })

    }else{ //pages 아래 ejs 폴더
        if(fileType == 'ejs')
            depth1.push(fileName);
        const pageDataValues = [];
        const pageDataObj = [];

        pageDataValues.push("/pages/"+fileName);
        pageDataValues.push("./pages/"+fileName);
        pageDataValues.push("./dist/"+fileName+".html");

        for(let i = 0; i < pageDataKeys.length; i++){
            pageDataObj[pageDataKeys[i]] = pageDataValues[i];
        }

        pageData.push(pageDataObj);

    }
});



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

    depth1.forEach(function(e) {
        axios.get("http://127.0.0.1:3000/pages/"+e).then((res)=>{
            console.log("http://127.0.0.1:3000/pages/"+e);
        })
    });

    depth2.forEach(function(e) {
        axios.get("http://127.0.0.1:3000/pages/"+e).then((res)=>{
            console.log("http://127.0.0.1:3000/pages/"+e);
        })
    });
}, 1000);
