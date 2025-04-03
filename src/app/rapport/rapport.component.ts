import { Component, OnInit } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule, UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatNativeDateModule} from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { EmployesService } from '../services/employes.service';
import { Employe } from '../interfaces/employe';
import { CommonModule } from '@angular/common';
import { RapportService } from '../services/rapport.service';
import { Location } from '../interfaces/Location';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@Component({
  standalone:true,
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.css'],
  imports:[ FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule, MatNativeDateModule,
    CommonModule,
    MatProgressBarModule]
})
export class RapportComponent implements OnInit{
  employees:Employe[]=[]
  id_employe!:number ;
  start!:Date;
  end!:Date;
  registerForm!: UntypedFormGroup;
  locations:Location[]=[]
  ratio= {

    teletravail:0,
    bureau:0
  }
  percent=0;


    constructor(private employeService:EmployesService, private rapportService:RapportService){}
  ngOnInit(): void {
    this.getAllEmploye()

    this.registerForm = new UntypedFormGroup({
      id_employe: new UntypedFormControl(''),
      start: new UntypedFormControl(''),
      end: new UntypedFormControl('')

    });
  }

  public getAllEmploye(){
    this.employeService.getActiveEmploye().subscribe(
      (data:any)=>{
            this.employees = data
            console.log(data)
      },
      (error:any)=>{
        console.log(error)
      }

    )
  }

  public filtrer() {
    const endDate = this.registerForm.value.end ? new Date(this.registerForm.value.end) : null;
    const startDate = this.registerForm.value.start ? new Date(this.registerForm.value.start) : null;
    const employeId = this.registerForm.value.id_employe?.trim() || null;

    const formattedEndDate = endDate ? endDate.toISOString().split('T')[0] : null;
    const formattedStartDate = startDate ? startDate.toISOString().split('T')[0] : null;

    const params: any = {};
    if (employeId) params.id_employe = employeId;
    if (formattedStartDate) params.start = formattedStartDate;
    if (formattedEndDate) params.end = formattedEndDate;

    console.log('🔍 Envoi des paramètres:', params);

    this.rapportService.getLocation(params.id_employe, params.start, params.end).subscribe({
      next: (data) => {
        console.group(data)
        this.locations = data;
        this.ratio =  this.rapportService.calculateWorkRatios(this.locations)
        this.percent = Math.round(this.ratio.bureau);
      },
      error: (error) => {
        console.error('❌ Erreur lors du chargement des locations:', error);
      }
    });
  }

}
