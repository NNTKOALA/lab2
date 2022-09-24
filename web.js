var http = require('http');
http
    .createServer((req, res) => {
        //thiết lập kiểu trả về của respone: HTML
        res.setHeader("application-header", "text/html");
        res.write("<h1 style='color:red'>1644 - Cloud Computing<h1>");
        res.write("<h2 style='font-style: Italic'>Teacher - Nguyen Tran Dinh Long<h2>");
        res.write("<h3 style='text-decoration: underline'>Class - GCH0907<h3>");
        res.write("<h4>Fall - 2022<h4>");
        res.write("<h5>University of GreenWich (VietNam)<h5>");
        res.write("<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYHOhZEis0N-EVzpici3fYyuu6aaHGv2jbWw&usqp=CAU'>");
        res.end("");
    })

    .listen(80, () =>{
        console.log("http://localhost");
    });
    //80: default http port