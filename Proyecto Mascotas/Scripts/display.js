function displayCards(){
    const DIV = document.getElementById("mascotas");
    let card="";

    for(let i=0;i<pets.length;i++){
        card += `
        <div class="card">
            <div class="tarjeta" align="center"><b> TARJETA DE REGISTRO</b>
            <hr color="blue">
            </div>
            <p>Nombre: <b>${pets[i].nombre}</b></p>
            <p>Animal: ${pets[i].animal}</p>
            <p>Género: ${pets[i].genero}</p>
            <p>Esterilizado: ${pets[i].esterilizado}</p>
            <p>Edad: ${pets[i].edad}</p>
            <p>Marca de alimento: ${pets[i].marca}</p>
            <p>Nombre del dueño: ${pets[i].dueno}</p>
            <p>Teléfono: ${pets[i].telefono}</p>
        <div>
        `;
    }

    DIV.innerHTML=card;
}


var i=-1;
let card=[];
function displayCardsiguiente(){
    const DIV = document.getElementById("mascotas");
    i+=1;
        card[i]= `
        <div class="card">
            <div class="tarjeta" align="center"><b> TARJETA DE REGISTRO</b>
            <hr color="blue">
            </div>
            <p>Nombre de la mascota: <b>${pets[i].nombre}</b></p>
            <p>Animal: <b>${pets[i].animal}</b></p>
            <p>Género: <b>${pets[i].genero}</b></p>
            <p>Esterilizado: <b>${pets[i].esterilizado}</b></p>
            <p>Edad: <b>${pets[i].edad}</b></p>
            <p>Marca de alimento: <b>${pets[i].marca}</b></p>
            <p>Nombre del dueño: <b>${pets[i].dueno}</b></p>
            <p>Teléfono: <b>${pets[i].telefono}</b></p>
            <hr color="blue">
            <p class="c"><b>Registro No.:</b> ${pets[i].numreg}</p>
        <div>
        `;
    
    DIV.innerHTML=card[i];
}

function displayCardsatras(){
    const DIV = document.getElementById("mascotas");
    if(i>=pets.length){i=(pets.length-1)}
    i-=1;
    if(i<1){i=0}
    
        card[i]= `
        <div class="card">
            <div class="tarjeta" align="center"><b> TARJETA DE REGISTRO</b>
            <hr color="blue">
            </div>
            <p>Nombre de la mascota: <b>${pets[i].nombre}</b></p>
            <p>Animal: <b>${pets[i].animal}</b></p>
            <p>Género: <b>${pets[i].genero}</b></p>
            <p>Esterilizado: <b>${pets[i].esterilizado}</b></p>
            <p>Edad: <b>${pets[i].edad}</b></p>
            <p>Marca de alimento: <b>${pets[i].marca}</b></p>
            <p>Nombre del dueño: <b>${pets[i].dueno}</b></p>
            <p>Teléfono: <b>${pets[i].telefono}</b></p>
            <hr color="blue">
            <p class="c"><b>Registro No.:</b> ${pets[i].numreg}</p>
        <div>
        `;
    
    DIV.innerHTML=card[i];

}

function displayCardsuno(){
    const DIV = document.getElementById("mascotas");
    i=0;
    
        card[i]= `
        <div class="card">
            <div class="tarjeta" align="center"><b> TARJETA DE REGISTRO</b>
            <hr color="blue">
            </div>
            <p>Nombre de la mascota: <b>${pets[i].nombre}</b></p>
            <p>Animal: <b>${pets[i].animal}</b></p>
            <p>Género: <b>${pets[i].genero}</b></p>
            <p>Esterilizado: <b>${pets[i].esterilizado}</b></p>
            <p>Edad: <b>${pets[i].edad}</b></p>
            <p>Marca de alimento: <b>${pets[i].marca}</b></p>
            <p>Nombre del dueño: <b>${pets[i].dueno}</b></p>
            <p>Teléfono: <b>${pets[i].telefono}</b></p>
            <hr color="blue">
            <p class="c"><b>Registro No.:</b> ${pets[i].numreg}</p>
        <div>
        `;
    
    DIV.innerHTML=card[i];
}


function buscar(){
    const DIV = document.getElementById("mascotas");
    var bnom = prompt("Nombre de la mascota")
    i=pets.findIndex(elemento => {
        return elemento.nombre === bnom
    }); 
    
    card[i]= `
        <div class="card">
            <div class="tarjeta" align="center"><b> TARJETA DE REGISTRO</b>
            <hr color="blue">
            </div>
            <p>Nombre de la mascota: <b>${pets[i].nombre}</b></p>
            <p>Animal: <b>${pets[i].animal}</b></p>
            <p>Género: <b>${pets[i].genero}</b></p>
            <p>Esterilizado: <b>${pets[i].esterilizado}</b></p>
            <p>Edad: <b>${pets[i].edad}</b></p>
            <p>Marca de alimento: <b>${pets[i].marca}</b></p>
            <p>Nombre del dueño: <b>${pets[i].dueno}</b></p>
            <p>Teléfono: <b>${pets[i].telefono}</b></p>
            <hr color="blue">
            <p class="c"><b>Registro No.:</b> ${pets[i].numreg}</p>
        <div>
        `;
    DIV.innerHTML=card[i];
}
