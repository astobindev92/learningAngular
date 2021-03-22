
/*
    ===== Código de TypeScript =====
*/
function sumar(a:number,b:number):number{
    return a+b;
}

const resultado=sumar(5445654654645,4);
console.log(resultado);



const sumarflecha=(a:number,b:number)=>a+b;
const resultado2=sumarflecha(5445654654645,4);
console.log(resultado2);



function multiplicar(numero:number,otroNumero?:number,base:number=2):number{
    /* el signo de ? significa que son los opciones y el orden es el siguiente
        los obligatorios, los opcionales , y después los que tienen valores definidos.    
    */
    return numero*base;
}

const resultado3=multiplicar(2,4);
console.log(resultado3);
