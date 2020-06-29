const homePage = require ('./homePage');
const enCartelera = require ('./enCartelera');
const masVotadas = require ('./masVotadas');
const preguntasFrecuentes= require ('./preguntasFrecuentes');
const sucursales = require ('./sucursales');
const contacto = require ('./contacto');
const { listarPelis } = require('./homePage');
 let index = {
     homePage : function (res){
          res.write (homePage.titulo)
          res.write ( "Total: " + homePage.cantidad () + '\n\n');
          let pelis = homePage.listarPelis ();
          for(peli of pelis){
              res.write(peli);
              
              res.write("\n");
            }
            res.write('\n')
        res.end(`Recordá que podes visitar las secciones:
        i. En Cartelera
        ii. Más Votadas
        iii. Sucursales
        iv. Contacto
        v. Preguntas Frecuentes`)
 
     },
    
     enCartelera : function (res){
        res.write (enCartelera.titulo + '\n\n')
        res.write ("Total: " + enCartelera.cantidad () + '\n\n');
        let pelis = enCartelera.listarPelis();
        for (peli of pelis) {
        res.write ("Titulo: " + peli.original_title + '\n\n'),
        res.write ("Reseña: " + peli.overview +'\n\n')
       
        }
        res.end ()
       
        
     },
      
       masVotadas : function (res){
           res.write ( masVotadas.titulo + '\n\n'),
           res.write ("Total de peliculas: " + masVotadas.cantidad() + '\n');
           res.write (" Puntajepromedio: " + masVotadas.promedio()+ '\n\n')
           let movies = masVotadas.listarPelis();
           movies.forEach (function(movie){
              res.write (movie.title + '\n')
              res.write (movie.vote_average + '\n')
              res.write (movie.overview + '\n')
              })
              res.end ()


          },
      preguntasFrecuentes : function (res) {
        res.write ("'\n     " + preguntasFrecuentes.titulo + '\n\n')
        res.write ("      Total: " + preguntasFrecuentes.cantidad () + '\n\n');
        let frecuentes = preguntasFrecuentes.listarFaqs();
        for (faq of frecuentes) {
        res.write ("  " + faq.faq_title + '\n\n'),
        res.write (" " + faq.faq_answer +'\n\n')
        
        }
        res.end()


     },
     sucursales : function (res){
        res.write (sucursales.titulo + '\n\n')
        res.write ("Total: " + sucursales.cantidad () + '\n\n');
        let salas = sucursales.listarSalas();
        for (sala of salas) {
        res.write ("Nombre: " + sala.name + '\n\n'),
        res.write ("Direccion: " + sala.adress +'\n\n')
        res.write ("Descripcion: " + sala.description +'\n\n')
        }
        res.end ()
     },
     contacto : function (res){
         res.write ( '\n\n' + contacto.titulo ),
         res.write ('\n' + contacto.contenido())
         res.end ()
         },
        }
 module.exports = index