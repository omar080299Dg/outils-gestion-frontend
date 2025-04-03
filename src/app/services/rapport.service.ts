import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from '../interfaces/Location';

@Injectable({
  providedIn: 'root'
})
export class RapportService {



   private apiUrl = "http://localhost:3000/api"
      constructor(private http: HttpClient) { }

     public getLocation(id_employe?: string, start?: string, end?: string):Observable<Location[]>{
      let params = new HttpParams();
      if (id_employe) {
        params = params.set('id_employe', id_employe);
      }
      if (start && end) {
        params = params.set('start', start).set('end', end);
      }

      return this.http.get<any>(`${this.apiUrl}/rapport/location`, { params });
        }

        public  calculateWorkRatios(locations: Location[]): { bureau: number; teletravail: number; } {

          if (!locations || locations.length === 0) {
            return { bureau: 0, teletravail: 0 };
        }

        const total = locations.length;
        const counts = { bureau: 0, teletravail: 0 };

        locations.forEach((entry) => {
            // Log pour vérifier la valeur de location de chaque entrée
            console.log(`Location: ${entry.location}`);

            if (entry.location === "bureau") {
                counts.bureau++;
            } else if (entry.location === "teletravail") {
                counts.teletravail++;
            } else {
                console.log(`Location inconnue: ${entry.location}`); // Log pour repérer d'éventuelles valeurs inconnues
            }
        });

        console.log("Counts:", counts); // Vérification des résultats des comptages

        // Calcul des ratios
        const bureauRatio = (counts.bureau / total) * 100;
        const teletravailRatio = (counts.teletravail / total) * 100;

        // Log final pour les résultats
        console.log(`Ratios calculés - Bureau: ${bureauRatio}%, Télétravail: ${teletravailRatio}%`);

        return {
            bureau: bureauRatio,
            teletravail: teletravailRatio,
        };
    }
  }
