window.onload = function () {
    let formulario= document.querySelector("#form-login");

    formulario.addEventListener("submit", function(event) {

        let errores= []

        let emailField= document.querySelector("#test-email");

        if(emailField.value=="") {
            errores.push("Ingresa un email válido")
            // emailField.innerHTML = "El campo email no puede estar vacio"
        }
        //  else if (emailField.value.lenght<8){
        //     errores.push("Ingresa un email válido")
        // }

        let passwordField= document.querySelector("#test-password");
        
        if(passwordField.value=="") {
            errores.push("Debes ingresar tu contraseña")
            // emailField.innerHTML = "El campo password no puede estar vacio"
        } else if (passwordField.value.length<8){
            errores.push("Debes ingresar tu contraseña")
        }

        if (errores.length>0) {
            event.preventDefault();

            let ulErrores= document.querySelector(".errores ul")

            for (let i=0; i<errores.length; i++) {
                ulErrores.innerHTML +- "<li>" + errores[i] + "</li>"
            }
        } else {
            formulario.submit();
        }
    })
}