import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employe, EmployeBody, EmployeProfile } from '../interfaces/employe';


@Injectable({
  providedIn: 'root'
})
export class EmployesService {

  private apiUrl = "http://localhost:3000/api"
  constructor(private http: HttpClient) { }

  public getAllEmploye():Observable<Employe[]>{
    return this.http.get<Employe[]>(`${this.apiUrl}/employe/all`)
  }

  public getActiveEmploye():Observable<Employe[]>{
    return this.http.get<Employe[]>(`${this.apiUrl}/employe/active`)
  }

  register(body: EmployeBody) {
    console.log("saving...",body)
    return this.http.post<any>(`${this.apiUrl}/employe/add`, body)
  }

  getEmployeById(employeId:string):Observable<EmployeProfile>{
    return this.http.get<EmployeProfile>(`${this.apiUrl}/employe/${employeId}`)
  }
  updateStatut(employeId:string, statut: { statut: number }):Observable<Employe>{
    console.log(statut)
    return this.http.put<any>(`${this.apiUrl}/employe/${employeId}`,statut)
  }


}
