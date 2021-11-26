const num1 = document.querySelector("#numero1")
const num2 = document.querySelector("#numero2")
const resultado = document.querySelector('#resultado')




$(document).ready(function() {
    $("#formulario").bind("submit", function() {

        var btnEnviar = $("#btnEnviar");
        $.ajax({
            type: $(this).attr("method"),
            url: $(this).attr("action"),
            data: $(this).serialize(),
            beforeSend: function() {

                btnEnviar.val("Enviando");
                btnEnviar.attr("disabled", "disabled");
            },
            complete: function(data) {

                btnEnviar.val("Enviar formulario");
                btnEnviar.removeAttr("disabled");
            },
            success: function(data) {

                $(".respuesta").html(data);
            },
            error: function(data) {

                alert("Problemas al tratar de enviar el formulario");
            }
        });

        return false;
    });
});



function guardarDatos() {
    localStorage.nombre = document.getElementById("nombre").value;
    localStorage.password = document.getElementById("password").value;
}

function recuperarDatos() {
    if ((localStorage.nombre != undefined) && (localStorage.password != undefined)) {
        document.getElementById("datos").innerHTML = "Nombre: " + localStorage.nombre + "<br/> Password: " + localStorage.password;
    } else {
        document.getElementById("datos").innerHTML = "No has introducido tu nombre y tu password";
    }
}


class Calculadora {
    constructor(numero1, numero2) {
        this.numero1 = Number(numero1),
            this.numero2 = Number(numero2)
    }
    multiplicar() {
        return this.numero1 * this.numero2

    }
    dividir() {
        if (numero2 != 0) { return this.numero1 / this.numero2 } else { alert('no se puede dividir por 0') }
    }
    sumar() {
        return this.numero1 + this.numero2
    }
    restar() {
        return this.numero1 - this.numero2
    }
}

var inicio = true;

$(document).ready(function() {

    $("#boton").click(function() {
        if (inicio) {
            $("#Cuadrado").css({ "background-color": "#FF622C", "border-color": "#2980b9" });
            inicio = false;
        } else {
            $("#Cuadrado").css({ "background-color": "#2980b9", "border-color": "#FF622C" });
            inicio = true;
        }
    });
});

$(document).ready(function() {
    $("#ver_ocultar").click(function() {
        if ($(this).hasClass('visualizar')) {
            $(this).removeClass('visualizar');
            $(this).html('Ocultar texto');
            $("#caja").fadeIn(500);
        } else {
            $(this).addClass('visualizar');
            $(this).html('Ver texto');
            $("#caja").fadeOut(500);
        }
    });
});

var boton1 = document.getElementById('op1');
boton1.addEventListener("click", (e) => {
    e.preventDefault()
    let calcular = new Calculadora(num1.value, num2.value)
    resultado.textContent = `El resultado de la suma es ${calcular.sumar()}`
    resultado.style.color = "red";
});
var boton2 = document.getElementById('op2');
boton2.addEventListener("click", (e) => {
    e.preventDefault()
    let calcular = new Calculadora(num1.value, num2.value)
    resultado.textContent = `El resultado de la resta es ${calcular.restar()}`
    resultado.style.color = "red";
});
var boton3 = document.getElementById('op3');
boton3.addEventListener("click", (e) => {
    e.preventDefault()
    let calcular = new Calculadora(num1.value, num2.value)
    resultado.textContent = `El resultado de la division es ${calcular.dividir()}`
    resultado.style.color = "red";
});
var boton4 = document.getElementById('op4');
boton4.addEventListener("click", (e) => {
    e.preventDefault()
    let calcular = new Calculadora(num1.value, num2.value)
    resultado.textContent = `El resultado de la multiplicacion es ${calcular.multiplicar()}`
    resultado.style.color = "red";
});