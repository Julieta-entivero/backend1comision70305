const http = require("http");
const url=require("url")

const PORT = 8080;

const server = http.createServer((req, res)=> {
    console.log(req.url)
    const urlParsed=url.urlParse(req.url, true)
    console.log(urlParsed)

    if(req.url==="/contacto"){
    res.setHeader("Content-Type","text/plain; charset=utf-8")
    return res.end(`contacto`)
    
}

if(req.url==="/"){
    res.setHeader("Content-Type","text/plain; charset=utf-8")
    return res.end(`server con modulo HTTP`)
}

if(req.url==="/heroes"){
    let heroes=[]
    res.setHeader("Content-Type","application/json; charset=utf-8")
    return res.end(JSON.stringify(heroes))
}

res.setHeader("Content-Type","text/plain; charset=utf-8")
    return res.end(`error 404 | not found`)
});

server.listen(PORT, ()=>{
    console.log(`server corriendo en puerto ${PORT}`)
})