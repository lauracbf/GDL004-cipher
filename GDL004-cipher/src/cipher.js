window.cipher = {
  // Acá escribe tu código.
  encode: (offset, string) => {
  var prueba1 = '';
  for(let i = 0; i < string.length; i ++){
    var toAscii = string[i].charCodeAt();
    if(toAscii >= 65 && toAscii <= 90){
      prueba1 += String.fromCharCode((toAscii - 65 + offset) % 26 +65);
    }else if (toAscii >= 97 && toAscii <= 122){
      prueba1 += String.fromCharCode((toAscii - 97 + offset) % 26 +97);
    }else{
      prueba1 += string[i];
    }
  }
return prueba1;
},

decode: (offset, string) => {
  var prueba2 = '';
for(let i=0; i<string.length; i++){
var toAscii2 = string[i].charCodeAt();
if(toAscii2 >= 65 && toAscii2 <= 90){
  prueba2 += String.fromCharCode((toAscii2 + 65 - offset) % 26 +65);
}else if (toAscii2 >= 97 && toAscii2 <= 122){
  prueba2 += String.fromCharCode((toAscii2 -122 - offset) % 26 +122);
}else{
  prueba2 += string[i];
}
}
return prueba2;
},
};
