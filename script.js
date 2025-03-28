document.addEventListener("DOMContentLoaded", function () {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    const navButton = document.getElementById("navButton");

    // Función para manejar el botón de scroll hacia arriba
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add("show");
        } else {
            scrollTopBtn.classList.remove("show");
        }
    });

    scrollTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Función para cambiar el texto y la acción del botón de navegación
    if (navButton) {
        if (window.location.pathname.includes("modulo7.html")) {
            navButton.textContent = "Volver a Módulo 5";
            navButton.addEventListener("click", () => {
                window.location.href = "index.html";
            });
        } else {
            navButton.textContent = "Ir a Módulo 7";
            navButton.addEventListener("click", () => {
                window.location.href = "modulo7.html";
            });
        }
    }
});

    // Función para abrir y cerrar las tarjetas
document.addEventListener("DOMContentLoaded", function () {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add("show");
        } else {
            scrollTopBtn.classList.remove("show");
        }
    });

    scrollTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});


    document.addEventListener("DOMContentLoaded", () => {
        // Verificar si el modo oscuro estaba activado en localStorage
        if (localStorage.getItem("dark-mode") === "enabled") {
            document.body.classList.add("dark-mode");
        }

        // Asegurar que el botón muestra el icono correcto
        updateDarkModeButton();

        // Código para que las tarjetas sean funcionales
        const cards = document.querySelectorAll('.card-header');
        cards.forEach(card => {
            card.addEventListener('click', () => {
                const body = card.nextElementSibling;
                if (body.style.display === 'block') {
                    body.style.display = 'none';
                } else {
                    document.querySelectorAll('.card-body').forEach(b => b.style.display = 'none');
                    body.style.display = 'block';
                }
            });
        });

        // Verificar en qué página estamos y actualizar el botón de navegación
        const navButton = document.querySelector(".navigation-button");
        if (navButton) {
            if (window.location.pathname.includes("modulo7.html")) {
                navButton.textContent = "Volver a Módulo 5";
                navButton.addEventListener("click", () => {
                    window.location.href = "index.html";
                });
            } else {
                navButton.textContent = "Ir a Módulo 7";
                navButton.addEventListener("click", () => {
                    window.location.href = "modulo7.html";
                });
            }
        }
    });

    function toggleDarkMode() {
        document.body.classList.toggle("dark-mode");

        // Guardar estado en localStorage
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
        } else {
            localStorage.setItem("dark-mode", "disabled");
        }

        updateDarkModeButton();
    }

    function updateDarkModeButton() {
        const button = document.querySelector(".toggle-button");
        const icon = button.querySelector("i");

        if (document.body.classList.contains("dark-mode")) {
            button.innerHTML = '<i class="fa-solid fa-sun"></i> Modo Claro';
        } else {
            button.innerHTML = '<i class="fa-solid fa-moon"></i> Modo Oscuro';
        }
    }
