const scanf = require("scanf");

class Calculator{
    constructor(N1,N2){
        this.N1 = N1; 
        this.N2 = N2;
    }

    getN1(){
        return this.N1;
    }

    getN2(){
        return this.N2;
    }

    setN1 = (f) => this.N1 = f;
    setN2 = (g) => this.N2 = g;
};



Addition= (a,b) => console.log("\nel resultado es: ",a+b);
Subtraction= (a,b) => console.log("\nel resultado es: ",a-b);
Multiplication= (a,b) => console.log("\nel resultado es: ",a*b);
Division= (a,b) => console.log("\nel resultado es: ",a/b);
Remainder= (a,b) => console.log("\nel resultado es: ",a%b);
SquareN1= (a) => console.log("\nel resultado es: ",Math.sqrt(a));

function insertar() {
    console.log("Ingrese el primer operador");
    cal.setN1(scanf("%d"));
    console.log("Ingrese el segundo operador");
    cal.setN2(scanf("%d"));
}

let cal = new Calculator();
let op;
do{
    console.log("-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n CALCULADORA\n1)Sumar\n2)Restar\n3)Multiplicar\n4)Dividir\n5)Resta de la division\n6)Raiz cuadrada\n0)Salir\n-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n");
    op = scanf("%d");

    switch(op) {

        case (1):
            console.clear();
            insertar();
            Addition(cal.getN1(), cal.getN2());
            break;

        case(2):
            console.clear();
            insertar();
            Subtraction(cal.getN1(), cal.getN2());
            break;

        case (3):
            console.clear();
            insertar();
            Multiplication(cal.getN1(), cal.getN2());
            break;

        case(4):
            console.clear();
            insertar();
            if(cal.getN2() != 0){
                Division(cal.getN1(), cal.getN2());
                break;
            }
            else{
                console.log("\nSyntax error");
                break;
            }

        case(5):
            console.clear();
            insertar();
            Remainder(cal.getN1(), cal.getN2());

        case (6):
            console.clear();
            console.log("Ingrese el primer operador");
            cal.setN1(scanf("%d"));
            console.log(SquareN1(cal.getN1()));
            break;

        case(0):
            console.clear();
            break;

        default:
            console.log("ERROR");
    }
}
while (op != 0);