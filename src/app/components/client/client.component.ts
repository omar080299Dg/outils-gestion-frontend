import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../interfaces/Client';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule} from '@angular/material/table';
import { CommonModule } from '@angular/common';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { AddClientComponent } from '../add-client/add-client.component';
import { Router } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UpdateClientComponent } from 'src/app/update-client/update-client.component';

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
      MatDialogModule,
      MatTableModule,
      MatIconModule,
      MatDialogModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatSidenavModule,
      MatListModule,
      MatCardModule,
      MatToolbarModule
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

  selectedClient: any = null;

  selectClient(client: any) {
    this.selectedClient = client;
  }

    openUpdateDialog(clientId: string) {
     this.dialog.open(UpdateClientComponent,  {
      width: '500px',
      height: '500px',
        panelClass: 'custom-dialog-container',
        data:{
          clientId
        }
      }),
      this.dialog.afterAllClosed.subscribe(result =>{
        window.location.reload();
      })
    }
}


