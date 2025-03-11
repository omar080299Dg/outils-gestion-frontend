import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployesService } from '../services/employes.service';
import { EmployeProfile } from '../interfaces/employe';
import { MatDialog } from '@angular/material/dialog';
import { UpdateStatutComponent } from '../update-statut/update-statut.component';

@Component({
  selector: 'app-employe-profile',
  templateUrl: './employe-profile.component.html',
  styleUrls: ['./employe-profile.component.css']
})
export class EmployeProfileComponent  implements OnInit{
  employeeId!: string;
  employeeInfo!:EmployeProfile
  constructor(private route: ActivatedRoute, private employeService:EmployesService,private dialog:MatDialog) {}
  ngOnInit() {
    this.employeeId = this.route.snapshot.paramMap.get('id') ?? '';
    this.getmployeInfo()
    console.log('Employé sélectionné :', this.employeeId); // ✅ Vérifie si l'ID s'affiche bien
  }

  getmployeInfo(){
    this.employeService.getEmployeById(this.employeeId).subscribe(
      (data)=>{
        this.employeeInfo = data
      },
      (error)=>{
        console.log("eroor",error)
      }
    )
  }

  openDialog() {
   this.dialog.open(UpdateStatutComponent,  {
      width: '300px',
      height: '290px',
      panelClass: 'custom-dialog-container'
    }),
    this.dialog.afterAllClosed.subscribe(result =>{
     this.employeService.getAllEmploye()
    })
  }

}
