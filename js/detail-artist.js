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
        let imagen = document.querySelector('.imgRels');

        //cambiando con datos de la API
        nombre.innerText += data.name;
        imagen.src = data.picture

        //buscando info de tracks 
            fetch('https://api.allorigins.win/raw?url=https://api.deezer.com/artist/230/top?limit=50')
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                console.log(data)

                let tracks = document.querySelector('.ulTemas');
                let contenido ='';

                for (let i=0 ; i<6 ; i++){
                    contenido += `<li>
                                     <a class="tArtistas" href='detail-track.html?id=${data.data[i].id}'> ${data.data[i].title} </a>
                                 </li>`
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