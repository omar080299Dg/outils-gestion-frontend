import { Component, OnInit } from '@angular/core';
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
import { ClientService } from '../../services/client.service';
import { MatDialogRef } from '@angular/material/dialog';
import { SnackBarService } from 'src/app/services/snackbar.service';

@Component({
  standalone:true,
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css'],
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
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSnackBarModule
       ]
})
export class AddClientComponent implements OnInit {
    id_client!: string;
    nom_du_client!: string;
    categorie_client!: string;
    forme_adhesion!: string;
    annee_adhesion!: string;
    nom_contact!: string;
    courriel!: string;
    courriel2!: string;
    site_web!: string;
    adresse!: string;
    no_tel!: string;
    registerForm!: UntypedFormGroup;

constructor(private clientService:ClientService, private snackBarService:SnackBarService,private dialogRef: MatDialogRef<AddClientComponent>){}

ngOnInit(): void {
  this.registerForm = new UntypedFormGroup({
    id_client: new UntypedFormControl('', Validators.required),
    nom_du_client: new UntypedFormControl('', Validators.required),
    categorie_client: new UntypedFormControl('', Validators.required),
    forme_adhesion: new UntypedFormControl('', Validators.required),
    annee_adhesion: new UntypedFormControl('', Validators.required),
    nom_contact: new UntypedFormControl('', Validators.required),
    courriel: new UntypedFormControl('', [Validators.required, Validators.email]),
    courriel2: new UntypedFormControl('', Validators.email),
    site_web: new UntypedFormControl(''),
    adresse: new UntypedFormControl('', Validators.required),
    no_tel: new UntypedFormControl('', Validators.required)
});
}

addClient() {

  let registerBody = { ...this.registerForm.value };
  console.log(registerBody)
  this.clientService.addClient(registerBody).subscribe({
    next: () => {this.snackBarService.openSnackBar("CLient enregistré !")
      this.clientService.getAllClient()
      this.dialogRef.close()
    },
    error: (error) => {
      this.snackBarService.openSnackBar(error.error.error.message, 'warning');
      console.log(error);
    }
  });
}

}
