//khai báo module http để chạy web server
const http = require('http')
//var http = require('http')

//2. khai báo host name (optional)
const host = "localhost"

//3. khai báo server port
const port = 3000
//Note: có thể chọn cổng bất kỳ

//4. tạo web server
const web = http.createServer((req, res) => {
    res.end("This is a tutorial abot NodeJS")
})

//5. chạy server trên port (listen port)
web.listen(port, () => {
    // console.log("Server is running on port " + port)
    // console.log("Server is running at address: http://" + host + ":" + port)
    console.log("http://localhost:" + port)
})