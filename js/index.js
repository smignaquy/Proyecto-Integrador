// artistas

fetch('https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/artists')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        
        //capturando del html
        let artistas = document.querySelector('.artistas');
        let contenido ='';

        for (let i=0 ; i<5 ; i++){
            contenido += `<div class="objetoIndex"> 
                            <img src=${data.data[i].picture} alt="Artista" class="imgIndex imgArtista borde"> 
                            <h3 class="indexLista borde">
                                <a href="detail-artist.html?id=${data.data[i].id}" class="itemIndex">${data.data[i].name}</a> 
                            </h3> 
                        </div>`
        }

        //cambiando con datos de la API
        artistas.innerHTML = contenido;
    })
    .catch(function(error){
        console.log('El error fue: ' + error);
    })


    // tracks

    fetch('https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/tracks')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        
        //capturando del html
        let tracks = document.querySelector('.tracks');
        let contenido ='';

        for (let i=0 ; i<5 ; i++){
            contenido += `<div class="objetoIndex"> 
                            <img src=${data.data[i].album.cover} alt="Artista" class="imgIndex imgArtista borde"> 
                            <h3 class="indexLista borde">
                                <a href="detail-track.html?id=${data.data[i].id}" class="itemIndex">${data.data[i].title}</a> 
                            </h3> 
                        </div>`
        }

        //cambiando con datos de la API
        tracks.innerHTML = contenido;
    })
    .catch(function(error){
        console.log('El error fue: ' + error);
    })
    

    // albums

    fetch('https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/albums')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        
        //capturando del html
        let albums = document.querySelector('.albums');
        let contenido ='';

        for (let i=0 ; i<5 ; i++){
            contenido += `<div class="objetoIndex"> 
                            <img src=${data.data[i].cover} alt="Artista" class="imgIndex imgArtista borde"> 
                            <h3 class="indexLista borde">
                                <a href="detail-album.html?id=${data.data[i].id}" class="itemIndex">${data.data[i].title}</a> 
                            </h3> 
                        </div>`
        }

        //cambiando con datos de la API
        albums.innerHTML = contenido;
    })
    .catch(function(error){
        console.log('El error fue: ' + error);
    })


