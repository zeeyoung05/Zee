function validar() {
 //ocultar feedback
 let feedback_name = document.getElementById("feedback-name");
 let feedback_pass = document.getElementById("feedback-pass");

 let password = document.getElementById("password");
 let password_confirn = document.getElementById("password_confirn");


 //variables
 let name = document.getElementById("name").value;

 if(name == "") {
    alert("Ingrese su nombre");
    feedback_name.innerHTML= "Debe ingresar su nombre, por favor";
    return false;
 }   

 if(password == "" && password_confirn == "") {
    alert("Contraseñas estas vacias");
    feedback_pass.innerHTML = "Debe de ingresar sus contraseñas, por favor";
    return false;
 }   
 
 if(password !== password_confirn) {
    alert("Contraseñas no coinciden");
    feedback_pass.innerHTML = "Debe de ingresar dos contraseñas iguales";
    return false;
 }   
}