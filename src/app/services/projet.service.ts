import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Projet } from '../interfaces/Projet';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
   private apiUrl = "http://localhost:3000/api"
    constructor(private http: HttpClient) { }

   public getAllProjet():Observable<Projet[]>{
    return this.http.get<Projet[]>(`${this.apiUrl}/projet/all`)
      }

    public donwloadCsV(){
      return this.http.get(`${this.apiUrl}/projet/download`, { responseType: 'blob' })
    }
}
