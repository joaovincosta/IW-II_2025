// Função chamada ao clicar no botão
function saudacao() {
    alert("Olá, seja muito bem-vindo!");
}

// Atribui a função ao botão ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("botaoSaudacao").addEventListener("click", saudacao);
})