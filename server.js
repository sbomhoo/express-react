const { application } = require('express');
const express = require('express');
const path = require('path');
const app = express();

const http = require('http').createServer(app);
http.listen(8080, function(){
    console.log('listening on 8080');
});

//미들 웨어 - html, js , css 등의 파일을 서버에 보내기 위해서는 명시해줘야 한다.
//app.use( express.static(path.join(__dirname, 'public')));
app.use( express.static(path.join(__dirname, 'react-project/build')));  //리액트 빌드 만 것을 보낸다.

app.get('/', function(req,resp){
    resp.sendFile( path.join(__dirname, 'react-project/build/index.html'))
})

//리액트 프로젝트 내에서 라우팅하려면  why? 이 셋팅없이 /about하면 직접적으로 html을 가져온다.  라우팅은 직접적으로 html을 보여주는 것이 아니기 때문에 
app.get('*', function(req,resp){
    resp.sendFile( path.join(__dirname, 'react-project/build/index.html'))
})
