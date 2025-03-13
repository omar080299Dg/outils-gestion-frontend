import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { CommonModule } from '@angular/common';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { Projet } from '../../interfaces/Projet';
import { ProjetService } from '../../services/projet.service';


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
    MatDialogModule
  ]
})
export class ProjetComponent implements OnInit {
  projets:Projet[]=[]
  constructor(private projetService:ProjetService){}


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

}
