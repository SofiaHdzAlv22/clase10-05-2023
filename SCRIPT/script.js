let nombre1, nombre2;
let edad1, edad2;

let formulario = document.getElementById('form')
let resultado = document.getElementById('res')

formulario.addEventListener('submit',(e)=>{
    e.preventDefault()
    LeerDatos()
})

function LeerDatos() {
    nombre1 = document.getElementById('nombre1').value;
    edad2 = document.getElementById('edadH1').value;

    nombre2 = document.getElementById('nombre2').value;
    edad2 = document.getElementById('edadH2').value;
    Procesos(nombre1,nombre2,edad1,edad2)
 
}

function Procesos(nombre1,nombre2,edad1,edad2) {
    if (edad1>edad2){
        resultado.innerHTML =nombre1

    }
    else{
        resultado.innerHTML =nombre2
    }
}
