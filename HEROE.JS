const scanf = require("scanf");

class persocomics{
    constructor(id,nombre,franquicia,skill,bando,debilidad){    
       this.id=id;
       this.nombre=nombre;
       this.franquicia=franquicia;
       this.skill = skill = [];
       this.bando=bando;
       this.debilidad=debilidad;
   }

   //GETTERS\\
getId(){
  
   return(this.id);
}
getNombre(){
  
   return(this.nombre);
}
getFranquicia(){
 
  return(this.franquicia);
}
getskill(){
 for(var i=0;i<this.skill.length;i++){
  return(this.skill[i]);
 }
}
getbando(){
 
  return(this.bando);
}
getdebilidad(){
  
  return(this.debilidad);
}

//SETTERS\\
setId(){

}
setNombre(nombre){
  
  this.nombre = nombre;
} 
setFranquicia(franquicia){
 
  this.franquicia = franquicia;
}
setskill(skill){
  this.skill[i] = skill;
  }
setbando(bando){
 
  this.bando = bando;
}
setdebilidad(debilidad){
  
  this.debilidad = debilidad;
}

};

function seteado(a) {                 //funcion para insertar los datos
  for (let i=0;i<a.length;i++) { 
    console.log("nombre del personaje: ");
    a[i].setNombre(scanf("%s"));
    console.log("franquicia del personaje: ");
    a[i].setFranquicia(scanf("%s"));
    console.log("cuantas skills tiene el personaje?: ");
    let op = scanf("%d");
    for (let i = 0; i < op;i++) {
        console.log("skill "+(i+1)+": ");
        a[i].setskill[i] = scanf("%s");
        }    
    console.log("su personaje es heroe, villano o antiheroe: ");
    a[i].setbando(scanf("%s"));
    console.log("debilidad del personaje: ");
    a[i].setdebilidad(scanf("%s"));
    
  }
}

function geteado(a) {                  //funcion para mostrar los datos
    console.clear();    
  for (let i=0;i<a.length;i++){
    console.log("NOMBRE: ",a[i].getNombre());
    console.log("FRANQUICIA: ",a[i].getFranquicia());
    console.log("HABILIDADES: ",a[i].getskill());
    console.log("BANDO: ",a[i].getbando());
    console.log("DEBILIDAD: ",a[i].getdebilidad(),"\n");
    
  }
}


let perso1 = new persocomics(1);
let perso2 = new persocomics(2);
let perso3 = new persocomics(3);
let pjs=[perso1,perso2,perso3];

seteado(pjs);
geteado(pjs);