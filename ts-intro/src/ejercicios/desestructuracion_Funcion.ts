
/*
    ===== Código de TypeScript =====
*/
 
    export interface Producto{
        desc:string,
        precio:number
    }
    
    const telefono:Producto={
        desc:'Huawei p40',
        precio:334
    }
    
    const tableta:Producto={
        desc:'Lenovo 3r0',
        precio:545
    }

export function calcularISV(productos:Producto[]):[number,number]{ // una coleccion de objetos tipo producto
    let total=0; // Se coloca con let porque va a cambiar su valor

/* Otra con esta opcion se tiene que dar producto.atributo */
    //productos.forEach((producto)=>{
    //    total+=producto.precio
    //});
    productos.forEach(({precio})=>{ // destructurando el objeto 
        total+=precio;
    })
    return [total,total*0.15]
}


const articulos=[telefono,tableta];

const [total,isv]=calcularISV(articulos);

//const isv=calcularISV(articulos);
console.log('Total: ' + total);
console.log('ISV: '+isv);
