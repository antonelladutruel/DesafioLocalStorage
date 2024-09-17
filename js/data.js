 const nameFromLocalStorage = localStorage.getItem("data");

function mostrar(){
document.getElementById("data").innerHTML += `${nameFromLocalStorage}` 
}

mostrar();