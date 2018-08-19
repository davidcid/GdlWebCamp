(function () {
    "use strict";
    
    var regalo = document.querySelector("#regalo");
    
    document.addEventListener('DOMContentLoaded', function () {
        
        var map = L.map('map').setView([20.674781, -103.38749], 17);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        
        L.marker([20.674781, -103.38749]).addTo(map)
            .bindPopup('GDLWebCamp 2018<br> Boletos ya disponibles')
            .openPopup();
        
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
        var lista_productos = document.querySelector("#lista-productos");
        var suma = document.querySelector("#suma-total");
        
        
        // Extras
        
        var camisas = document.querySelector("#camisa_evento");
        var etiquetas = document.querySelector("#etiquetas");
        

        
        
        calcular.addEventListener('click', calcularMontos);
        
        pase_dia.addEventListener('blur', mostrarDias);
        pase_dosdias.addEventListener('blur', mostrarDias);
        pase_completo.addEventListener('blur', mostrarDias);
        
        nombre.addEventListener('blur', validarCampos);
        apellido.addEventListener('blur', validarCampos);
        email.addEventListener('blur', validarCampos);
        email.addEventListener('blur', validarMail);
        
                
        function validarCampos () {
            if(this.value == '') {
                errorDiv.style.display = 'block';
                errorDiv.innerHTML = "este campo es obligatorio";
                this.style.border = '1px solid red';
                errorDiv.style.border = '1px solid red';
            } else {
                errorDiv.style.display = 'none';
                this.style.border = '1px solid #cccccc';
            }
        }
        
        function validarMail() {
            if(this.value.indexOf("@") > -1) {
                errorDiv.style.display = 'none';
                this.style.border = '1px solid #cccccc';
            } else {
                errorDiv.style.display = 'block';
                errorDiv.innerHTML = "debe tener al menos una @";
                this.style.border = '1px solid red';
                errorDiv.style.border = '1px solid red';
            }
        }
            
        function calcularMontos(event){
            event.preventDefault();
            if(regalo.value === '') {
                alert("Debes elegir un regalo");
                regalo.focus();
            } else {
                var boletosDia = parseInt(pase_dia.value, 10) || 0,
                    boletos2Dias = parseInt(pase_dosdias.value, 10) || 0,
                    boletoCompleto = parseInt(pase_completo.value, 10) || 0,
                    cantCamisas = parseInt(camisas.value, 10) || 0,
                    cantEtiquetas = parseInt(etiquetas.value, 10) || 0;
                
                var totalPagar = (boletosDia * 30) + (boletos2Dias * 45) + (boletoCompleto * 50) + (cantCamisas * 10 * 0.93) + (cantEtiquetas * 2);
                
                var listadoProductos = [];
                
                if(boletosDia >=1) {
                    listadoProductos.push(boletosDia + ' Pases por día');
                }
                
                if(boletos2Dias >=1) {
                    listadoProductos.push(boletos2Dias + ' Pases por 2 días');
                }
                if(boletoCompleto >=1) {
                    listadoProductos.push(boletoCompleto + ' Pases completos');
                }
                if(cantCamisas >=1) {
                    listadoProductos.push(cantCamisas + ' Camisas');
                }
                if(cantEtiquetas >=1) {
                    listadoProductos.push(cantEtiquetas + ' Etiquetas');
                }
                
                var resultado = '';
                
                lista_productos.style.display="block";
                for(var i = 0; i<listadoProductos.length; i++) {
                    lista_productos.innerHTML += listadoProductos[i] + '<br/>';
                }
                
                suma.innerHTML = "$ " + totalPagar.toFixed(2);
            }
        }
        
        function mostrarDias() {
            var boletosDia = parseInt(pase_dia.value, 10) || 0,
                boletos2Dias = parseInt(pase_dosdias.value, 10) || 0,
                boletoCompleto = parseInt(pase_completo.value, 10) || 0;
            
            var diasElegidos = [] ;
            
            if(boletosDia > 0) {
                diasElegidos.push('viernes');
            }
            if(boletos2Dias > 0) {
                diasElegidos.push('viernes','sabado');
            }
            if(boletoCompleto > 0) {
                diasElegidos.push('viernes','sabado','domingo');
            }
            
            
            for(var i=0; i<diasElegidos.length; i++) {
                document.getElementById(diasElegidos[i]).style.display = 'block';
            }
            
        }
        
        
        
    }); // DOM CONTENT LOADED
})();

$(function() {
    
    // Programa de Conferencias
    $('.programa-evento .info-curso:first').show();
    $('.menu-programa a:first').addClass('activo');
    
    $('.menu-programa a').on('click', function() {
        $('.menu-programa a').removeClass('activo');
        $(this).addClass('activo');
        $('.ocultar').hide();
        var enlace = $(this).attr('href');
        $(enlace).fadeIn(1000);
        return false;
    });
    
    // Anmiaciones para los números
    $('.resumen-evento li:nth-child(1) p').animateNumber({number: 6}, 1200);
    $('.resumen-evento li:nth-child(2) p').animateNumber({number: 15}, 1200);
    $('.resumen-evento li:nth-child(3) p').animateNumber({number: 3}, 1500);
    $('.resumen-evento li:nth-child(4) p').animateNumber({number: 9}, 1500);
    
    // Cuenta regresiva
    $('.cuenta-regresiva').countdown('2019/01/20 09:00:00', function(event) {
        $('#dias').html(event.strftime('%D'));
        $('#horas').html(event.strftime('%H'));
        $('#minutos').html(event.strftime('%M'));
        $('#segundos').html(event.strftime('%S'));
    });
  
});


