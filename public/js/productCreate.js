window.onload = function () {
    let formulario= document.querySelector("#create-form");

    formulario.addEventListener("submit", function(event) {

        let errores = []

        // Error nombre del producto
        let nameField = document.querySelector("#name-field");
        let nameFieldError = document.querySelector("#name-error");

        if (nameField.value.length < 5) {
            event.preventDefault();
            errores.push("Ingresa un nombre de mas de 5 caracteres")
            nameFieldError.innerHTML = "El nombre del producto debe tener más de 5 caracteres"
        } else {
            nameFieldError.innerHTML = ""
        }

        // Error descripcion
        let descriptionField = document.querySelector("#description-field");
        
        if (descriptionField.value.length < 20) {
            event.preventDefault();
            errores.push("Ingresa una descripcion de mas de 20 caracteres")
            let descriptionFieldError = document.querySelector("#description-error");
            descriptionFieldError.innerHTML = "La descripción del producto debe tener más de 20 caracteres"
        } else {
            descriptionFieldError.innerHTML = ""
        }
        
        // Error extension de la imagen del producto
        let fileField= document.querySelector("#file-field")
        let allowedFiles= ['.jpg', '.jpeg', '.png', '.gif']
        let fileExtension= path.extname(file.originalname);

        // function getFileExtension(filename) {
        //     return filename.substring(filename.lastIndexOf('.')+1, filename.length) || filename;
        }
        
        // Errores
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