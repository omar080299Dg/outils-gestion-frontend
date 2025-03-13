import { Component, Inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MAT_SNACK_BAR_DATA, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  standalone:true,
  selector: 'app-icon-snack-bar',
  templateUrl: './icon-snack-bar.component.html',
  styleUrls: ['./icon-snack-bar.component.css'],
  imports:[
    MatSnackBarModule,
    MatIconModule
  ]
})
export class IconSnackBarComponent {


    constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }


}
