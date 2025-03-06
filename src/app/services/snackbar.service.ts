import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { IconSnackBarComponent } from '../icon-snack-bar/icon-snack-bar.component';

type SnackBarDataIcon = 'info' | 'warning' | 'error';
interface SnackBarData {
  message: string;
  icon: SnackBarDataIcon;
}

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  snackBarDurationInSeconds = 5;

  constructor(private snackBar: MatSnackBar) { }

  /** Open a Material snackbar, providing message, optional Material icon and optional duration in seconds */
  openSnackBar(message: string, icon: SnackBarDataIcon = 'info', duration = this.snackBarDurationInSeconds) {
    const config = new MatSnackBarConfig();
    const data: SnackBarData = {
      message: message,
      icon: icon
    }
    config.data = data;
    config.duration = duration * 1000;
    switch (icon) {
      case 'warning': { config.panelClass = ['warning-dialog']; break; }
      case 'error': { config.panelClass = ['error-dialog']; break; }
    }
    this.snackBar.openFromComponent(IconSnackBarComponent, config);
    // this.snackBar.open(message, nulconfig);
  }

}
