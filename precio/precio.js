
//checkbox limitado
let contador = [0, 0, 0]; 
let maxi = 3;
function validar(check, grupo) {
   if (check.checked==true){
       contador[grupo]++;
       if (contador[grupo]>maxi) {
          check.checked=false; 
          contador[grupo]--;
       }
   } else {    
       contador[grupo]--;
   }
}

//sumar compra
let cantidad1kg = document.getElementById("cantidad1kg");
let totalprecio = document.getElementById("totalprecio");

cantidad1kg.addEventListener("input",function(){
  let numero = cantidad1kg.value;
  let calculo = numero * 2400;
  totalprecio.textContent = calculo;
});

// let cantidadmedio = document.getElementById("cantidadmedio");
// let totalmedio = document.getElementById("totalmedio");

// cantidadmedio.addEventListener("input",function(){
//   let numero = cantidadmedio.value;
//   let calculo = numero * 1500;
//   totalprecio.textContent = calculo;
// });

//total torta
let containertorta = document.getElementById('containertorta');
let seleccion = containertorta.querySelectorAll('input[type="checkbox"]');
let totaltorta = document.getElementById('totaltorta');
let suma = 0;
containertorta.addEventListener('change', function() {
  suma = 0;
  seleccion.forEach(function(checkbox) {
    if (checkbox.checked) {
      suma = suma + parseInt(checkbox.value);
    }
  });
  totaltorta.textContent = suma;
});

//listo
function enviar(event){
    event.preventDefault();
    let mensaje = document.getElementById("mensaje")
    mensaje.innerHTML= "Su pedido fue enviado!"
  }