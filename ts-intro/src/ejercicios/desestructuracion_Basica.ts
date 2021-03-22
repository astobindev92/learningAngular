
/*
    ===== Código de TypeScript =====
*/
interface Reproductor{
    volumen:number,
    segundo:number,
    cancion:string,
    detalles:Detalles
}

interface Detalles{
    autor:string,
    anio:number
}

const reproductor:Reproductor={
    volumen:90,
    segundo:36,
    cancion:'mes',
    detalles:{
        autor:'Ed Sheran',
        anio:2012
    }
}

/* Con la desestructuración*/
const {volumen,segundo,cancion,detalles}=reproductor

const{autor}=detalles
//console.log('Es la canción : ',autor); // esta es una forma pero también se puede desesctructurar detalles


console.log('El volumen actual es de : ',volumen);
console.log('Esta en el segundo : ',segundo);
console.log('Es la canción : ',cancion);
console.log('Es la canción : ',autor); // esta es una forma pero también se puede desesctructurar detalles


/* Manera antigua de hacerlo*/
//console.log('El volumen actual es de : ',reproductor.volumen);
//console.log('Esta en el segundo : ',reproductor.segundo);
//console.log('Es la canción : ',reproductor.cancion);
//console.log('El autor es : ',reproductor.detalles.autor);


/****** Desestructuracion de Arreglos ******/

/* Se hace por posición */
const dbz:string[]=['Goku','Vegeta','Gotenks'];
const [p1]=dbz;

console.log('Personaje 1:',p1);
console.log('Personaje 2:',dbz[1]);
console.log('Personaje 3:',dbz[2]);

