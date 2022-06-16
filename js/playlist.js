
//obtener el id con

let arrayDePlaylist = []

for (let i=0 ; i<arrayDePlaylist.length ; i++){

let urltrack = 'https://api.allorigins.win/raw?url=https://api.deezer.com/track/' + arrayDePlaylist[i]
    
    fetch(urltrack)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            console.log(data);
           //trabajo con los datos 
           let cancionesFavoritas = (".cajaCanciones")



            contenido += `<article>
                                    <p class="name"> ${data.data[i].title}</p>
                            </article>`

                            cancionesFavoritas.innerHTML = contenido;
  
        })
        .catch(function(error){
            console.log(error);
        })
    }
    let contenido = "";

