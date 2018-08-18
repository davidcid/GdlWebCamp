(function() {
    "use strict";
    
    var regalo = document.querySelector("#regalo");
    
    document.addEventListener('DOMContentLoaded', function(){
        
        // Campos datos usuarios
        var nombre = document.querySelector("#nombre");
        var apellido = document.querySelector("#apellido");
        var email = document.querySelector("#email");
        
        // Campos pases
        var pase_dia = document.querySelector("#pase_dia");
        var pase_dosdias = document.querySelector("#pase_dosdias");
        var pase_completo = document.querySelector("#pase_completo");
        
        //Botones y divs
        var calcular = document.querySelector("#calcular");
        var errorDiv = document.querySelector("#error");
        var botonRegistro = document.querySelector("#btnRegistro");
        var resultado = document.querySelector("#lista-productos");
        
        
        
        calcular.addEventListener('click', calcularMontos);
        
        
        
        
        
        function calcularMontos(event){
            event.preventDefault();
            if(regalo.value === '') {
                alert("Debes elegir un regalo");
                regalo.focus();
            } else {
                var boletosDia = pase_dia.value,
                    boletos2Dias = pase_dosdias.value,
                    boletoCompleto = pase_completo.value;
                
                var totalPagar = (boletosDia * 30) + (boletos2Dias * 45) + (boletoCompleto * 50);
                
                console.log(totalPagar);
                
            }
        }
        
        
        
        
        
        
        
    }); // DOM CONTENT LOADED
})();