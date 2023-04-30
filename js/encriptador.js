//Variables globales
const entradaTexto = document.getElementById("input-texto");
const salidaTexto = document.getElementById("output-texto"); 
const botonEncriptar = document.getElementById("encriptar");
const botonDesencriptar = document.getElementById("desencriptar");
const file = document.getElementById("input-file");
const botonCopiar = document.getElementById("copiar-to-clipboard");
const botonDescargar = document.getElementById("descargar-as-file");

//Verificar texto
function verificarTexto(texto){
    //Verificar por mayusculas o caracteres especiales
    const mayusculas = new RegExp(/[A-Z]/gm);
    const especiales = new RegExp(/[^a-z\d\s]/gm);
    if(texto.match(mayusculas)){
        return "Mayusculas encontradas";
    }else if(texto.match(especiales)){
        return "Contiene caracteres especiales";
    }else if(texto.length == 0){//Texto vacio
        return "No ha ingresado ningun texto";
    }else{
        return true;
    }
}
//Encriptar texto 
function encriptar(texto){
    let result =  texto.
    replaceAll('e','enter').
    replaceAll('i', 'imes').
    replaceAll('a', 'ai').
    replaceAll('o', 'ober').
    replaceAll('u', 'ufat');
    return result;
}
//Desencriptar texto
function desencriptar(texto){
    let result = texto.
    replaceAll('ufat', 'u').
    replaceAll('ober', 'o').
    replaceAll('ai', 'a').
    replaceAll('imes', 'i').
    replaceAll('enter', 'e');
    return result;
}
//Encriptar texto de input type text
function encriptarTexto(){
    //Tomar valor de input-texto
    const texto = entradaTexto.value;
    //Verificar el texto antes de encriptar
    const verificacion = verificarTexto(texto);
    if(verificacion == true){//Texto verificado y no vacio
        let resultado = '';
        resultado = encriptar(texto);
        salidaTexto.innerText = resultado;
        console.log(resultado);
    }else{
        console.log(verificacion);
    }        
}
//Cargar contenido de input type file en el input-texto
function cargarArchivo(evento){
    const file = evento.target.files[0];
    console.log(file);
    const fileReader = new FileReader();
    fileReader.readAsText(file);
    fileReader.onload = function(event) {
        entradaTexto.value = fileReader.result;
        console.log(fileReader.result);
    };
}
//Desencriptar texto
function desencriptarTexto(){
    //Tomar valor de input-texto
    const texto = entradaTexto.value;
    //Verificar el texto antes de encriptar
    const verificacion = verificarTexto(texto);
    if(verificacion == true){//Texto verificado y no vacio
        let resultado = '';
        resultado = desencriptar(texto);
        console.log(resultado);
        salidaTexto.innerText = resultado;
    }else{
        //Generar alerta o mensaje de advertencia
        console.log(verificacion);
    }
}
//Copiar a papelera
function copiarResultado(){
    const texto = salidaTexto.value;
    if(texto.length == 0){
        console.log("Nada que copiar todavia...")
    }else{
        navigator.clipboard.writeText(texto);
        console.log("Copiando a la papelera");
    }    
}
//Descargar contenido del resultado como txt
function descargarArchivo(evento){
    const texto = salidaTexto.value;
    if(texto.length == 0){
        console.log("Nada que descargar todavia...")
    }else{
        try{
            const enlace = document.createElement("a");
            const archivo = new Blob( [texto], { type: 'text/plain' });
            const url = URL.createObjectURL(archivo);
            console.log("Archivo creado");
            enlace.href = url;
            enlace.download = "archivo.txt";
            enlace.click();           
            console.log("Descargando archivo...");
            URL.revokeObjectURL(url);
        }catch(error){
            console.log("Error intentando descargar el archivo...", error);
        }
    }   
}

//Onclick events
botonEncriptar.onclick = encriptarTexto;
botonDesencriptar.onclick = desencriptarTexto;
botonCopiar.onclick = copiarResultado;
botonDescargar.onclick = descargarArchivo;
//Onchange events
file.onchange = cargarArchivo;
