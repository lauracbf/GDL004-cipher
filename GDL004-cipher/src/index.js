var clic = 1;

//Función para el botón Instrucciones
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

//Función de la barra deslisable
var slider = document.getElementById('slider');
var val = document.getElementById('value');
val.innerHTML = slider.value;

slider.oninput = function(){
  val.innerHTML=this.value;
}
