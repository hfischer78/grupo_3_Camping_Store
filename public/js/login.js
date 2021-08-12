window.onload = function () {
    let formulario= document.querySelector("#form-login");

    formulario.addEventListener("submit", function(event) {

        let errores = []

        let emailField = document.querySelector("#test-email");
        let emailFieldError = document.querySelector("#email-error");

        if (emailField.value == "") {
            errores.push("Ingresa un email válido")
            emailFieldError.innerHTML = "El campo email no puede estar vacio"
        } else {
            emailFieldError.innerHTML = ""
        }

        let passwordField = document.querySelector("#test-password");
        
        if (passwordField.value == "") {
            errores.push("Debes ingresar tu contraseña")
            let passwordFieldError = document.querySelector("#password-error");
            passwordFieldError.innerHTML = 'El campo password no puede estar vacio'
        } else {
            passwordFieldError.innerHTML = ""
        }

        if (errores.length > 0) {
            event.preventDefault();

            let ulErrores = document.querySelector(".errores ul")

            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML +- "<li>" + errores[i] + "</li>"
            }
        } else {
            formulario.submit();
        }
    })
}