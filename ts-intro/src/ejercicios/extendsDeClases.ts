
/*
    ===== Código de TypeScript =====
*/

class PersonaNormal{
    constructor(
        public nombre:string, 
        public direccion:string){};
}


class Heroe extends PersonaNormal{
    //alterEgo:string;
    //edad:number;
    //nombreReal:string;

    constructor(
        public alterEgo:string,
        public edad:number,
        public nombreReal:string
        ){
            super(nombreReal,'new York');
      //  this.alterEgo=alterEgo;
    }
}

const ironman=new Heroe('IronMan',30,'Tony');
console.log(ironman);