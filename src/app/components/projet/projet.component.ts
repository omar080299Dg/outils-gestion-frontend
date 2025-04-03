import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { CommonModule } from '@angular/common';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Projet } from '../../interfaces/Projet';
import { ProjetService } from '../../services/projet.service';
import { MatIconModule } from '@angular/material/icon';
import { EmployesService } from 'src/app/services/employes.service';
import { ClientService } from 'src/app/services/client.service';


@Component({
  standalone:true,
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css'],
  imports:[MatMenuModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatPaginatorModule,
    CommonModule,
    MatDialogModule,
       MatSidenavModule,
          MatListModule,
          MatCardModule,
          MatToolbarModule,      MatIconModule,

  ]
})
export class ProjetComponent implements OnInit {
  projets:Projet[]=[]
  constructor(private projetService:ProjetService, private employeService: EmployesService, private clientService:ClientService){}


  displayedColumns: string[] = [
    'id_projet',
    'id_emloye',
    'nom_du_projet',
    'code_projet',
    'statut',
    'detail',
    'suivi',
    'facture',
    'date_prevue',
    'montant_soumission',
    'date_debut',
    'date_fin',
    'code_etat_projet',
    'detail_etat_projet',
    'lien_facture',
    'lien_soumission',
    'tags',
    'publication',
    'categories',
    'id_client',
    'site_web',
    'code_mun',
    'code_mrc',
    'code_region',
    'zgie',
    'unite_geo',
    'carte_projet',
    'resume',
    'identifiant',
    'type_projet'
  ];


    ngOnInit(): void {
        this.getAllProject()

    }
     dataSource = new MatTableDataSource<Projet>(this.projets);

    public getAllProject(){
      this.projetService.getAllProjet().subscribe(
        (data:any)=>{
              this.projets = data
              this.dataSource.data = this.projets
              console.log(data)
        },
        (error:any)=>{
          console.log(error)
        }

      )
    }
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
     console.log("filtering")
    }

    downloadCsv(){
      this.projetService.donwloadCsV().subscribe(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'data.csv';
        a.click();
        window.URL.revokeObjectURL(url);
      });

    }
    selectedProjet: any = null;
    selectedEmploye: any = null;
    selectedClient: any = null;
    selectProjet(projet: any) {
      this.selectedProjet = projet;

      // Charger l'employé
      this.employeService.getEmployeById(projet.id_employe).subscribe(
        (data) => (this.selectedEmploye = data),
        (error) => console.error('Erreur chargement employé', error)
      );

      // Charger le client
      console.log(projet.id_client)
      this.clientService.getClientByID(projet.id_client).subscribe(

        (data) => {

          this.selectedClient = data},
        (error) => console.error('Erreur chargement client', error)
      );
    }
  }

