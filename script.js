/* JS Exercises should go here */

//EXTRA Crea con JavaScript la funzionalità per rimuovere il link "twitter" 
//sotto alla sezione "Altro" nell'elemento "aside". 
//Deve avvenire al caricamento della pagina, automticamente.

//EXTRA Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento padre dal DOM
//cliccando sul link "Continua a leggere".

// EXTRA Crea con JavaScript la funzionalità per creare un alert col nome dell'autore 
//ogni volta che il cursore passa sopra l'autore del post.


document.addEventListener('DOMContentLoaded', function() {
    let linkTwitter = document.querySelector('.p-4 .list-unstyled li:nth-child(2)')
    console.log(linkTwitter);
    linkTwitter.style.display= 'none';
})