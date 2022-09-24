const http = require('http')
// fs: file system => module để truy xuất & thay đổi file
const fs = require('fs')
const port = 1234

http.createServer((req, res) => {
    //check đường dẫn URL hiện tại
    if(req.url === "/"){
        fs.readFile("./greenwich.html", (err, data) => {
            //nếu đọc file bị lỗi (sai tên, đã bị xóa,...)-> show ra lỗi
            if (err) {
                console.error("Read file error: " + err)
            }else{
                res.end(data)
            }
        })
    } else if (req.url === "/cloud") {
        fs.readFile("./cloud.html", (err, data) => {
            if (err) {
                console.error("Read file error: " + err)
            }else{
                res.end(data)
            }
        })
    } else if (req.url === "/vietnam") {
        fs.readFile("./vietnam.html", (err, data) => {
            if (err) {
                console.error("Read file error: " + err)
            }else{
                res.end(data)
            }
        })
    } else {
        fs.readFile("./notfound.html", (err, data) => {
            if (err) {
                console.error("Read file error: " + err)
            }else{
                res.end(data)
            }
        })
    }
})
.listen(port, () => {
    console.log("http://localhost:" + port)
})