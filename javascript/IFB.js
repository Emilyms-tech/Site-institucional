var nome = prompt("Qual é o seu nome?", "");

alert("Olá " + nome + ", seja bem-vindo(a) ao site do IFB Campus Brasília!");
document.addEventListener("DOMContentLoaded", function() {
    var menuItems = document.querySelectorAll(".menu a");
    menuItems.forEach(function(item) {
        item.addEventListener("click", function(event) {
            event.preventDefault();
            var targetId = this.getAttribute("href").substring(1);
            var targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
document.querySelector(".menu").addEventListener("click", function() {
    this.classList.toggle("active");
});
