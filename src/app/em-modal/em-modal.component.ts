import { Component, NgModule, OnInit } from '@angular/core';
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';

import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { EmployesService } from '../services/employes.service';
import { SnackBarService } from '../services/snackbar.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';





@Component({
  standalone:true,
  selector: 'app-em-modal',
  templateUrl: './em-modal.component.html',
  styleUrls: ['./em-modal.component.css'],
  imports:[ MatMenuModule,
      MatButtonModule,
      MatTableModule,
      MatPaginatorModule,
      MatPaginatorModule,
      CommonModule,
      MatFormFieldModule,
       MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
         MatNativeDateModule,
         FormsModule,MatIconModule,ReactiveFormsModule,MatSnackBarModule
         ]


})
export class EmModalComponent  implements OnInit {
  id_employe!:number ;
  nom!:string ;
  prenom!:string ;
  courriel!:string ;
  date_inscription!: Date;
  login!:string;
  rais_ajust_temps!:string;
  mdp!:string ;
  ajustement_temps!:number;
  actif?:boolean;

  registerForm!: UntypedFormGroup;

constructor(private employeervice:EmployesService, private snackBarService:SnackBarService,private dialogRef: MatDialogRef<EmModalComponent>){}


  ngOnInit() {
      this.registerForm = new UntypedFormGroup({
        prenom: new UntypedFormControl('', Validators.required),
        nom: new UntypedFormControl('', Validators.required),
        courriel: new UntypedFormControl('', [Validators.required, Validators.email]),
        date_inscription: new UntypedFormControl('', Validators.required),
        ajustement_temps: new UntypedFormControl(),
        rais_ajust_temps: new UntypedFormControl()


        });


  }


  getFormControlErrorText(ctrl: AbstractControl) {
    if (ctrl.hasError('required')) {
      return 'Ce champ est requis';
    } else if (ctrl.hasError('email')) {
      return 'Ce champ ne respecte pas le format d\'une adresse courriel valide';
    } else if (ctrl.hasError('minlength')) {
      return 'Ce champ ne respecte pas le nombre minimal de caractères (6)';
    } else {
      return 'Ce champ contient une erreur';
    }
  }


  onRegister() {

    let registerBody = { ...this.registerForm.value };
    console.log(registerBody)
    this.employeervice.register(registerBody).subscribe({
      next: () => {this.snackBarService.openSnackBar("Employé enregistré !")
        this.employeervice.getAllEmploye()
        this.dialogRef.close()
      },
      error: (error) => {
        this.snackBarService.openSnackBar(error.error.error.message, 'warning');
        console.log(error);
      }
    });
  }


}
