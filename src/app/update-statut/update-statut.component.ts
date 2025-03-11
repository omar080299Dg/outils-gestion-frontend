import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
export class UpdateStatutComponent {

  constructor(private employeService: EmployesService){}



}
