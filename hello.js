const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url==='/'){a
        res.end('thats my home page')
    }
    if(req.url==='/about'){
        res.end('this is the about page')
    }
    
       res.end('haha333')

})
server.listen(8080)