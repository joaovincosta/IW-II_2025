function msg() {
    alert("JavaScript é divertido!");
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("botaoMsg").addEventListener("click", msg);
})