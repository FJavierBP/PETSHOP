let pets=[]; //arreglo vacio

function init(){
console.log("Register");
//objeto
//let pet1=new Pet("Machiato","Macho","Boxer","Grooming");
//let pet2=new Pet("Firulais","Macho","Boxer","Grooming");
//let pet3=new Pet("kika","Macho","Boxer","Grooming");
//let pet4=new Pet("snoopy","Macho","Boxer","Grooming");
//pets.push(pet1,pet2,pet3,pet4);
//displayCards();
}
window.onload=init; //ejecuta init cuando termina de rendizar el html

function Pet(nombreP,animalP,generoP,esterilizadoP,edadP,marcaP,duenoP,telefonoP,numregP){
    this.nombre=nombreP;
    this.animal=animalP;
    this.genero=generoP;
    this.esterilizado=esterilizadoP;
    this.edad=edadP;
    this.marca=marcaP;
    this.dueno=duenoP;
    this.telefono=telefonoP;
    this.numreg=numregP
}

let inputNombre=document.getElementById("txtNombre");
let inputAnimal=document.getElementById("selAnimal");
let inputGenero=document.getElementById("selGenero");
let inputEsterilizado=document.getElementById("selEsterilizado");
let inputEdad=document.getElementById("txtEdad");
let inputMarca=document.getElementById("selMarca");
let inputDueno=document.getElementById("txtDueno");
let inputTelefono=document.getElementById("txtTelefono");


function validacion(pet){
    let valida=true;
    //reset los inputs
    inputNombre.classList.remove("error");
    inputDueno.classList.remove("error");
    inputTelefono.classList.remove("error");
    if(pet.nombre == ""){
        inputNombre.classList.add("error");
        valida=false;
    } 
    if(pet.dueno == ""){
        inputDueno.classList.add("error");
        valida=false;
    } 
    if(pet.telefono == ""){
        inputTelefono.classList.add("error");
        valida=false;
    } 
    return valida;
}
var x=1;
function registro(){
    let newPet=new Pet(inputNombre.value,inputAnimal.value,inputGenero.value,inputEsterilizado.value,inputEdad.value,inputMarca.value,inputDueno.value,inputTelefono.value,x);
    if(validacion(newPet)==true){
        x+=1;
        pets.push(newPet);
        limpiarform();
    }
    x.innerHTML=card[i];
}

function limpiarform(){
    inputNombre.value="";
    inputAnimal.value="";
    inputGenero.value="";
    inputEsterilizado.value="";
    inputEdad.value="";
    inputMarca.value="";
    inputDueno.value="";
    inputTelefono.value="";
    inputNumreg=0;
}