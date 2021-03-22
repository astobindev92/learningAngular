
/*
    ===== Código de TypeScript =====
*/

interface SuperHeroe{
    nombre:string,
    edad:number,
    /* Esta es una manera pero no es recomendado*/
    /***direccion:{
        calle:string,
        pais:string,
        ciudad:string
    },***/
    direccion:Direccion,
    mostrarDireccion:()=>string
}

/* Otra opción para los objetos es crear otra Interface */
interface Direccion{
    calle:string,
    pais:string,
    ciudad:string
}



const superHeroe:SuperHeroe={
    nombre:'Iron Man',
    edad:30,
    direccion:{
        calle:'main ST',
        pais:'USA',
        ciudad:'NY'
    },
    mostrarDireccion(){
        return this.nombre +', ' +this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}

const direccion=superHeroe.mostrarDireccion();
console.log(direccion);