export interface AuthResponse{
  oK: boolean,
  uid?: string,
  nombre?: string,
  token?: string,
  msg?:string
}



export interface Usuario{
  uid:string;
  nombre:string;
}
