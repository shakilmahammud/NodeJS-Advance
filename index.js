const http = require('http')
const url=require('url');

const server =http.createServer( function(req, res) {
    const parseUrl=url.parse(req.url);
    const path=parseUrl.pathname;
    const trimmedPath =path.replace(/\/$/, '');
    const queryStringObject =parseUrl.query;
    console.log(Json.Stringify(queryStringObject));
    

    const method = req.method.toLocaleLowerCase;
    const headers = req.headers;
    const decoder=new stringDecoder('utf-8');
    let buffer='';
    
    req.on('data', function(data) {
        buffer+=decoder.write(data);
    })
    req.end('end',function() {
        buffer+=decoder.end()
        const chocsenHandler = typeof router[trimmedPath]==="undefined"?router[trimmedPath] : handler.notFound;

        const data={
            trimmedPath,
            queryStringObject,
            method,
            headers,
            payLoad:buffer
        };
   
     chocsenHandler(data,function(statusCode,payLoad){
         statusCode= typeof statusCode === "number"? statusCode:200;
          payLoad=typeof payload === "object"?payLoad:{};
          const payloadString=JSON.stringify(payLoad);
          res.writeHead(statusCode)
          res.end(payloadString)
          console.log('returning',statusCode, payloadString);
             })
            })
            console.log(method)
})
server.listen(port:3000)