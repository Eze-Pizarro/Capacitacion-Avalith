//primeros 10 numeros primos:2, 3, 5, 7, 11, 13, 17, 19, 23, 29


function primos(numero) {
    
    for(let i = 2,raiz=Math.sqrt(numero); i <= raiz; i++)
        if(numero % i === 0) return false;
    return numero > 1;
      
}  
for (let x=0;x<=30;x++) {
    if (primos(x))
        console.log( x );
}