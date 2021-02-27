//Variables globales
const formulario=document.getElementById("createUser");
const lista=document.getElementById("listUsers");
var usuarios=[];
const filtroEdad=document.getElementById("filtEdad");
const filtroActividad=document.getElementById("filtActividad");
var actividad=filtroActividad.value;
var edad=filtroEdad.value;
const recargar=document.getElementById("recargar");

//Listeners
formulario.addEventListener("submit", crear);
lista.addEventListener("click",accionesPosibles);
filtroActividad.addEventListener("change",selecFiltro);
filtroEdad.addEventListener("change",selecFiltro);
recargar.addEventListener("click",preparar);

//---FUNCIONES---//

function selecFiltro(params) {
    actividad=filtroActividad.value;
    edad=filtroEdad.value;
};

//funciones de creacion
function crear(params) {
    if (params!=undefined) {
        params.preventDefault();
        let nuevo={
            nombre:formulario.nombre.value,
            ID:formulario.yourID.value,
            telef:formulario.telephone.value,
            estado:"activos",
            edad:formulario.edad.value,
        };
        usuarios.push(nuevo);
    };
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    formulario.reset();
    preparar();
};
function preparar(params) {
    usuarios=JSON.parse(localStorage.usuarios);
    lista.innerHTML='';
    filtrar(usuarios);
};
function filtrar(params) {
    params.forEach(element => {
        if (edad=="todos" && actividad=="todos") {
            pintar(element);
        }else if (actividad=="todos") {
            if (element.edad==edad) {
                pintar(element);
            }else{};
        }else if (edad=="todos"){
            if (element.estado==actividad) {
                pintar(element);
            }else{};
        }else{
            if (edad==element.edad && actividad==element.estado) {
                pintar(element);
            }else{};
        };
    });
};
function pintar(e) {
        if (e.estado=="activos") {
            lista.innerHTML+=`<li class="list-group-item u-active" style="height: 2.5em; font-size:large"><b id="name">${e.nombre}</b> - <i class="small">@<span>${e.ID}</span></i></i><span class="float-end"><button id="eliminar" class="btn icon-user-minus"></button></span><span class="float-end"><button id="estado" class="btn icon-switch"></button></span><br><span id="modificar" hidden>modificar datos</span></li>`
        }else{
            lista.innerHTML+=`<li class="list-group-item u-unactive" style="height: 2.5em; font-size:large"><b id="name">${e.nombre}</b> - <i class="small">@<span>${e.ID}</span></i></i><span class="float-end"><button id="eliminar" class="btn icon-user-minus"></button></span><span class="float-end"><button id="estado" class="btn icon-switch"></button></span><br><span id="modificar" hidden>modificar datos</span></li>`
        };
};

//funciones de modificacion
function accionesPosibles(params) {
    let idUsuario=params.composedPath()
    idUsuario=idUsuario[2].childNodes[2].childNodes[1].innerHTML;
    let boton=params.target.id;
    switch (boton) {
        case "eliminar":
           eliminarUsuario(idUsuario);
            break;
        case "estado":
            cambiarEstado(idUsuario);
            break;
    };
};
function eliminarUsuario(aEliminar) {
    let index=0;
    usuarios.forEach(element => {
        if (element.ID==aEliminar) {
            usuarios.splice(index,1);    
        };
        index++;
    });
    crear();
};
function cambiarEstado(params) {
    usuarios.forEach(element => {
        if (element.ID==params) {
            switch (element.estado) {
                case "activos":
                    element.estado="inactivos"
                    break;
                default:
                    element.estado="activos"
                    break;
            };
        };
    });
    crear();
};
// y nada mas que hacer aajajajjaja, re paja lgm me da esta basura porque me re estanque. DEMASIADO inutil ya soy
