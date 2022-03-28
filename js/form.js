const submit = document.querySelector("#submit");
submit.disabled = true
const form = document.querySelector("#contact");

form.addEventListener("change", ()=>{
    if (form.name.value.trim() !== "" && 
        form.topic.value.trim() !== "" &&
        form.email.value.trim() !== "" && 
        form.message.value.trim() !== "" ) {
        submit.disabled = false; 
    } else {
        submit.disabled = true;
    }
})
submit.addEventListener("click",(e)=>{
    e.preventDefault();
    const user = catchUserData(form);
    var errors = validateUser(user);
    
    if(errors.length > 0){
        showError(errors);
    }

    function catchUserData(form){
        var user = {
            name: form.name.value,
            email: form.email.value,
            topic: form.topic.value,
            message: form.message.value
        }
        return user; 
    }

    function validateUser(user){
        var errors = []
        var emailRegex = /\S+@\S+\.\S+/;

        if(user.name.length == 0 || user.name.trim() === ""){
            errors.push("El nombre no puede estar vacío");
        }
        if(user.name.length > 50){
            errors.push("El nombre no puede tener mas de 50 caracteres");
        }
        if(user.email.length == 0 || user.email.trim() === ""){
            errors.push("El email no puede estar vacío");
        }
        if (!emailRegex.test(user.email)) {
            errors.push("Ingrese un correo valido")
        }
        if(user.topic.length == 0 || user.topic.trim() === ""){
            errors.push("La tema no puede estar vacía");
        }
        if(user.topic.length > 50){
            errors.push("El tema no puede tener mas de 50 caracteres");
        }
        if(user.message.length == 0 || user.message.trim() === ""){
            errors.push("El mensaje no puede estar vacío");
        }
        if(user.message.length > 300){
            errors.push("El mensaje no puede tener mas de 300 caracteres");
        }
        return errors; 
    }

    function showError(errors){
        var ul = document.querySelector("#messageError");
        ul.innerHTML = ""
        errors.forEach((error)=>{
            var li = document.createElement("li");
            li.textContent = error;
            ul.appendChild(li);
        });
    }
});