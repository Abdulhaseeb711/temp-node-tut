const http=require( `http`)

const server=http.createServer((req,res)=>{
    if(req.url===`/`)
    {
    res.end(`Welcome to our Homepage`)
    }
    if(req.url ===`/about`)
    {
        res.end(`This is our about page`)
    }
    if(req.url ===`/error`)
    {
        res.end(`
    <h1>Oops</h1> we can't find that page <a href="/">Back Home</a>`)
    }    
}
)
server.listen(5000)
