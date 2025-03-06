import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployesService } from '../services/employes.service';
import { EmployeProfile } from '../interfaces/employe';

@Component({
  selector: 'app-employe-profile',
  templateUrl: './employe-profile.component.html',
  styleUrls: ['./employe-profile.component.css']
})
export class EmployeProfileComponent  implements OnInit{
  employeeId!: string;
  employeeInfo!:EmployeProfile
  constructor(private route: ActivatedRoute, private employeService:EmployesService) {}
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

}
