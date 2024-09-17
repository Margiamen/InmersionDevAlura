let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');
let botonLimpiar = document.getElementById('limpiar');

const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@$%^*()_-+={[}]|;<>/?~¡¿€£¥§¶•¶";

function generar() {

    let numeroDigitado = parseInt(cantidad.value);
    console.log(numeroDigitado);

    if (numeroDigitado < 8) {
        alert("La cantidad de caraceres debe ser mayor a 8");
    }
    let password = '';
    for (let i = 0; i < numeroDigitado; i++) {
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);

        password += caracterAleatorio;
    }

    const fortaleza = evaluarFortaleza(password);
    const mensajeFortaleza = document.getElementById('mensajeFortaleza');
    mensajeFortaleza.textContent = `La fortaleza de la contraseña es: ${fortaleza}`;
     contrasena.value = password;



}

function evaluarFortaleza(contrasena) {
    const requisitos = {
        longitudMinima: 8,
        tieneMayuscula: /[A-Z]/.test(contrasena),
        tieneMinuscula: /[a-z]/.test(contrasena),
        tieneNumero: /[0-9]/.test(contrasena),
        tieneEspecial: /[^a-zA-Z0-9]/.test(contrasena)
    };

    let puntaje = 0;
    if (contrasena.length >= requisitos.longitudMinima) puntaje++;
    if (requisitos.tieneMayuscula) puntaje++;
    if (requisitos.tieneMinuscula) puntaje++;
    if (requisitos.tieneNumero) puntaje++;
    if (requisitos.tieneEspecial) puntaje++;

    if (puntaje <= 1) {
       return(" Fortaleza Baja");
    } else if (puntaje <= 2) {
       return ("Fortaleza Media");
    } else {
       return(" Fortaleza Alta") ;
    }
}


function limpiar(){
    console.log(cantidad);
    if(cantidad.value !=="" || contrasena.value !== "" ){
        cantidad.value ="";
        contrasena.value = "";
    }
}










