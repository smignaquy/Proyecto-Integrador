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
        let nombreArtista = document.querySelector('.relsTrack');
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

        //Guaradar favoritos
        let favoritos = [];

        //chequear si hay algo en favoritos
        let recuperoStorage = localStorage.getItem("favoritos");

        if(recuperoStorage){ //null o undefined => false //tiene una variable => true
            let favoritosToArray = JSON.parse(recuperoStorage)
            favoritos = favoritosToArray
        }

        let link = document.querySelector(".agregarPlaylist");

        if(favoritos.includes(id)){
            //cambiarle el mensaje al usuario.
            link.innerText = "Sacar de favoritos"
        }

    
        link.addEventListener("click", function(evento){
            //evitar default del link
            evento.preventDefault()

            if(favoritos.includes(id)){
                //Sacar el id del array
                let sacar = favoritos.indexOf(id)
                favoritos.splice(sacar, 1);
                link.innerText="Agregar a favoritos"

            } else {
                //Agregar un data al array
                favoritos.push(id);
                link.innerText = "Sacar de favoritos"

            }
        
            //Agregar el array a localStorage. Antes hay que pasarlo a string
            let gifFavoritosToString = JSON.stringify(favoritos);
            localStorage.setItem('favoritos', gifFavoritosToString)


            console.log(localStorage.getItem("favoritos"));

        })

    document.querySelector(".player").innerHTML =`<iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${id}" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>')`
    

