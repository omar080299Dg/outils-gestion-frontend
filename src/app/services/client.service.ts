import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../interfaces/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
   private apiUrl = "http://localhost:3000/api"
    constructor(private http: HttpClient) { }

  public getAllClient():Observable<Client[]>{
    return this.http.get<Client[]>(`${this.apiUrl}/client/all`)
  }

    getClientByID(clientId:string):Observable<Client>{
      return this.http.get<Client>(`${this.apiUrl}/client/${clientId}`)
    }

     addClient(body: Client) {
        console.log("saving...",body)
        return this.http.post<any>(`${this.apiUrl}/client/add`, body)
      }
}
