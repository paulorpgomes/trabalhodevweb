const toggleButton = document.createElement("button");
toggleButton.innerText = "Modo Noturno";
toggleButton.style.position = "fixed";
toggleButton.style.bottom = "20px";
toggleButton.style.right = "20px";
toggleButton.style.padding = "10px 20px";
toggleButton.style.border = "none";
toggleButton.style.borderRadius = "5px";
toggleButton.style.cursor = "pointer";
toggleButton.style.backgroundColor = "#333";
toggleButton.style.color = "#fff";

document.body.appendChild(toggleButton);

function toggleNightMode() {
    document.body.classList.toggle("night-mode");

    if (document.body.classList.contains("night-mode")) {
        toggleButton.innerText = "Modo Claro";
        toggleButton.style.backgroundColor = "#fff";
        toggleButton.style.color = "#333";
    } else {
        toggleButton.innerText = "Modo Noturno";
        toggleButton.style.backgroundColor = "#333";
        toggleButton.style.color = "#fff";
    }
}

// Adiciona o evento de clique ao botão
toggleButton.addEventListener("click", toggleNightMode);
