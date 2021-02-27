    //botones numeros
var uno=document.getElementById("uno");
var dos=document.getElementById("dos");
var tres=document.getElementById("tres");
var cuatro=document.getElementById("cuatro");
var cinco=document.getElementById("cinco");
var seis=document.getElementById("seis");
var siete=document.getElementById("siete");
var ocho=document.getElementById("ocho");
var nueve=document.getElementById("nueve");
var cero=document.getElementById("cero");
var pantalla=document.getElementById("pantalla");
var punto=document.getElementById("punto");
var dobleCero=document.getElementById("dobleCero")
    
    //botones operadores
var igualA=document.getElementById("igual");
var suma=document.getElementById("suma");
var resta=document.getElementById("resta");
var multiplicacion=document.getElementById("multiplicacion");
var division=document.getElementById("division");
var signo=document.getElementById("signo");
var eliminar=document.getElementById("delete");
    
    //listeners
uno.addEventListener("click",numEnPanntalla);
dos.addEventListener("click",numEnPanntalla);
tres.addEventListener("click",numEnPanntalla);
cuatro.addEventListener("click",numEnPanntalla);
cinco.addEventListener("click",numEnPanntalla);
seis.addEventListener("click",numEnPanntalla);
siete.addEventListener("click",numEnPanntalla);
ocho.addEventListener("click",numEnPanntalla);
nueve.addEventListener("click",numEnPanntalla);
cero.addEventListener("click",numEnPanntalla);
dobleCero.addEventListener("click",numEnPanntalla);
punto.addEventListener("click",numEnPanntalla);
resta.addEventListener("click",operadores);
multiplicacion.addEventListener("click",operadores);
division.addEventListener("click",operadores);
suma.addEventListener("click",operadores);
igualA.addEventListener("click",esIgual);
eliminar.addEventListener("click",operadores);
signo.addEventListener("click",cambiarSigno);
    
    //variables necesarias
var numero=new Array();
var memOp=new Array();
var numEnLetras="";
var iteraciones=memOp.length;
var digitos=0;
    
    //valores en pantalla
function numEnPanntalla(params) {
    digitos++;
    switch (params.target) {
        case dobleCero:
            pantalla.value=pantalla.value+"00";
            numEnLetras=numEnLetras+"00";
            digitos++; 
            break;
        case uno:
            pantalla.value=pantalla.value+"1";
            numEnLetras=numEnLetras+"1";
            break;
        case dos:
            pantalla.value=pantalla.value+"2";
            numEnLetras=numEnLetras+"2";
            break;
        case tres:     
            pantalla.value=pantalla.value+"3";
            numEnLetras=numEnLetras+"3";
            break;       
        case cuatro:     
            pantalla.value=pantalla.value+"4";
            numEnLetras=numEnLetras+"4";
            break;       
        case cinco:     
            pantalla.value=pantalla.value+"5";
            numEnLetras=numEnLetras+"5";
            break;       
        case seis:     
            pantalla.value=pantalla.value+"6";
            numEnLetras=numEnLetras+"6";
            break;       
        case siete:     
            pantalla.value=pantalla.value+"7";
            numEnLetras=numEnLetras+"7";
            break;       
        case ocho:     
            pantalla.value=pantalla.value+"8";
            numEnLetras=numEnLetras+"8";
            break;       
        case nueve:     
            pantalla.value=pantalla.value+"9";
            numEnLetras=numEnLetras+"9";
            break;       
        case cero:     
            pantalla.value=pantalla.value+"0";
            numEnLetras=numEnLetras+"0";
            break;
        case punto:
            pantalla.value=pantalla.value+".";
            numEnLetras=numEnLetras+".";
            break;
    };
};

function operadores(params) {
    digitos=0;
    switch(params.target){
        case eliminar:
            pantalla.value="";
            numero = new Array();
            memOp = new Array();
            numEnLetras="";
            listaOperaciones=[];
            break;         
        case resta:  
            pantalla.value=pantalla.value+"-";
            memOp.push("restar");
            if(numEnLetras!=""){numero.push(parseFloat(numEnLetras));}
            numEnLetras="";
            break;       
        case multiplicacion:      
            pantalla.value=pantalla.value+"x";
            memOp.push("multiplicar");
            if(numEnLetras!=""){numero.push(parseFloat(numEnLetras));}
            numEnLetras="";
            break;
        case suma:      
            pantalla.value=pantalla.value+"+";
            memOp.push("sumar");
            if(numEnLetras!=""){numero.push(parseFloat(numEnLetras));}
            numEnLetras="";
            break;        
        case division:      
            pantalla.value=pantalla.value+"/";
            memOp.push("dividir");
            if(numEnLetras!=""){numero.push(parseFloat(numEnLetras));}
            numEnLetras="";
    };
};

function esIgual(params) {
    if(numEnLetras!=""){
        numero.push(parseFloat(numEnLetras));
    }else{};
    mult_Div();
    suma_Resta();
    memOp=[];
    numEnLetras=numero.toString();
    digitos=numEnLetras.length;
    if (numero=="NaN" || numero[1]!=null){
        pantalla.value="Sintax Error";
    }else{
        pantalla.value=numero;
        listaOperaciones=[];
    };
    numero=[];
};
    
    //operaciones
function mult_Div(params) {
    var n=0;
    while (n<memOp.length){
        if (memOp[n]=="multiplicar"){
            numero[n]=numero[n]*numero[n+1];
            eliminarNumero(n+1);
            eliminarOperacion(n);
            n--;
        }else if (memOp[n]=="dividir"){
            numero[n]=numero[n]/numero[n+1];
            eliminarNumero(n+1);
            eliminarOperacion(n);
            n--;
        }else{n++;};
    };
    iteraciones=memOp.length;
};

function suma_Resta(params) {
    var n=0;
    while (n<memOp.length){
        if (memOp[n]=="sumar"){
            numero[n]=numero[n]+numero[n+1];
            eliminarNumero(n+1);
            eliminarOperacion(n);
            n--;
        }else if (memOp[n]=="restar"){
            numero[n]=numero[n]-numero[n+1];
            eliminarNumero(n+1);
            eliminarOperacion(n);
            n--;
        }else{n++;};
    };
    iteraciones=memOp.length;
};

function cambiarSigno(params) {
        numero.push(parseFloat(numEnLetras));
        var n=numero.length;
        numero[n-1]= -numero[n-1];
        var cadena=pantalla.value;
        pantalla.value=cadena.slice(0,-digitos)+"(-"+numEnLetras+")";   
        numEnLetras="";
};
    
    //eliminar elemento del array
function eliminarOperacion(index) {
    if (index!=NaN && index!=null){
        memOp.splice(index,1);
    }else{};
};
function eliminarNumero(index) {
    if (index!=NaN && index!=null){
        numero.splice(index,1);
    }else{};
};
console.log(pantalla)
    