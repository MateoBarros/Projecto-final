
let onSubmit= (Formulario) => { 
    console.log( "El usuario " + Formulario.target.Nombre.value + " con el email " + Formulario.target.Email.value + " con el telefono "+ Formulario.target.Telefono.value + " y el asunto " + Formulario.target.Asunto.value +  " quiere hablar sobre el asunto " + Formulario.target.Mensaje.value)
    Formulario.preventDefault();
  };

const form = document.getElementById("form");
form.addEventListener("submit", onSubmit);

