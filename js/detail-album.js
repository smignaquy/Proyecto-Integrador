//id tiene que venir de la querystring
let queryString = location.search
//traer la qs
let queryStringObj = new URLSearchParams(queryString)
//transformarla en OL
let id = queryStringObj.get('id');

//obtener el id con


let urltrack = 'https://api.allorigins.win/raw?url=https://api.deezer.com/albums/' + id

fetch(urltrack)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        
        //capturando del html
        let nombre = document.querySelector('.hLaIsla');
        let nombreArtista = document.querySelector('.generoLaIsla');
        let temas = document.querySelector('.temasLaIsla');
        let imagen = document.querySelector('.imgLaIsla');

        //cambiando con datos de la API
        nombre.innerText += data.data.title
        nombreArtista.innerText += "Artista: " + data.data.artist.name;
        temas.innerText += data.data.tracklist;
        imagen.src += data.data.cover.original.url;

    })
    .catch(function(error){
        console.log('El error fue: ' + error);
    })