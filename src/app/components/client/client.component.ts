import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../interfaces/Client';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule} from '@angular/material/table';
import { CommonModule } from '@angular/common';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { AddClientComponent } from '../add-client/add-client.component';
import { Router } from '@angular/router';
import { UntypedFormGroup } from '@angular/forms';

@Component({
  standalone:true,
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
   imports:[MatMenuModule,
      MatButtonModule,
      MatTableModule,
      MatPaginatorModule,
      MatPaginatorModule,
      CommonModule,
      MatDialogModule
    ]
})
export class ClientComponent implements OnInit {



  constructor(private clientService:ClientService,public dialog: MatDialog, private router:Router){}
  clients: Client[]=[];
  displayedColumns: string[] = [
    'id_client',
    'nom_du_client',
    'categorie_client',
    'forme_adhesion',
    'annee_adhesion',
    'nom_contact',
    'courriel',
    'courriel2',
    'site_web',
    'addresse',
    'no_tel'
  ];

  ngOnInit(): void {
  this.getClients()

  }
  dataSource = new MatTableDataSource<Client>(this.clients);

applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
   console.log("filtering")
  }

  public getClients(){
    this.clientService.getAllClient().subscribe(
      (data:any)=>{
            this.clients = data
            this.dataSource.data = this.clients
            console.log(data)
      },
      (error:any)=>{
        console.log(error)
      }

    )
  }

  public addClient(){

  }
  openDialog() {
     this.dialog.open(AddClientComponent,  {
        width: '500px',
        height: '600px',
        panelClass: 'custom-dialog-container'
      }),
      this.dialog.afterAllClosed.subscribe(result =>{
       this.getClients()
      })
    }
}
