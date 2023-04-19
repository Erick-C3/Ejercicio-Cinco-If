/**
 * Requisitos:
 *  + verificar cual es la mascota a pasear
 *      + solo puede ser un tipo de mascota
 *      + recibir la cantidad de ser necesario
 *      + limitar la cantidad correspondiente
 *  + informar si es posible o no realizar el paseo
 * 
 * info:
 *  - limite de gatos es 1
 *  - limite de mascotas a pasear es 3
 *  - mascotas permitidas: perro y gato
 */

const LIMITE_MASCOTAS = 3;
const LIMITE_GATOS = 1;
const LIMITE_PERROS = LIMITE_MASCOTAS;

const TIPO_MASCOTA_PERRO = 1;
const TIPO_MASCOTA_GATO = 2;

const CANT_PERROS_DEF = 0;

let tipoMascotaPasear = prompt("Ingrese 1 para perros\nIngrese 2 para un gato");
let cantPerros = CANT_PERROS_DEF;

if( tipoMascotaPasear == TIPO_MASCOTA_PERRO){
    cantPerros = prompt("Ingrese cantidad de mascotas");
    if(cantPerros > LIMITE_MASCOTAS){
        document.write("No es posible sacar a pasear esa cantidad de perros!");
    }else{
        document.write("Espere hasta que llegue el personal para pasear a sus mascota/s");
    }
}else{
    document.write("Espere hasta que llegue el personal para pasear a sus mascota");
}