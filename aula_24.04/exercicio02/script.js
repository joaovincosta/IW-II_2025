function MudaP(){
    document.getElementById("texto").innerHTML = "Texto atualizado com JavaScript!";
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("botaoMudaP").addEventListener("click", MudaP);
})