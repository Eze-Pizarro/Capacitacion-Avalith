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
 
  return(this.skill);
}
getbando(){
  //console.log(" \n bando: ",this.bando);
  return(this.bando);
}
getdebilidad(){
  //console.log(" \n debilidad: ",this.debilidad,"\n-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+");
  return(this.debilidad);
}

//SETTERS\\
setId(){

}
setNombre(){
  
  console.log("nombre del personaje: ");
  this.nombre = scanf("%s");
} 
setFranquicia(){
 
  console.log("franquicia del personaje: ");
  this.franquicia = scanf("%s");
}
setskill(){
 
  console.log("cuantas skills tiene el personaje?: ");
  this.skill.length = scanf("%d");
  for (let i=0; i<this.skill.length; i++){   
  console.log("skill "+(i+1)+": ");
  this.skill[i] = scanf("%s");
  }
}
setbando(){
 
  console.log("su personaje es heroe, villano o antiheroe: ");
  this.bando = scanf("%s");
}
setdebilidad(){
  
  console.log("debilidad del personaje: ");
  this.debilidad = scanf("%s");
}

};

function seteado(a) {                 //funcion para insertar los datos
  for (let i=0;i<a.length;i++) { 
    a[i].setNombre();
    a[i].setFranquicia();
    a[i].setskill();
    a[i].setbando();
    a[i].setdebilidad();
    
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

