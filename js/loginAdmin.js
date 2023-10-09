document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault(); 

    // Obtenemos los valores del usuario y la contraseña
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Comprobamos si los valores son correctos (esto debe ser reemplazado por una lógica de autenticación real)
    if (username === "admin" && password === "12345") {
        alert("Inicio de sesión exitoso");
        window.location.href = "panelAdmin.html"; 
    } else {
        alert("Usuario o contraseña incorrectas. Inténtelo de nuevo.");
    }
});

