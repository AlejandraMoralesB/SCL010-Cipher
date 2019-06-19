document.getElementById("secondary").style.display="none";//invisible
let offSets;

// creo una variable para guardar el valor del texto 
const btnEnter = document.getElementById("enter");
btnEnter.addEventListener("click", intoOffSet);


function intoOffSet(){ 
document.getElementById("main").style.display="none";//invisible
document.getElementById("secondary").style.display="block";//visible
offSets = document.getElementById("numberOffSet").value;
console.log(offSets);
}


let ciphertransf= "";

const btnEncode = document.getElementById("encrypted");
btnEncode.addEventListener("click",()=>{
  let textCipher;
  textCipher = document.getElementById("write").value.toUpperCase();
  offSets = parseInt(document.getElementById("numberOffSet").value);
  document.getElementById("answers").value = window.cipher.encode(textCipher, offSets);
  ciphertransf= document.getElementById("answers").value;
};

 
let decodetransf = "";

const btnDecode = document.getElementById("decoded");
btnDecode.addEventListener("click",()=>{
let textDecode;
textDecode= document.getElementById("write").value.toUpperCase();
offSets = parseInt(document.getElementById("numberOffSet").value);
document.getElementById("answers").value = window.cipher.decode(textDecode,offSets);
decodetransf = document.getElementById("answers").value;
}

// Funcion decifrar


//limpiar pagina 
const btnClear = document.getElementById("reset");
btnClear.addEventListener("click", deletetext );
function deletetext(){
document.getElementById("main").style.display="none";//invisible
document.getElementById("secondary").style.display="block";//visible
decodetransf="";
ciphertransf="";
document.getElementById("write").value="";
document.getElementById("answers").value="";
}
