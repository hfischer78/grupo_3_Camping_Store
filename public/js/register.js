window.onload = function () {
    let registerForm= document.querySelector("#form-registro");

    registerForm.addEventListener("submit", function(e) {

        let errores = []

    //Validación nombre Register
        let firstNameField = document.querySelector("#first_name");
        let firstNameFieldError = document.querySelector("#first-name-error");
       
        if(firstNameField.value == ''){
           e.preventDefault();
           errores.push('Debes colocar un nombre') 
           firstNameFieldError.innerHTML = 'Debes colocar un nombre'                
        } else if (firstNameField.value.length < 2){
            e.preventDefault();
            errores.push('Debes ingresar un nombre con al menos 2 caracteres')
            firstNameFieldError.innerHTML = 'Debes ingresar un nombre con al menos 2 caracteres'  
        } else {
            firstNameFieldError.innerHTML = "" 
        }            
        
    //Validación apellido Register
        let lastNameField = document.querySelector('#last_name');
        let lastNameFieldError = document.querySelector("#last-name-error");
        
        if(lastNameField.value == ''){
            e.preventDefault();
            errores.push('Debes colocar un apellido')
            lastNameFieldError.innerHTML = 'Debes colocar un apellido'           
        } else if (lastNameField.value.length < 2){
            e.preventDefault();
            errores.push('Debes ingresar un apellido con al menos 2 caracteres')
            lastNameFieldError.innerHTML = 'Debes ingresar un apellido con al menos 2 caracteres'  
        } else {
            lastNameFieldError.innerHTML = "" 
        }             

    //Validación email Register
        let emailField = document.querySelector('#email');
        let emailFieldError = document.querySelector("#email-error");
        
        if (emailField.value == "") {
            e.preventDefault();
            errores.push("Ingresa un email válido")
            emailFieldError.innerHTML = "El campo email no puede estar vacio"
        } else {
            emailFieldError.innerHTML = ""
        }

    //Validación contraseña Register
        let passwordField = document.querySelector("#password");
        let passwordFieldError = document.querySelector("#password-error");
        
        if (passwordField.value == "") {
            e.preventDefault();
            errores.push("Debes ingresar una contraseña")            
            passwordFieldError.innerHTML = 'El campo de contraseña no puede estar vacio'
        }  else if (lastNameField.value.length < 2){
            e.preventDefault();
            errores.push('Debes ingresar una contraseña con al menos 8 caracteres')
            passwordFieldError.innerHTML = 'Debes ingresar una contraseña con al menos 8 caracteres'  
        }  else {
            passwordFieldError.innerHTML = ""
        }
     

    //Validación Imagen Register
        let fileField= document.querySelector("#avatar")
        let allowedFiles= ['jpg', 'jpeg', 'png', 'gif']
        let fileExtension = getFileExtension(fileField.value)
        let fileFieldError= document.querySelector("#image-error")

        if (!allowedFiles.includes(fileExtension.toLowerCase())) {
            e.preventDefault();
            errores.push("Ingresa una extensión válida")
            fileFieldError.innerHTML = "Selecciona una imagen con una extensión válida (jpg, jpeg, png, gif)"
        } else {
            fileFieldError.innerHTML = ""
        }


        if (errores.length > 0) {
            e.preventDefault();

        } else {
            registerForm.submit();
        }    
    })
}