var canvas=document.getElementById("canvas");
var lienzo=canvas.getContext("2d");
var boton=document.getElementById("boton");
boton.addEventListener("click", inicio());
document.addEventListener("keypress", direccion);
//variables de juego
var aire=false;
var salto=false;
var teclas={
    Up:38,
    Down:40,
    Left:37,
    Right:39,
};
var posY=600;
var posX=50;
var gravity=+5;
//funciones de juego
function direccion(p) {
} 
function gravedad (){
};
//funciones de inicio
function draw(imagen,x,y) {
    lienzo.drawImage(imagen,x,y);
};
function inicio(p) {
    draw(mapa,0,0);
    draw(mario,20,600);
};
//sprites
var mario=new Image();
mario.src="C:/Users/elias/Pictures/imagenes VScode/mario.png";
var mapa=new Image();
mapa.src="C:Users/elias/Pictures/imagenes VScode/mapa.jpg";
var marioSalto=new Image();
marioSalto.src="C:/Users/elias/Pictures/imagenes VScode/marioSalto.png";

//re kaigue, vago de mierda lo que sos, en vez de estudiar o que. Imutil...
