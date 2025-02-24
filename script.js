// script.js

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".lazy");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src; // Carrega a imagem real
                img.classList.remove("lazy"); // Remove a classe lazy após carregar
                observer.unobserve(img); // Para de observar a imagem
            }
        });
    });

    images.forEach((img) => {
        img.dataset.src = img.src; // Salva o caminho da imagem original
        img.src = ""; // Limpa o src inicial
        observer.observe(img); // Observa a imagem
    });
});

// Validação do formulário de contato
document.addEventListener("submit", function (event) {
    const form = event.target;

    // Verifica se todos os campos obrigatórios estão preenchidos
    const requiredFields = form.querySelectorAll("[required]");
    let isValid = true;

    requiredFields.forEach((field) => {
        if (!field.value.trim()) {
            isValid = false;
            field.style.borderColor = "red"; // Destaca o campo inválido
        } else {
            field.style.borderColor = ""; // Remove a borda vermelha
        }
    });

    if (!isValid) {
        event.preventDefault(); // Impede o envio do formulário
        alert("Por favor, preencha todos os campos obrigatórios.");
    }
});

// Adiciona animações suaves ao scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Ajusta o scroll para evitar sobreposição do cabeçalho
                behavior: "smooth",
            });
        }
    });
});