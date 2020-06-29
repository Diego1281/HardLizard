const fs = require ('fs')

let preguntasFrecuentes = {
    db: './data/faqs.json',
    titulo : "Preguntas frecuentes \n",
    leerJSON : function (){
        let moviesJSON = fs.readFileSync (this.db , 'utf-8');
        let movies = JSON.parse (moviesJSON);
        return movies
    } ,
    cantidad : function (){
        return this.leerJSON().total_faqs
    },
    listarFaqs : function (){
        let faqs = this.leerJSON();
        let pregunta = ( faqs.faqs)
        return pregunta
    },

} 
module.exports = preguntasFrecuentes