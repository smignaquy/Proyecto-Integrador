//id tiene que venir de la querystring
let queryString = location.search
//traer la qs
let queryStringObj = new URLSearchParams(queryString)
//transformarla en OL
let id = queryStringObj.get('id');

//obtener el id con


let urltrack = 'https://api.allorigins.win/raw?url=https://api.deezer.com/track/' + id

fetch(urltrack)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        
        //capturando del html
        let nombre = document.querySelector('.hVerano');
        let nombreArtista = document.querySelector('.hRels');
        let canciones = document.querySelector('.trackAlbum');
        let imagen = document.querySelector('.imgVerano');

        //cambiando con datos de la API
        nombre.innerText += data.title
        nombreArtista.innerHTML += "Artista: " + data.artist.name;
        canciones.innerText += "Album:  " + data.album.title;
        imagen.src = data.album.cover;

    })
    .catch(function(error){
        console.log('El error fue: ' + error);
    })

    //agregar cancion a play;ist

    let favoritos = [] ;
    let link = document.querySelector(".trackPlaylist");

    //chequear si hay algo en favoritos 
    let recuperoStorage = localStorage.getItem("favoritos");
    if(recuperoStorage !== null) {
    let favoritosArray = JSON.parse(recuperoStorage)
    favoritos = favoritosArray
    }

    //Definir un evento para el link 
    link.addEventListener("click" , function(evento) {
       //evitar default del link 
       evento.preventDefault ()

       //Agregar un dato al array
       let cancionFavorita = favoritos.push(data.data[i].id)

       //Agregar al localStorage. Antes hay que pasarlo a string 
       let cancionFavoritaToString = JSON.stringify(cancionFavorita)
      
       console.log (JSON.stringify(cancionFavorita))
       localStorage.setItem('favoritos', cancionFavoritaToString)

       console.log(localStorage)
    })


