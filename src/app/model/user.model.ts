// export class User {
//     id: number;
//     name: string;
//     email: string;
//     password: string;

//   }

  export interface User {
    user_id : number;
    email: string;
    password: string;

  }

  export interface Persona extends User{
    persona_id: number;
    first_name : string;
    last_name : string;
    cellphone : string;
    ci : string;
  }

  export interface Admin extends Persona{
    personas : Persona;
    users : User;
    // // user_id:User;
    // // persona_id:Persona
  }
  export interface Student extends Persona{
    personas : Persona;
    users : User;
  }

  export class ResponseAdmin {
    // ok : boolean;
    Admin : Admin[];
  }
  export class ResponseStudent {
    ok : boolean;
    Student : Student[];
  }

  export class Colegio {
    id:number;
    nombre_colegio : string;
    direccion: string;
    telefono: string;
    celular: string;
    imagen: string
  }

  export class ResponseColegio {
    ok : boolean;
    Colegio : Colegio[];
  }