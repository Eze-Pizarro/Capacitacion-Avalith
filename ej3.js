const scanf = require("scanf");

let tempvalida=false;

let arreglo=[];

  
  function promedio(a){
    let suma=0;
     for (let i = 0; i < a.length; i++) {
        suma += a[i];
     }
   let promedio=suma/a.length;
   console.log("el promedio es: "+promedio);
  }

console.log("de cuantos dias vas a ingresar la temperatura?");
arreglo.length=scanf('%s');
 
    do{
  let tempe;
    for(let i=0;i<=arreglo.length-1;i++){
  console.log("temperatura "+[i+1]+": ");
  tempe=scanf('%d');
  
    if(tempe>-20 && tempe<55){   
    tempvalida=false;
    arreglo[i]=tempe;
    } 
    else{    
    tempvalida=true;
    console.log("temperatura no valida,intente otra");
    i--;
        }        
  } 
      }while(tempvalida=false)

(console.log("las temperaturas recibidas son: "+arreglo));
promedio(arreglo);
