import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { Employe } from 'src/app/interfaces/employe';
import { EmployesService } from 'src/app/services/employes.service';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { CommonModule } from '@angular/common';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EmModalComponent } from 'src/app/em-modal/em-modal.component';
import { Router } from '@angular/router';





@Component({
  standalone: true,
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css'],
  imports:[MatMenuModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatPaginatorModule,
    CommonModule,
    MatDialogModule
  ]

})

export class EmployeComponent implements OnInit {

  public employees: Employe[] = []
  displayedColumns: string[] = ['id_employe', 'nom', 'prenom', 'courriel','date_inscrption','rais_ajust_temps','ajustement_temp','actif'];

  constructor(private employeService: EmployesService,public dialog: MatDialog, private router:Router){}

  ngOnInit(): void {
      this.getAllEmploye()

  }
   dataSource = new MatTableDataSource<Employe>(this.employees);

  public getAllEmploye(){
    this.employeService.getAllEmploye().subscribe(
      (data:any)=>{
            this.employees = data
            this.dataSource.data = this.employees
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
  openDialog() {
   this.dialog.open(EmModalComponent,  {
      width: '500px',
      height: '490px',
      panelClass: 'custom-dialog-container'
    }),
    this.dialog.afterAllClosed.subscribe(result =>{
     this.getAllEmploye()
    })
  }
  goToDetails(employeId:string){
    console.log(employeId)
    this.router.navigate(['employee', employeId]);
  }

}




