//variables
var canvas = document.getElementById("canvas");
var boton = document.getElementById("boton");
var lienzo = canvas.getContext("2d");
var llave = {
    Tcl:false,
    Mouse:false,    
};
var direccion = {
    Up:40, 
    Down:38,
    Left:37,
    Right:39,
};
var inicio = {
    x:300,
    y:300,
};
//listeners
boton.addEventListener("click",cerradura);
document.addEventListener("keydown", lapiz);
canvas.addEventListener("click",posicion);
document.addEventListener("keydown", mouseOn);
canvas.addEventListener("mousemove", mouse);
//switch mouse
function mouseOn(s) {
    if(s.keyCode==32){
    switch (llave.Mouse) {
        case true:
            llave.Mouse=false
            break;
        case false:
            llave.Mouse=true
            break;
    }
    }
}
//switch de dibujo
function cerradura() {
    switch (llave.Tcl) {
        case true:
            llave.Tcl=false
        break;
        case false:
            llave.Tcl=true
        break;
    }
}
//dibujar mouse
function mouse(c) {
    if (llave.Mouse==true){
    dibujar("black",c.offsetX, c.offsetY, c.offsetX+c.movementX, c.offsetY+c.movementY);
    } else{};
}
//posicionador
function posicion(position) {
    inicio.x=position.offsetX;
    inicio.y=position.offsetY;
    console.log(position)
}
//lapiz
function lapiz(tecla) {
    var key = tecla.keyCode;
    if (llave.Tcl==true) {
        switch (key) {
            case direccion.Up:
                dibujar("red",inicio.x,inicio.y,inicio.x,inicio.y+10);
                if(inicio.y<600){inicio.y=inicio.y+10};    
            break;
            case direccion.Down:
                dibujar("blue",inicio.x,inicio.y,inicio.x,inicio.y-10);
                if(inicio.y>0){inicio.y=inicio.y-10};
            break;
            case direccion.Left:
                dibujar("green",inicio.x,inicio.y,inicio.x-20,inicio.y);
                if(inicio.x>0){inicio.x=inicio.x-10};
            break;
            case direccion.Right:
                dibujar("orange",inicio.x,inicio.y,inicio.x+10,inicio.y);
                if(inicio.x<600){inicio.x=inicio.x+10};
            break;
            default:
                break;
        }   
    }
}
//funcion de dibujo
function dibujar(color,xinicial,yinicial,xfinal,yfinal){
    lienzo.beginPath();
    lienzo.strokeStyle=color;
    lienzo.lineWidth=2;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}//marco
dibujar("black",0,0,0,600);
dibujar("black",0,600,600,600);
dibujar("black",600,600,600,0);
dibujar("black",600,0,0,0);
dibujar("black",300,300,300,307)
dibujar("black",300,300,300,293)
dibujar("black",300,300,293,300)
dibujar("black",300,300,307,300)