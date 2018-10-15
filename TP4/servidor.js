var http = require('http')
var fs = require('fs')
var url = require('url')

http.createServer(function(req,res) {

  var urlObj = url.parse(req.url, true)
  var path = urlObj.pathname

  res.writeHead(200,{'Content-Type':'text/html'})
  
  if ((path == "/") || (path == "/index")){
    
    fs.readFile('website/index.html',(erro, info)=>{
    
      if (erro)
        res.write('<p>ERRO</p>')
      else
        res.write(info)
      res.end()

    })
  }
  else{
    doc = path.split("/")
    var newURL = 'website/html/' + doc[2] + '.html'

    fs.readFile(newURL, (erro, info)=>{

      if (erro){
        res.write('<p>ERRO</p>')
        res.write('<address><a href="index">[Voltar a página inicial]<a></address>')
      }
      else
        res.write(info)
      
      res.end()
    })
  }

    
     

}).listen(4000,()=>{console.log('servidor a escuta na porta 4000' )})
