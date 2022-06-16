//Recuperar el array del storage
let recuperoStorage = localStorage.getItem("favoritos");
recuperoStorageToArray = JSON.parse(recuperoStorage);

//capturar la sección para completar con datos
let section= document.querySelector(".favoritos")
let contenidoSection = ""

//pedir a la api los datos de todos los ids
for(let i=0; i<recuperoStorageToArray.length; i++){
    //fetch
    let url = 
    
    fetch(urltrack)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            console.log(data);
           //trabajo con los datos 
            contenidoSection += `<article>
                                    <p class="name">Nombre: $giu</p>
                                    <img class="image" src="${data.data.images.original.url}" alt="">
                                    <a href="detalleGif.html?id=${data.data.id}">ir a detalle </a>
                            </article>`


            contenido += `<article>
                                    <p class="name"> ${data.data[i].title}</p>
                            </article>`

                            cancionesFavoritas.innerHTML = contenido;
  
        })
        .catch(function(error){
            console.log(error);
        })
}

