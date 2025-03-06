export interface Employe{
  id_employe:number,
  nom:string,
  prenom:string,
  courriel:string,
  date_inscription:string,
  login:string,
  rais_ajust_temps:string,
  mdp:string,
  ajustement_temps:number,
  actif?:boolean

}
export type EmployeBody = Pick<Employe, 'nom'|'prenom'|'courriel'|'date_inscription'|'rais_ajust_temps'|'ajustement_temps'>
export type EmployeProfile = Pick<Employe, 'nom'|'prenom'|'courriel'|'date_inscription'|'rais_ajust_temps'|'ajustement_temps'| 'actif'>

