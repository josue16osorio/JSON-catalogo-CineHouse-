/*function nota(x,y,z){
    var media=(x+y+z)/3
    if(media>=7){
        console.log("aprovado")
    }else if((media >=5||media<7)){
        console.log("recuperação")

    }else{
        console.log("reprovado")
    }
}
nota(5,6,7)*/

function adicionarHttp(url) {
    
        
     
      
    
    return ("http://" + url)
}

function processar(site,adicionarHttp){
    var array = []
    for(var i=0;i<site.length;i++){
        
console.log (adicionarHttp(site[i]))
      array.push(adicionarHttp(site[i]))
    }
   return console.log (array)
  
}
var sites=["www.google.com.br","www.joa.com.br"]

processar(sites,adicionarHttp)

