// =====================================================================
// UT03 - Actividad evaluable: Mi ficha personal
// Alumno/a: ...........................................
// Para mostrar resultados en la página usa mostrar("<p>texto</p>").
// =====================================================================

// Objeto con los datos de la ficha (ver apartado 0 del enunciado).
// Se completa en los apartados 1, 2 y 3 y lo usan los apartados 4 y 5.
// Se declara con var (no con let ni const) para que la ventana hija
// pueda acceder a ella con window.opener.ficha.
var ficha = {
  nombre: "",
  usuario: "",
  textoNacimiento: "",
  contrasena: "",
  edad: 0,

};

// 1. STRING ------------------------------------------------------------
function analizarNombre() {
  mostrar("<h2>1. Nombre</h2>");
  let nombre = "";

  //1.1 y 1.2
  while(nombre == "" || nombre == null || nombre == undefined){
    nombre = prompt("Indica tu nombre");
  }

  nombreMinuscula = nombre.toLowerCase().trim();
  let partesNombre = nombreMinuscula.split(" ");
  
  for(let i = 0; i < partesNombre.length; i++){
    let letra = partesNombre[i].substring(0,1);
    let resto = partesNombre[i].substring(1);
    ficha.nombre += letra.toUpperCase() + resto + " ";
  }

  //1.3
  partesNombre = ficha.nombre.split(" ");
  let iniciales = "";
  let cont = 0;
  let nombreReves = "";

  for(let i = 0; i < partesNombre.length; i++){
      iniciales += partesNombre[i].substring(0,1);
  }

  for(let i = 0; i < ficha.nombre.length; i++){
    if(ficha.nombre[i] != " "){cont++};
  }



  for (let i = partesNombre.length - 1; i >= 0; i--) {
    let palabra = partesNombre[i];
    
    for (let j = palabra.length - 1; j >= 0; j--) {
      nombreReves += palabra[j];
    }

    if (i > 0) {
      nombreReves += " ";
  }
} 

  mostrar(`<p>Iniciales: ${iniciales}</p>`);
  mostrar(`<p>Numero de letras: ${cont}</p>`);
  mostrar(`<p>Nombre al reves: ${nombreReves}</p>`);

  //1.4
  let dni = "";
  while(dni == null || dni == "" || dni == undefined){
    dni = prompt("Indica tu dni completo");
  }

  let primerApellido = "";
  if(partesNombre[1].length >= 4){
    primerApellido = partesNombre[1].substring(0,3);
  } else {
    primerApellido = partesNombre[1].substring(0,-1);
    primerApellido.padEnd(4,"x");
  }
  
  let inicialNombre = partesNombre[0].substring(0,1).toLowerCase();
  let digitosDNI = dni.slice(-4, -1);
  ficha.usuario = primerApellido.toLowerCase() + inicialNombre + digitosDNI;

  mostrar(`<p>Nombre de usuario: ${ficha.usuario}</p>`);
}

// 2. NUMBER Y MATH -----------------------------------------------------
function analizarNumeros() {
  mostrar("<h2>2. Números</h2>");
  let date = "";
  while (date == "" || date == null || date == undefined) {
    date = prompt("Indica tu fecha de nacimiento en formato (dd/mm/aaaa)");
  }

  ficha.textoNacimiento = date;
  let dateOctal = "";
  let dateBinario = "";
  let dateHexadecimal = "";

  let partesDate = ficha.textoNacimiento.split("/");

  for (let i = 0; i < partesDate.length; i++) {
  
    let numero = parseInt(partesDate[i], 10);
    
    let separador = (i < partesDate.length - 1) ? "/" : "";

    dateOctal += numero.toString(8) + separador;
    dateBinario += numero.toString(2) + separador;
    dateHexadecimal += numero.toString(16) + separador;
  }

  
  let comprobacionBin = dateBinario.split('/').map(parte => parseInt(parte, 2)).join('/');
  let comprobacionHex = dateHexadecimal.split('/').map(parte => parseInt(parte, 16)).join('/');

  mostrar(`<p> Comprobar binario (base 10): ${comprobacionBin}</p>`);
  mostrar(`<p> Comprobar hexadecimal (base 10): ${comprobacionHex}</p>`);
  mostrar(`<p> Fecha octal: ${dateOctal}</p>`);
  mostrar(`<p> Fecha binario: ${dateBinario}</p>`);
  mostrar(`<p> Fecha hexadecimal: ${dateHexadecimal}</p>`);


let longitud = ficha.nombre.length;
if (longitud < 8) {
  longitud = 8;
}

const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

let contrasena = "";
for (let i = 0; i < longitud; i++) {
  let indice = Math.floor(Math.random() * caracteres.length);
  contrasena += caracteres.charAt(indice);
}

ficha.contrasena = contrasena;

mostrar(`<p>Contraseña: ${ficha.contrasena}</p>`);
}

// 3. DATE --------------------------------------------------------------
function analizarFechas() {
  mostrar("<h2>3. Fechas</h2>");
  const fecha = ficha.textoNacimiento.split("/");
  const año = parseInt(fecha[2], 10);
  const mesIngresado = parseInt(fecha[1], 10); 
  const dia = parseInt(fecha[0], 10);

  const mesIndex = mesIngresado - 1; 
  const fechaNacimiento = new Date(año, mesIndex, dia);
 
  if (
    fechaNacimiento.getFullYear() !== año ||
    fechaNacimiento.getMonth() !== mesIndex ||
    fechaNacimiento.getDate() !== dia ||
    fechaNacimiento.getTime() > Date.now()
  ) {
    console.log("fecha incorrecta");
  } else {
    console.log("fecha correcta");
  }

  let fechaHoy = new Date(Date.now());
  ficha.edad = fechaHoy.getFullYear() - año;
  mostrar(`<p>Edad: ${ficha.edad}</p>`);
}

// 4. VENTANAS ----------------------------------------------------------
let ventanaHija = null;

function abrirVentana() {
  mostrar("<h2>4. Ventanas</h2>");
  // Tu código aquí
}

// La ventana hija llama a esta función con window.opener.recibirMensaje(texto)
function recibirMensaje(texto) {
  // Tu código aquí
}

// 5. ALMACENAMIENTO ----------------------------------------------------
function guardarFicha() {
  mostrar("<h2>5. Guardar ficha</h2>");
  // Tu código aquí
}
