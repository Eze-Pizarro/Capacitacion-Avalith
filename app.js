console.log("que onda pa");

 const a=10;
//================
 
var c=5; //var y let pueden ser cambiadas dentro de una funcion

let f=7; //pero const no porque es una valor global
f=8;     //let es la manera correcta de definir variables en javascript  

function sumar(a,b){
    return a+b;
}

let suma;
suma=sumar(1,3,);
console.log(sumar(1,3));
console.log(suma);


//SCOPE DE UNA VARIABLE
{
let g=2;
console.log("la variable g vale: "+g);
}
let g;
console.log(g);