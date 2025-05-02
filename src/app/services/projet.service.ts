import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Projet } from '../interfaces/Projet';
import { Mrc, Region, UniteGeo } from '../interfaces/Mrc';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
   private apiUrl = "http://localhost:3000/api"
    constructor(private http: HttpClient) { }

   public getAllProjet():Observable<Projet[]>{
    return this.http.get<Projet[]>(`${this.apiUrl}/projet/all`)
      }
  public getAllMrc():Observable<Mrc[]>{
        return this.http.get<Mrc[]>(`${this.apiUrl}/mrc/all`)
          }
   public getAllRegion():Observable<Region[]>{
            return this.http.get<Region[]>(`${this.apiUrl}/region/all`)
              }
    public getAllUniteGO():Observable<UniteGeo[]>{
                return this.http.get<UniteGeo[]>(`${this.apiUrl}/ugeo/all`)
                  }

    public donwloadCsV(){
      return this.http.get(`${this.apiUrl}/projet/download`, { responseType: 'blob' })
    }


}
