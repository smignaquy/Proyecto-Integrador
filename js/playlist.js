//Recuperar el array del storage 
let recuperoStorage = localStorage.getItem("favoritos");
recuperoStorageToArray = JSON.parse(recuperoStorage); 

//capturar la sección para completar con datos
let section= document.querySelector(".favoritos")
let contenidoSection = ""

