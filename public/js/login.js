window.onload = function () {
    let formulario= document.querySelector("form.form-login");

    formulario.addEventListener("submit", function (e) {

        let errores= []

        let emailField= document.querySelector("input.email");

        if(emailField=="") {
            errores.push("Ingresa un email válido")
        } else if (emailField.value.lenght<8){
            errores.push("Ingresa un email válido")
        }

        let passwordField= document.querySelector("input.password");
        
        if(passwordField=="") {
            errores.push("Debes ingresar tu contraseña")
        } else if (passwordField.value.lenght<8){
            errores.push("Debes ingresar tu contraseña")
        }

        if (errores.length>0) {
            e.preventDefault();

            let ulErrores= document.querySelector("div.errores ul")

            for (let i=0; i<errores.length; i++) {
                ulErrores.innerHTML +- "<li>" + errores[i] + "</li>"
            }
        }
    })
}