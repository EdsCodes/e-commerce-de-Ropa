
//----------------PAGINA: INICIA SESION------------------//

/*Idea a plasmar: al insertar los datos en el formulario de registro de mi tienda online, como lo son nombre, email, celular y fecha de nacimiento estos datos se almacenan en la memoria temporal y se imprimen a traves de console.log. En el caso de la fecha de nacimiento, se calcula con esta la edad del cliente, si es menor de 18 años le salta un alert indicandole que no se puede registrar por ser menor de edad, si se ingresa una fecha errada, le pide al cliente ingrese un dato valido, si es correcto el dato y tiene mas de 18 y menos de 99 años le permitira seguir y mediante aletoriedad le asignara uno de cuatro bonos o regalos de bienvenida*/

// ---Formulario de registro:

// Variables globales para contar los id de clientes registrados, sus email y contraseña de ingreso sesion:
var idCliente = [];
var email = [];
var contrasenaRegistro = [];
var validacionUsuario = false;
var opcionPremioSorp = 0;

//reseteo del formulario al final del registro de cada cliente
function resetFormulario() {
    document.querySelector('.formularioRegistro').reset();
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registrarBtn').addEventListener('click', function(event) {
        event.preventDefault();

        var nombre = document.querySelector('.nombreRegistro').value;
        email = document.querySelector('[name="mailRegistro"]').value;
        var telefono = document.querySelector('[name="phone"]').value;
        contrasenaRegistro = document.querySelector('[name="regPassword"]').value
        var genero = document.querySelector('[name="gender"]:checked').value;
        var fechaNacimiento = document.querySelector('[name="fechaNac"]').value;
        var pais = document.querySelector('[name="paisRegistro"]').value;
        var aceptaTerminos = document.querySelector('[name="terminos"]').checked;

        if (!aceptaTerminos) {
            alert("Debes aceptar los términos y condiciones para continuar.");
            return; // Detiene la ejecución si no se aceptan los términos
        }

        // Calcular edad del usuario
        var fechaNacUsuario = new Date(fechaNacimiento);
        var fechaActual = new Date();
        var edadUsuario = fechaActual.getFullYear() - fechaNacUsuario.getFullYear();

        // Validación Edad usuario
        if (isNaN(fechaNacUsuario.getTime()) || edadUsuario < 0) {
            alert("Por favor, ingresa una fecha de nacimiento válida.");
            console.log("Registro & id no válidos");
            validacionUsuario == false
            return;
        } else if (edadUsuario < 18) {
            alert("Lo sentimos, según la fecha ingresada, tienes " + edadUsuario + " años. Si eres mayor de edad revisa de nuevo los datos.");
            console.log("Registro & id no válidos");
            validacionUsuario == false
            return;
        } else if (edadUsuario >= 18 && edadUsuario <= 99) {
            idCliente++;
            console.log("<---- idCliente: " + idCliente + " ---->");
            console.log("Registro & id válidos");
            validacionUsuario == true
        } else {
            alert("Por favor, ingresa un dato válido");
            console.log("Registro & id no válidos");
            validacionUsuario == false
            return;
        }

        //validar el registro ok (true), y mediante una funcion de aletoriedad calcular uno de los 4 beneficios ofrecidos, mostrandolo en un alert en la pagina al cliente:
        function aleatorio(min, max){
            return Math.floor(Math.random() * (max-min+1) + min);
        }

        do {
            opcionPremioSorp = aleatorio(1,4)
            switch (opcionPremioSorp) {
                case 1:
                    alert("¡Bienvenid@! haz ganado un bono de bienvenida del 15% de descuento para tu primera compra.");
                    break;
                case 2:
                    alert("¡Bienvenid@! el envío de tu primera compra es totalmente gratuito.");
                    break;
                case 3:
                    alert("¡Bienvenid@! haz ganado un cupón único del 10% adicional para tu siguiente compra.");
                    break;
                case 4:
                    alert("¡Bienvenid@! para pedidos mayores a $200.000, incluiremos un fabuloso regalo sorpresa en tu paquete.");
                    break;
            }
            break;
        } while (validacionUsuario == true);

        // Mostrar los datos recopilados en el formulario (se que en la vida real no seria seguro, pero mientras aprendemos lo hago como ejercicio :) )
        console.log("Nombre: " + nombre);
        console.log("Email: " + email);
        console.log("Teléfono: " + telefono);
        console.log("Contraseña: " + contrasenaRegistro);
        console.log("Género: " + genero);
        console.log("Fecha de Nacimiento: " + fechaNacimiento);
        console.log("Edad: " + edadUsuario);
        console.log("País: " + pais);
        console.log("Acepta Términos: " + aceptaTerminos);
        console.log("Regalo obtenido: " + opcionPremioSorp);

        // Imprimo línea al final para separar cada registro en el console.log
        console.log("<----------------------------------------------->");
        
        resetFormulario();

        //Funcion del boton de borrar datos
        document.getElementById('borrarDatosBtn').addEventListener('click', resetFormulario);
    });

    // ---Formulario de Inicio de sesion:

    document.getElementById('botonLogin').addEventListener('click', function (event) {
        event.preventDefault();

        var emailUsuarioRegistrado = document.querySelector('[name="emailUsuarioRegistrado"]').value;
        var contrasena = document.querySelector('[class="password"]').value;

        if (email === emailUsuarioRegistrado  && contrasenaRegistro === contrasena) {
            console.log("el usuario registrado con el correo " + emailUsuarioRegistrado + " inicio sesión" );
        }else {
            console.log ("Por favor valida los datos ingresados");
        }

        console.log("<----------------------------------------------->");
    });
});




