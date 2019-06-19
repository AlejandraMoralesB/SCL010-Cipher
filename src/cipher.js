window.cipher = {
  encode: (textCipher , offSets) => {
    for(let i = 0; i < textCipher.length; i++) {
    //console.log (textCipher[i]);(posicion de las letras)
    let transformText= textCipher[i].charCodeAt();
    //console.log(transformText);
    let cipherecuation = (transformText- 65 + offSets) % 26 + 65;
    //console.log(cipherecuation);
    let transforAscii= String.fromCharCode(cipherecuation);
    //console.log(transforAscii); ( rev)
    ciphertransf += transforAscii;
    //console.log(ciphertransf);(rev)
    }
    return ciphertransf; 
    };
    
  decode:(textDecode , offSets) => {
    for(let i = 0; i < textDecode.length; i++) {
    //console.log (textCipher[i]);(posicion de las letras)
    let transformText= textDecode[i].charCodeAt();
    //console.log(transformText);
    let cipherecuation1 = (transformText- 65 - offSets) % 26 + 65;
    //console.log(cipherecuation);
    let transforAscii1= String.fromCharCode(cipherecuation1);
    //console.log(transforAscii); (rev)
    decodetransf+= transforAscii1;
    //console.log(ciphertransf);(rev)
    }
    return decodetransf; 
    }
  };
