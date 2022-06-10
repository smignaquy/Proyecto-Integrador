//id tiene que venir de la querystring
//traer la qs
//transformarla en OL

//obtener el id con
let id=33;



fetch('https://api.allorigins.win/raw?url=https://api.deezer.com/artist/' + id)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        
        //capturando del html
        let nombre = document.querySelector('.hRels');
        let canciones = document.querySelector('.ulTemas');
        let imagen = document.querySelector('.imgRels');

        //cambiando con datos de la API
        nombre.innerText += data.name;
    })
    .catch(function(error){
        console.log('El error fue: ' + error);
    })