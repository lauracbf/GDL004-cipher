var clic = 1;
//Función para el botón Instrucciones

document.getElementById('click1').addEventListener('click', showInstructions);
function showInstructions(){
  if(clic==1){
    document.getElementById('instructions').style.display = "block";
    clic = clic + 1;
  }
 else{
   document.getElementById('instructions').style.display = "none";
   clic = 1;
 }
}

//Función para el botón Saber más...
document.getElementById('button1').addEventListener('click', showMore);
function showMore(){
  if(clic==1){
    document.getElementById('sectionMore').style.display = "block";
    clic = clic + 1;
  }
 else{
   document.getElementById('sectionMore').style.display = "none";
   clic = 1;
 }
}

//Función de la barra deslisable.
var slider = document.getElementById('slider');
var val = document.getElementById('value');
val.innerHTML = slider.value;

document.getElementById('slider').addEventListener('input', valueChange);
function valueChange(){
  var valueOne = slider.value;
document.getElementById('value').innerHTML = valueOne;
return valueOne;
}

//Obteniendo valor de textarea al dar clic en botón cifrar

document.getElementById('cifrar').addEventListener('click', obtainText);
function obtainText(){
var textOne = document.getElementById('firstText').value ;
var offset = parseInt(valueChange ());
document.getElementById('secondText').innerHTML = window.cipher.encode(offset, textOne);
}

//Obteniendo valor de textarea al dar clic en botón descifrar

document.getElementById('descifrar').addEventListener('click', obtainText2);
function obtainText2(){
var textOne = document.getElementById('firstText').value ;
var offset = parseInt(valueChange ());
document.getElementById('secondText').innerHTML = window.cipher.decode(offset, textOne);
}
