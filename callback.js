retornotexto=()=>{
    return ('hola');
}

imprime=(callback)=>{
    return callback();
}

console.log(imprime(retornotexto));