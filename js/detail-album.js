//id tiene que venir de la querystring
let queryString = location.search
//traer la qs
let queryStringObj = new URLSearchParams(queryString)
//transformarla en OL
let id = queryStringObj.get('id');

//obtener el id con

let urlAlbum = 'https://api.allorigins.win/raw?url=https://api.deezer.com/album/' + id

fetch(urlAlbum)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        
        //capturando del html
        let nombre = document.querySelector('.hLaIsla');
        let nombreArtista = document.querySelector('.generoLaIsla');
        let temas = document.querySelector('.temasArtista');
        let imagen = document.querySelector('.imgLaIsla');

        //cambiando con datos de la API
        nombre.innerText += data.title
        nombreArtista.innerText += "Artista: " + data.artist.name;
        imagen.src = data.cover;

        //temas.innerText += data.data.tracklist;

                //buscando info de tracks 
                    let tracklist = data.tracks.data;
                    console.log(tracklist);
                    let contenido = "";
    
                    for (let i=0 ; i < tracklist.length ; i++){
                        contenido += `<li> 
                        <a class="tAlbum" href='detail-track.html?id=${tracklist[i].id}'> ${tracklist[i].title}  </a>
                        </li>`
                    }
                    temas.innerHTML = contenido;
                })

    .catch(function(error){
        console.log('El error fue: ' + error);
    })