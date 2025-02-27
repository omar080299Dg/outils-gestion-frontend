import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { Employe } from 'src/app/interfaces/employe';
import { EmployesService } from 'src/app/services/employes.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';


@Component({
  standalone:true,
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css'],
  imports:[
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatPaginatorModule,

  ]
})

export class EmployeComponent implements OnInit {
  public employees: Employe[] = []
  displayedColumns: string[] = ['id_employe', 'nom', 'prenom', 'courriel'];

  constructor(private employeService: EmployesService){}

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

}


