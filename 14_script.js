function mostrarNome(){
    let nome=document.getElementById("name").value
    document.getElementById("resposta").innerHTML="Olá "+nome
}
let mostrar=document.getElementById("mostrar")
mostrar.addEventListener("click", mostrarNome)