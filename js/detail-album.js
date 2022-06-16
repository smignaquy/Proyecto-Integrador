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
        nombre.innerText += data.title
        nombreArtista.innerText += "Artista: " + data.artist.name;
        imagen.src = data.cover;

        temas.innerText += data.data.tracklist;

                //buscando info de tracks 
                fetch('https://api.allorigins.win/raw?url=https://api.deezer.com/album/302127')
                .then(function(response){
                    return response.json();
                })
                .then(function(data){
                    console.log(data)
    
                    let tracks = document.querySelector('.temasArtista');
                    let contenido ='';
    
                    for (let i=0 ; ; i++){
                        contenido += `<li> ${data.data[i].tracklist} </li>`
                    }
                    tracks.innerHTML = contenido;
                })
                .catch(function(error){
                    console.log('El error fue: ' + error);
                })

    })
    .catch(function(error){
        console.log('El error fue: ' + error);
    })