const fs = require ('fs') 

let contacto = {
    db: './data/movies.json',
    titulo : "    Contacto \n",
    contenido : function (){
        
        return (" ¿Tenés algo para contarnos? \n Nos encanta escuchar a nuestros clientes.Si deseas contactarnos podés escribirnos al siguiente email:dhmovies@digitalhouse.com o en las redes sociales. Envianos tu consulta,sugerencia o reclamo y será respondido a la brevedad posible. Recordá quetambién podes consultar la sección de Preguntas Frecuentes para obtenerrespuestas inmediatas a los problemas más comunes ") ;
    } 


} ;
module.exports = contacto