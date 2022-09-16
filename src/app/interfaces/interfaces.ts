export interface Componente {
  icon:string,
  name:string;
  redirectTo:string
}

export interface User {
  email:string;
  password:string;
}

export class Credentials {
  user: User;
  token?: string;
  session?: string;
}