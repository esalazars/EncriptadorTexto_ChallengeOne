//
//Encriptar texto 
function encriptar(texto){
    let result =  texto.
    replace('e','enter').
    replace('i', 'imes').
    replace('a', 'ai').
    replace('o', 'ober').
    replace('u', 'ufat');
    return result;
}
//Desencriptar texto
function desencriptar(texto){
    let result = texto.
    replace('ufat', 'u').
    replace('ober', 'o').
    replace('ai', 'a').
    replace('imes', 'i').
    replace('enter', 'e');
    return result;
}
//Encriptar si es input type text
function encriptarTexto(){
    const texto = document.getElementById("input-texto").value;
    const textArea = document.getElementById("output-texto");
    let resultado = '';
    if(texto){
        resultado = encriptar(texto);
        textArea.innerText = resultado;
        console.log(resultado);
    }else{
        console.log("No ha ingresado ningun texto")
    }
}
//Encriptar si es input type file
function encriptarArchivo(evento){
    const file = evento.target.files[0];
    console.log(file);
    const fileReader = new FileReader();
    fileReader.readAsText(file);
    fileReader.onload = function(event) {
        console.log(fileReader.result);
    };
}

function desencriptarTexto(){
    const texto = document.getElementById("input-texto").value;
    const textArea = document.getElementById("output-texto");
    let resultado = '';
    if(texto){
        resultado = desencriptar(texto);
        console.log(resultado);
        textArea.innerText = resultado;
    }else{
        //Generar alerta o mensaje de advertencia
        console.log("No ha ingresado ningun texto");
    }
    console.log(resultado);
}

const botonEncriptar = document.getElementById("encriptar");
const botonDesencriptar = document.getElementById("desencriptar");
const file = document.getElementById("input-file");

botonEncriptar.onclick = encriptarTexto;
botonDesencriptar.onclick = desencriptarTexto;
file.onchange = encriptarArchivo;
