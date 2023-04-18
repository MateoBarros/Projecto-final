//checkbox limitado

var contador = [0, 0, 0]; 
var maxi = 3;
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
function total() {
    try {
    let cantidad = parseInt(document.getElementById("cantidad").value )
    
    document.getElementById("totalprecio").value = cantidad * 2400
        
    } catch (e) {}
    }