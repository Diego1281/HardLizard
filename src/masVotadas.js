const fs = require ('fs')

let masVotadas = {
    db: './data/movies.json',
    titulo : " Mas votadas \n",
    leerJSON : function (){
        let moviesJSON = fs.readFileSync (this.db , 'utf-8');
        let movies = JSON.parse (moviesJSON);
        return movies
    },
        
     listarPelis : function (){
                let movies = this.leerJSON().movies;
                 
                 let pelis =movies.filter(function (movie){
                    return movie.vote_average >=7 
                });
                  return pelis
                },
            
      cantidad : function () {
          return this.listarPelis().length
      },
      promedio:function(){
        let peliculasMasVotadas = this.listarPelis()
        let promedio = 0 
        peliculasMasVotadas.forEach(function(peli){
            promedio = promedio + peli.vote_average
        })
        promedio = promedio/this.cantidad()
        return promedio


         },
      
            


         
        } ;
module.exports = masVotadas