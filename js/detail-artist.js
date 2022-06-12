//id tiene que venir de la querystring
let queryString = location.search
//traer la qs
let queryStringObj = new URLSearchParams(queryString)
//transformarla en OL
let id = queryStringObj.get('id');

//obtener el id con


let urlArtista = 'https://api.allorigins.win/raw?url=https://api.deezer.com/artist/' + id

fetch(urlArtista)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        
        //capturando del html
        let nombre = document.querySelector('.hRels');
        let canciones = document.querySelector('.ulTemas');
        let imagen = document.querySelector('.imgRels');

        //cambiando con datos de la API
        nombre.innerText += data.name;
        canciones.innerHTML += data.tracklist;
        imagen.src += data.data.picture.original.url;

    })
    .catch(function(error){
        console.log('El error fue: ' + error);
    })