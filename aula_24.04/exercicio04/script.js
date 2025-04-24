function ExibeNome(){
    document.body.style.backgroundColor = "#378FAE";
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("botaoExibeNome").addEventListener("click", ExibeNome);
})