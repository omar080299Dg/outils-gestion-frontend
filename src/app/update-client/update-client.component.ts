import { Component, Inject, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

import { FormsModule, ReactiveFormsModule, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule} from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SnackBarService } from 'src/app/services/snackbar.service';
import { ClientService } from '../services/client.service';
import { Client } from '../interfaces/Client';


@Component({
  standalone:true,
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css'],
  imports:[MatMenuModule,
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
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSnackBarModule

  ]
})
export class UpdateClientComponent implements OnInit{
  updates: Partial<Client> = {}
  constructor(private clientService:ClientService, private snackBarService:SnackBarService,@Inject(MAT_DIALOG_DATA) public data: { clientId: string },private dialogRef: MatDialogRef<UpdateClientComponent>){}
  nom_du_client!: string;
  categorie_client!: string;
  forme_adhesion!: string;
  nom_contact!: string;
  courriel!: string;
  courriel2!: string;
  site_web!: string;
  adresse!: string;
  no_tel!: string;
  registerForm!: UntypedFormGroup;

  ngOnInit(): void {
    this.registerForm = new UntypedFormGroup({
      nom_du_client: new UntypedFormControl(''),
      categorie_client: new UntypedFormControl(''),
      forme_adhesion: new UntypedFormControl(''),
      annee_adhesion: new UntypedFormControl(''),
      nom_contact: new UntypedFormControl(''),
      courriel: new UntypedFormControl(''),
      courriel2: new UntypedFormControl(''),
      site_web: new UntypedFormControl(''),
      adresse: new UntypedFormControl(''),
      no_tel: new UntypedFormControl('')
  });

  }updateClient() {
    console.log(this.data.clientId, this.updates);

    if (!this.data.clientId) {
      console.error('ID du client non trouvé');
      return;
    }

    // Récupérer les anciennes valeurs avant la mise à jour
    this.clientService.getClientByID(this.data.clientId).subscribe((oldClient) => {
      let registerBody = { ...oldClient, ...this.registerForm.value };

      // Filtrer les champs qui sont `null` ou `undefined`
      Object.keys(registerBody).forEach((key) => {
        if (registerBody[key] === null || registerBody[key] === undefined || registerBody[key]==='') {
          delete registerBody[key];
        }
      });

      console.log(registerBody); // Vérifie que tous les champs valides sont conservés

      this.clientService.updateClient(this.data.clientId, registerBody).subscribe({
        next: (response) => console.log('Client mis à jour avec succès', response),
        error: (error) => console.error('Erreur lors de la mise à jour', error)
      });
    });
  }


  }
