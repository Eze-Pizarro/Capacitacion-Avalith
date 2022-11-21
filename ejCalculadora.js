/*1)Realizar la clase Calculadora de dos operandos a y b.
2)Presentar por consola un menú para el usuario.
en el que pueda sumar, restar, multiplicar, etc.
Dar opcion de Escape o Salida.
3)Todas las operaciones deben estar hechas con funciones flecha.

==CALCULADORA==
1) sUMAR
2) RESTAR
3) MULT
4) DIVIDIR VER VALIDACIÓN.
5) RESTO (MOD)  INVESTIGAR QUE ES EL RESTO DE UNA DIVISIÓN. HACER VALIDACION
6) SQR*/

const scanf = require("scanf");

class calculator{
    constructor(num1,num2){
        this.num1 = num1;
        this.num2 = num2;
    }
    getnum1(){
        return this.num1;
    }
    getnum2(){
        return this.num2;
    }
    setnum1 = (f) => this.op1 = f;
    setnum2 = (g) => this.op2 = g;
};


Addition=(a,b)=>console.log("el resultado es: ",a+b);
Subtraction=(a,b)=>console.log("el resultado es: ",a-b);
Multiplication=(a,b)=>console.log("el resultado es: ",a*b);
Division=(a,b)=>console.log("el resultado es: ",a/b);
Rest=(a,b)=>console.log("el resultado es: ",a%b);
SquareN1=(a)=>console.log("el resultado es: ",Math.sqrt(a));

ingreso=()=>{
    console.log("ingrese el primer numero:");
    cal.setnum1(scanf('%d'));
    console.log("ingrese el segundo numero:");
    cal.setnum2(scanf('%d'));
    }
ingresosqr=()=>{
    console.log("ingrese el numero:");
    cal.setnum1(scanf('%d'));
    }
   
   let cal= new calculator();
   let option;
  
   do {
   console.log("-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n CALCULADORA\n1)Sumar\n2)Restar\n3)Multiplicar\n4)Dividir\n5)Resta de la division\n6)Raiz cuadrada\n7)Salir\n-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n");
   option=scanf("%d");

   console.clear();

    switch (option) {
        case 1:{
        ingreso();
        Addition(cal.getnum1(),cal.getnum2()); 
        break;
        }
        case 2:{
            ingreso();
        Subtraction(cal.getnum1(),cal.getnum2()); 
        break;
        }
        case 3:{
            ingreso();
        Multiplication(cal.getnum1(),cal.getnum2()); 
        break;
        }
        case 4:{
            ingreso();
        Division(cal.getnum1(),cal.getnum2()); 
        break;
        }
        case 5:{
            ingreso();
        Rest(cal.getnum1(),cal.getnum2()); 
        break;
        }
        case 6:{
            ingresosqr();
        SquareN1(cal.getnum1());
        break;
        }
        case 7:{
            console.clear();
            break;
   }
   }

   }while (option != 7);
   

   

