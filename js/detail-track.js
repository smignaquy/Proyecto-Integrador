//id tiene que venir de la querystring
let queryString = location.search
//traer la qs
let queryStringObj = new URLSearchParams(queryString)
//transformarla en OL
let id = queryStringObj.get('id');

//obtener el id con


let urltrack = 'https://api.allorigins.win/raw?url=https://api.deezer.com/tracks/' + id

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
        nombre.innerText += data.data.title_short
        nombreArtista.innerText += "Artista: " + data.data.artist.name;
        cancion.innerText += "Album:  " + data.data.album.title;
        imagen.src += data.data.album.original.url;

    })
    .catch(function(error){
        console.log('El error fue: ' + error);
    })
    //Agregando a favoritos 
    let favoritos = [] ;
    
    let link= document.querySelector("trackPlaylist");

    //Definir un evento para el link 
    link.addEventListener("click" , function(evento) {
       //evitar default del link 
       evento.preventDefault ()

       //Agregar un dato al array
      let cancionFavorita = favoritos.push(data.data[i].id)

       //Agregar al localStorage. Antes hay que pasarlo a string 
       let cancionFavoritaTostring = JSON.stringify(cancionFavorita)
      
       console.log (JSON.stringify(cancionFavorita))
       localStorage.setItem('favorita', cancionFavoritaTostring)

       console.log(localStorage)
    })

