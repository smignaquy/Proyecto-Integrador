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
            return response.json()
        })
        .then(function(data){
            console.log(data);
           //trabajo con los datos 
           let cancionesFavoritas = (".cajaCanciones")
           let contenido = "";

            contenido += `<article>
                                    <p class="name"> ${data.data[i].title}</p>
                            </article>`

                            cancionesFavoritas.innerHTML = contenido;

        })
        .catch(function(error){
            console.log(error);
        })

