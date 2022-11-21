const array=[1,7,9,3,2,1,0,-1,-2]; //arreglo
let crece=false;
let decrece=false;   //variables booleanas que al final no necesité

let crec=0;   //variables para guardar los numeros crecientes y decrecientes
let dec=0;

function restar(a,b){    //funcion simple de restar, simplemente para usar una funcion
    return a-b;
}


for(let i=0;i<=array.length;i++){
    
   if (array[i]<array[i+1]){
    //crece=true; 
    crec+=array[i];
   } 
   if(array[i]>array[i+1]){
   //decrece=true;
    dec+=array[i];
   }
}

console.log("la seccion creciente del arreglo suma un total de  ",crec);
let resta
resta=restar(crec,dec);
console.log("al restarle la seccion decreciente, que es ",dec);
console.log("da un total de ",resta);