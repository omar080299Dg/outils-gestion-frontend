import { Component, NgModule } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
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

import { AbstractControl, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';





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
         FormsModule,MatIconModule
         ]


})
export class EmModalComponent {
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

}
