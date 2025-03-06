import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employe, EmployeBody, EmployeProfile } from '../interfaces/employe';


@Injectable({
  providedIn: 'root'
})
export class EmployesService {

  private apiUrl = "http://localhost:3000/api/employe"
  constructor(private http: HttpClient) { }

  public getAllEmploye():Observable<Employe[]>{
    return this.http.get<Employe[]>(`${this.apiUrl}/all`)
  }

  register(body: EmployeBody) {
    console.log("saving...",body)
    return this.http.post<any>(`${this.apiUrl}/add`, body)
  }

  getEmployeById(employeId:string):Observable<EmployeProfile>{
    return this.http.get<EmployeProfile>(`${this.apiUrl}/${employeId}`)
  }

}
