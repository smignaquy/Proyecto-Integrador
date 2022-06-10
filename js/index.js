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
                            <img src=${data.data[i].picture} alt="ARTISTA" class="imgIndex imgArtista borde"> 
                            <li class="indexLista borde">
                                <a href="detail-artist.html?id=${data.data[i].id}" class="itemIndex">${data.data[i].name}</a> 
                            </li> 
                        </div>`
        }

        //cambiando con datos de la API
        artistas.innerHTML = contenido;
    })
    .catch(function(error){
        console.log('El error fue: ' + error);
    })
    



    let canciones = document.querySelector('.temas');
        let albums = document.querySelector('.albums')
        let imgArtistas = document.querySelector('.imgArtista');
        let imgCancioness = document.querySelector('.imgCancion');
        let imgAlbum = document.querySelector('.imgAlbum');