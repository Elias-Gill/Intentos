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
    //botones operadores
var esIgual=document.getElementById("igual");
var sumar=document.getElementById("suma");
var restar=document.getElementById("resta");
var multiplicar=document.getElementById("multiplicar");
var dividir=document.getElementById("dividir");
var masMenos=document.getElementById("signo");
var eliminar=document.getElementById("delete");
    //listeners
uno.addEventListener("click",yourNumber);
dos.addEventListener("click",yourNumber);
tres.addEventListener("click",yourNumber);
cuatro.addEventListener("click",yourNumber);
cinco.addEventListener("click",yourNumber);
seis.addEventListener("click",yourNumber);
siete.addEventListener("click",yourNumber);
ocho.addEventListener("click",yourNumber);
nueve.addEventListener("click",yourNumber);
cero.addEventListener("click",yourNumber);
restar.addEventListener("click",botOperacion);
multiplicar.addEventListener("click",botOperacion);
dividir.addEventListener("click",botOperacion);
masMenos.addEventListener("click",cambiarSigno);
sumar.addEventListener("click",botOperacion);
esIgual.addEventListener("click",botOperacion);
eliminar.addEventListener("click", yourNumber);
    //variables
var numero="";
var resultado;
var memOp="";
    //funcion de escritura
function yourNumber(params) {
    switch (params.target) {
        case uno:
            numero=numero+"1";
            pantalla.value=numero;
            break;
        case dos:
            numero=numero+"2";
            pantalla.value=numero;
            break;
        case tres:     
            numero=numero+"3";
            pantalla.value=numero;
            break;       
        case cuatro:     
            numero=numero+"4";
            pantalla.value=numero;
            break;       
        case cinco:     
            numero=numero+"5";
            pantalla.value=numero;
            break;       
        case seis:     
            numero=numero+"6";
            pantalla.value=numero;
            break;       
        case siete:     
            numero=numero+"7";
            pantalla.value=numero;
            break;       
        case ocho:     
            numero=numero+"8";
            pantalla.value=numero;
            break;       
        case nueve:     
            numero=numero+"9";
            pantalla.value=numero;
            break;       
        case cero:     
            numero=numero+"0";
            pantalla.value=numero;
            break;
        case eliminar:
            numero="";
            resultado=null;
            memOp="";
            pantalla.value="";
            break;       
    };   
};
    //Operaciones:operadores fase1
function botOperacion(params) {
    switch (params.target) {
        case sumar:
            if (memOp==""){
            numero=numero+"+";
            pantalla.value=numero;
            memOp="sumar"
            }else if (memOp!=""){
            pushResult();
            };
            break;
        case multiplicar:
            if (memOp==""){
            numero=numero+"x";
            pantalla.value=numero;
            memOp="multiplicar"
            }else if (memOp!=""){
            pushResult();
            };
            break;
        case dividir:
            if (memOp==""){
            numero=numero+"/";
            pantalla.value=numero;
            memOp="dividir"
            }else if (memOp!=""){
            pushResult();
            };
            break;
        case restar:
            if (memOp==""){
            numero=numero+"~";
            pantalla.value=numero;
            memOp="restar"
            }else if (memOp!=""){
            pushResult();
            };
            break;
        case esIgual:
            pushResult();
            break;
    };
};

    //Operaciones:resultado
function pushResult(s) {
    switch (memOp) {
        case "sumar":
            resultado=numero.split("+");
            resultado=parseFloat(resultado[0])+parseFloat(resultado[1]);
            memOp="";
            numero=resultado.toString();
            if (numero=="NaN"){pantalla.value="sintax error";}else{pantalla.value=numero;};
            resultado=null;
            break;
        case "multiplicar":
            resultado=numero.split("x");
            resultado=parseFloat(resultado[0])*parseFloat(resultado[1]);
            memOp="";
            numero=resultado.toString();
            if (numero=="NaN"){pantalla.value="sintax error";}else{pantalla.value=numero;};
            resultado=null;
            break;
        case "dividir":
            resultado=numero.split("/");
            resultado=parseFloat(resultado[0])/parseFloat(resultado[1]);
            memOp="";
            numero=resultado.toString();
            if (numero=="NaN"){pantalla.value="sintax error";}else{pantalla.value=numero;};
            resultado=null;
            break;
        case "restar":
            resultado=numero.split("~");
            resultado=parseFloat(resultado[0])-parseFloat(resultado[1]);
            memOp="";
            numero=resultado.toString();
            if (numero=="NaN"){pantalla.value="sintax error";}else{pantalla.value=numero;};
            resultado=null;
            break;
        case "masMenos":
            pushResult();
            break;
        default:
            if (numero=="NaN" || numero==null){pantalla.value="sintax error";}else{pantalla.value=numero;};
            if (alerta==false) {alert("japiro Carlos, estuve dos dias haciendo macanada en vez de haber teminado en 4 horas(o igual un poquito mas)"); alerta=true;};
    };
};
    //cambios de signo
function cambiarSigno(s) {
    var temporal;
    switch(memOp){
        case "sumar":
            temporal=numero.split("+");
            temporal[1]=parseFloat(temporal[1]);
            temporal[1]=temporal[1]-temporal[1]*2;
            temporal[0]=temporal[0].toString();
            temporal[1]=temporal[1].toString();
            numero=temporal[0]+"+"+temporal[1];
            pantalla.value=numero;
            break;
        case "restar":
            temporal=numero.split("~");
            temporal[1]=parseFloat(temporal[1]);
            temporal[1]=temporal[1]-temporal[1]*2;
            temporal[0]=temporal[0].toString();
            temporal[1]=temporal[1].toString();
            numero=temporal[0]+"-"+temporal[1];
            pantalla.value=numero;
            break;
        case "dividir":
            temporal=numero.split("/");
            temporal[1]=parseFloat(temporal[1]);
            temporal[1]=temporal[1]-temporal[1]*2;
            temporal[0]=temporal[0].toString();
            temporal[1]=temporal[1].toString();
            numero=temporal[0]+"/"+temporal[1];
            pantalla.value=numero;
            break;
        case "multiplicar":
            temporal=numero.split("x");
            temporal[1]=parseFloat(temporal[1]);
            temporal[1]=temporal[1]-temporal[1]*2;
            temporal[0]=temporal[0].toString();
            temporal[1]=temporal[1].toString();
            numero=temporal[0]+"x"+temporal[1];
            pantalla.value=numero;
            break;
    };
};

var alerta=false;