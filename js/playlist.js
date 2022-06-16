//Recuperar el array del storage
let recuperoStorage = localStorage.getItem("favoritos");
recuperoStorageToArray = JSON.parse(recuperoStorage);

//capturar la sección para completar con datos
let cancionesFavoritas= document.querySelector(".cajaCanciones")
let contenidoSection = ""

for (let i=0 ; i<recuperoStorageToArray.length ; i++){

let urltrack = 'https://api.allorigins.win/raw?url=https://api.deezer.com/track/' + recuperoStorageToArray[i]
    
    fetch(urltrack)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            console.log(data);
    
           contenidoSection += `<article>
                                    <p class="name"> ${data.title}</p>
                            </article>`

            cancionesFavoritas.innerHTML = contenidoSection;
                            
                })
                .catch(function(error){
                    console.log(error);
                })
            }


