const favicon = document.getElementById("favicon");

// Quando o usuário sai da aba
window.addEventListener("blur", () => {
    favicon.href = "./images/logo-white.png"; // ícone alternativo
});

// Quando o usuário volta pra aba
window.addEventListener("focus", () => {
    favicon.href = "./images/logo.png"; // ícone original
});