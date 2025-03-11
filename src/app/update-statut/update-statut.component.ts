import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon'
import { FormsModule, ReactiveFormsModule, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { EmployesService } from '../services/employes.service';

@Component({
  standalone:true,
  selector: 'app-update-statut',
  templateUrl: './update-statut.component.html',
  styleUrls: ['./update-statut.component.css'],
  imports:[
    MatDialogModule,
    MatFormFieldModule,
          MatInputModule,
          MatSelectModule,
          MatDatepickerModule,
          MatNativeDateModule,
          FormsModule,
          MatIconModule,
          ReactiveFormsModule,
          MatButtonModule
  ]
})
export class UpdateStatutComponent implements OnInit{

  constructor(private employeService: EmployesService, @Inject(MAT_DIALOG_DATA) public data: { employeId: string },private dialogRef: MatDialogRef<UpdateStatutComponent>){}
 registerForm!:UntypedFormGroup

  ngOnInit(): void {
      this.registerForm = new UntypedFormGroup({
              statut: new UntypedFormControl('', Validators.required),
         });
  }
  updateStatut(){
    const dataParsed = parseInt(this.registerForm.get('statut')?.value, 10);

    const body = JSON.stringify({ statut: dataParsed })
    console.log(body)

    this.employeService.updateStatut(this.data.employeId,{ statut: dataParsed })
    .subscribe(()=>{
        alert("Statut modifié")
        this.dialogRef.close()
    },(error)=>{
      alert("Erreur lors de la modification")
    })
  }

}
