window.cipher = {
  encode: (textCipher , offSets) => {
    let ciphertransf ="";
    let ecuation="";
    for(let i = 0; i < textCipher.length; i++) {
    //console.log (textCipher[i]);(posicion de las letras)
     let transformText= textCipher[i].charCodeAt();
      //console.log(transformText);
      //console.log("Caracter a transformar: " + transformText + " Valor ascii: " + textCipher[i]);
      //codigo Mayuscula
      if (transformText  >= 65 && transformText <= 90) {
      //console.log("codigo Mayuscula");
      ecuation=(transformText- 65 + offSets) % 26 + 65;
      }
      //espacio 
      else if(transformText >= 32 && transformText <=  32) {
     ecuation=(transformText- 32 + offSets) % 1 + 32;
    }
      // Cifrado con minúsculas.
      else if( transformText >= 97 && transformText <= 122) {
      //console.log("minúsculas");
      ecuation=(transformText - 97 + offSets) % 26 + 97;
      }
        // Cifrado con números.
      else if (transformText >= 48 && transformText<= 57) {
      //console.log("números");
      ecuation=(transformText - 48 + offSets) % 10 + 48; 
      }
      let transforAscii= String.fromCharCode(ecuation);
      //console.log(transforAscii); ( rev)
      ciphertransf += transforAscii;
      //console.log(ciphertransf);(rev)
    }
    return ciphertransf; 
    },
    
  decode:(textDecode , offSets) => {
    let decodetransf="";
    let ecuation="";
    for(let i = 0; i < textDecode.length; i++) {
    //console.log (textCipher[i]);(posicion de las letras)
     let transformText= textDecode[i].charCodeAt();
    //console.log(transformText);
     //codigo Mayuscula
     if (transformText >= 65 && transformText <= 90) {
    //console.log("codigo Mayuscula");
    ecuation=(transformText - 90 -offSets) % 26 + 90;}
     //espacio 
     else if(transformText >= 32 && transformText <=  32) {
    ecuation=(transformText- 32 - offSets) % 1 + 32;
    }
     else if( transformText >= 97 && transformText <= 122) {
    //console.log("minúsculas");
     ecuation=(transformText - 122 -offSets) % 26 +122;}
    // Cifrado con números.
      else if (transformText >=48 && transformText<= 57) {
     //console.log("números");
     ecuation=(transformText - 57 - offSets) % 10 + 57;}
    //console.log(ecuation);
    let transforAscii1= String.fromCharCode(ecuation);
    //console.log(transforAscii); 
    decodetransf+=transforAscii1;
    //console.log(decodetransf);
    }
    return decodetransf; 
    }
  } 